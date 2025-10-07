import React, { useState } from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import ResumeUpload from './components/ResumeUpload';
import JobMatcher from './components/JobMatcher';
import FutureSkills from './components/FutureSkills';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    background: { default: '#f4f6f9' }, // soft neutral background
  },
});

function App() {
  const [analysisResults, setAnalysisResults] = useState(null);

  const handleUploadSuccess = (results) => setAnalysisResults(results);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app-background">
        <Container maxWidth="md">
          <Box className="content-container">
            <ResumeUpload onUploadSuccess={handleUploadSuccess} />
            {analysisResults && (
              <>
                <JobMatcher currentSkills={analysisResults.skills} />
                <FutureSkills />
              </>
            )}
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
