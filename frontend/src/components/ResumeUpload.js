import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  Button,
  CircularProgress
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './ResumeUpload.css';

const ResumeUpload = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleFileUpload = async (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    setLoading(true);
    
    // Mock API call - replace with actual upload logic
    setTimeout(() => {
      setLoading(false);
      setUploadComplete(true);
      onUploadSuccess({
        suggestedRoles: ['Data Scientist', 'ML Engineer', 'Data Analyst'],
        skills: ['Python', 'SQL', 'Machine Learning']
      });
    }, 2000);
  };

  return (
    <Paper elevation={3} className="resume-upload-container">
      <div className="upload-background-effect"></div>
      
      <Typography variant="h4" className="upload-title">
        Upload Your Resume
      </Typography>

      <Box className="upload-box">
        <input
          accept=".pdf,.doc,.docx"
          style={{ display: 'none' }}
          id="resume-upload"
          type="file"
          onChange={handleFileUpload}
        />
        <label htmlFor="resume-upload">
          <Button
            variant="contained"
            component="span"
            className="upload-button"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : <CloudUploadIcon />}
          >
            Select Resume
          </Button>
        </label>

        {file && (
          <div className="file-info">
            <FileUploadIcon className="file-icon" />
            <Typography className="file-name">
              {file.name}
            </Typography>
            {uploadComplete && (
              <CheckCircleIcon className="success-icon" />
            )}
          </div>
        )}

        <Typography className="supported-formats">
          Supported formats: PDF, DOC, DOCX
        </Typography>
      </Box>

      {uploadComplete && (
        <div className="upload-success">
          <Typography variant="h6" className="success-message">
            Resume Analysis Complete!
          </Typography>
          <Typography className="success-subtitle">
            Scroll down to see your personalized job matches and skill recommendations
          </Typography>
        </div>
      )}
    </Paper>
  );
};

export default ResumeUpload;