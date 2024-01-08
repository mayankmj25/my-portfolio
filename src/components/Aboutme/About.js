import Timeline from "@mui/lab/Timeline";
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import { Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div className="about" id="about">
      <div className="left">
        <h2 className='title'>EXPERIENCE</h2>
      </div>
      <div className="right">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent className='timeline'>
              Sept 2023 - Dec 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant='outlined'/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant='h5' component='span' className='companytext'>
                Frontend Developer
              </Typography>
              <Typography>Synaptic</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className='timeline'>
              Jan 2023 - Jul 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='h5' component='span' className='companyText'>
                  Frontend Developer
                </Typography>
                <Typography>Tekion Corp</Typography>
              </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  )
}

export default About;