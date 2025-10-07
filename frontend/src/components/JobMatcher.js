import React, { useState } from 'react';
import {
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './JobMatcher.css';

const JobMatcher = ({ currentSkills }) => {
  const [jobRole, setJobRole] = useState('');
  const [matchResults, setMatchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleMatch = () => {
    setLoading(true);
    // Mock API call - replace with actual matching logic
    setTimeout(() => {
      setMatchResults({
        matchPercentage: 75,
        missingSkills: ['AWS', 'Docker', 'Kubernetes', 'GraphQL'],
        recommendedCourses: ['Cloud Computing Fundamentals', 'Docker & Kubernetes']
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <Paper elevation={3} className="job-matcher-container">
      <div className="sparkles"></div>
      
      <Typography variant="h4" className="title">
        Job Role Matcher
      </Typography>

      <Box className="search-container">
        <TextField
          fullWidth
          label="Enter Job Role (e.g., Data Scientist)"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          className="search-input"
        />
        <Button 
          variant="contained"
          onClick={handleMatch}
          className="search-button"
          disabled={loading || !jobRole}
          startIcon={loading ? <CircularProgress size={20} /> : <SearchIcon />}
        >
          Match Skills
        </Button>
      </Box>

      {matchResults && (
        <Box className="results-container">
          <div className="match-score">
            <CircularProgress
              variant="determinate"
              value={matchResults.matchPercentage}
              size={120}
              thickness={4}
              className="progress-circle"
            />
            <Typography className="percentage-text">
              {matchResults.matchPercentage}%
            </Typography>
            <Typography className="match-label">
              Match Score
            </Typography>
          </div>

          <div className="missing-skills">
            <Typography variant="h6" className="section-title">
              Skills to Acquire:
            </Typography>
            <div className="skills-grid">
              {matchResults.missingSkills.map((skill) => (
                <div key={skill} className="skill-chip">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="recommended-courses">
            <Typography variant="h6" className="section-title">
              Recommended Courses:
            </Typography>
            <div className="courses-list">
              {matchResults.recommendedCourses.map((course) => (
                <div key={course} className="course-card">
                  {course}
                </div>
              ))}
            </div>
          </div>
        </Box>
      )}
    </Paper>
  );
};

export default JobMatcher;