/*
	Installed from https://reactbits.dev/default/
*/

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import "./CardSwap.css";

export const Card = forwardRef(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`card ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
    />
  )
);
Card.displayName = "Card";

const makeSlot = (
  i,
  distX,
  distY,
  total
) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});
const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap = ({
  width = 800,
  height = 400,
  /** When true, width/height follow the parent element (via ResizeObserver). */
  fillContainer = false,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 2,
  easing = "elastic",
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
        ease: "elastic.out(0.6,0.9)",
        durDrop: 2,
        durMove: 2,
        durReturn: 2,
        promoteOverlap: 0.9,
        returnDelay: 0.05,
      }
      : {
        ease: "power1.inOut",
        durDrop: 0.8,
        durMove: 0.8,
        durReturn: 0.8,
        promoteOverlap: 0.45,
        returnDelay: 0.2,
      };

  const childArr = useMemo(
    () => Children.toArray(children),
    [children]
  );
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(
    Array.from({ length: childArr.length }, (_, i) => i)
  );

  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);
  const fillRef = useRef(null);
  const [size, setSize] = useState({ w: width, h: height });

  useEffect(() => {
    if (!fillContainer) {
      setSize({ w: width, h: height });
      return;
    }
    const el = fillRef.current;
    if (!el) return;
    const read = () => {
      const r = el.getBoundingClientRect();
      /* Inset so skew, 3D stack offsets, and elastic overshoot stay inside the frame */
      const inset = 0.86;
      const w = Math.max(160, Math.round(r.width * inset));
      const h = Math.max(160, Math.round(r.height * inset));
      setSize((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));
    };
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    window.addEventListener("resize", read);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", read);
    };
  }, [fillContainer, width, height]);

  const effW = size.w;
  const effH = size.h;
  const distX = fillContainer
    ? Math.max(8, Math.round(effW * 0.035))
    : cardDistance;
  const distY = fillContainer
    ? Math.max(14, Math.round(effH * 0.1))
    : verticalDistance;
  /* Default drop is huge vs viewport — caps clip when overflow:hidden */
  const dropPx = fillContainer
    ? Math.min(380, Math.max(140, Math.round(effH * 0.52)))
    : Math.min(560, Math.max(220, Math.round(effH * 1.15)));
  /* skewY widens the painted bounds; disable in fill mode to avoid corner clipping */
  const effSkew = fillContainer ? 0 : skewAmount;

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) =>
      placeNow(
        r.current,
        makeSlot(i, distX, distY, total),
        effSkew
      )
    );

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: `+=${dropPx}`,
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, distX, distY, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(
        refs.length - 1,
        distX,
        distY,
        refs.length
      );
      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return"
      );
      tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
      tl.to(
        elFront,
        {
          y: backSlot.y,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return"
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearInterval(intervalRef.current);
        tlRef.current?.kill();
      };
    }
    return () => {
      clearInterval(intervalRef.current);
      tlRef.current?.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cardDistance,
    verticalDistance,
    distX,
    distY,
    dropPx,
    effW,
    effH,
    delay,
    pauseOnHover,
    effSkew,
    easing,
  ]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
        key: i,
        ref: refs[i],
        style: { width: effW, height: effH, ...(child.props.style ?? {}) },
        onClick: (e) => {
          child.props.onClick?.(e);
          onCardClick?.(i);
        },
      }) : child
  );

  const stack = (
    <div
      ref={container}
      className={`card-swap-container${fillContainer ? " card-swap-container--fill" : ""}`.trim()}
      style={{ width: effW, height: effH }}
    >
      {rendered}
    </div>
  );

  if (fillContainer) {
    return (
      <div ref={fillRef} className="card-swap-fill">
        {stack}
      </div>
    );
  }

  return stack;
};

export default CardSwap;
