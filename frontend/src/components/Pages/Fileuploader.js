import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
  };

  const handleUpload = () => {
    if (file) {
      alert(`Uploading: ${file.name}`);
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: 400,
          padding: 4,
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <CloudUploadIcon sx={{ fontSize: 60, mb: 1 }} />
        <Typography variant="h6" gutterBottom>
          Upload Your Excel File
        </Typography>

        <Typography variant="body2" sx={{ mb: 2, color: '#ccc' }}>
          Supported: .xlsx, .xls, .csv
        </Typography>

        <input
          type="file"
          accept=".xlsx,.xls,.csv"
          style={{ display: 'none' }}
          id="file-input"
          onChange={handleFileChange}
        />
        <label htmlFor="file-input">
          <Button
            variant="outlined"
            component="span"
            sx={{
              color: '#1ABC9C',
              borderColor: '#1ABC9C',
              '&:hover': {
                backgroundColor: '#1abc9c22',
                borderColor: '#1ABC9C',
              },
            }}
          >
            Choose File
          </Button>
        </label>

        {file && (
          <Typography sx={{ mt: 2, fontSize: 14, color: '#ccc' }}>
            Selected: <strong>{file.name}</strong>
          </Typography>
        )}

        <Button
          variant="contained"
          onClick={handleUpload}
          fullWidth
          sx={{
            mt: 3,
            backgroundColor: 'primary',}}
        >
          Upload
        </Button>
      </Box>
    </Box>
  );
};

export default FileUploader;
