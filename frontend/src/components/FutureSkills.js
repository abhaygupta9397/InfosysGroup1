import React from 'react';
import {
  Paper,
  Typography,
  Box
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';
import './FutureSkills.css';

const FutureSkills = () => {
  const predictions = [
    {
      year: 2025,
      skill: 'Generative AI',
      prediction: '80% of Data Science roles will require Generative AI expertise'
    },
    {
      year: 2026,
      skill: 'Quantum Computing',
      prediction: 'Growing demand for Quantum ML specialists'
    },
    {
      year: 2027,
      skill: 'Edge AI',
      prediction: 'Edge computing skills will be essential for ML engineers'
    }
  ];

  return (
    <Paper elevation={3} className="future-skills-container">
      <Box className="glow-overlay" />
      
      <Typography variant="h4" className="title">
        Future Skills Forecast
      </Typography>

      <Timeline position="alternate">
        {predictions.map((pred) => (
          <TimelineItem key={pred.year}>
            <TimelineSeparator>
              <TimelineDot className={`timeline-dot-${pred.year}`} />
              <TimelineConnector className={`timeline-connector-${pred.year}`} />
            </TimelineSeparator>
            <TimelineContent>
              <Box className="timeline-card">
                <Typography className={`year-text year-${pred.year}`}>
                  {pred.year}
                </Typography>
                <Typography className="skill-text" variant="h5">
                  {pred.skill}
                </Typography>
                <Typography className="prediction-text">
                  {pred.prediction}
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
};

export default FutureSkills;