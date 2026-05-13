import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import ProjectsSection from './ProjectsSection'
import InvolvementsSection from './InvolvementsSection'

export default function ExperienceTabs({ projectItems, involvementItems, onSelectProject }) {
  const [value, setValue] = useState('1')

  return (
    <div className="experience-tabs">
      <TabContext value={value}>
        <Box className="tab-box">
          <TabList onChange={(_, v) => setValue(v)} aria-label="Work samples">
            <Tab label="Projects" value="1" />
            <Tab label="Involvements" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="projects-container">
            <ProjectsSection
              items={projectItems}
              hideTitle
              integrated
              onSelectProject={onSelectProject}
            />
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="involvements-container">
            <InvolvementsSection items={involvementItems} hideTitle integrated />
          </div>
        </TabPanel>
      </TabContext>
    </div>
  )
}
