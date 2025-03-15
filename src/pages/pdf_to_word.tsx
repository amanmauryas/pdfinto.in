import { useState } from 'react';
import { 
  Box, Button, Container, TextField, Typography, Paper, Stack, Divider,
  CircularProgress, Alert, Snackbar
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LinkIcon from '@mui/icons-material/Link';
import DownloadIcon from '@mui/icons-material/Download';

export default function PdfToWord() {
  const [pdfLink, setPdfLink] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [convertedFileUrl, setConvertedFileUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      if (selectedFile.type === 'application/pdf') {
        setFile(selectedFile);
        setPdfLink(''); // Clear link when file is uploaded
        setError(null);
      } else {
        setError('Please upload a valid PDF file');
        setOpenSnackbar(true);
      }
    }
  };

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPdfLink(event.target.value);
    setFile(null); // Clear file when link is entered
    setError(null);
  };

  const validatePdfUrl = (url: string): boolean => {
    if (!url) return false;
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.pathname.toLowerCase().endsWith('.pdf');
    } catch {
      return false;
    }
  };

  const handleConvert = async () => {
    setIsConverting(true);
    setError(null);

    try {
      // Simulate conversion process with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000));

      if (file) {
        console.log('Converting uploaded file:', file.name);
        // In a real app, you would upload the file to your server or API
        // For demonstration, we're creating a mock URL
        setConvertedFileUrl('mock-converted-file.docx');
      } else if (pdfLink) {
        if (!validatePdfUrl(pdfLink)) {
          throw new Error('Please enter a valid PDF URL');
        }
        console.log('Converting from link:', pdfLink);
        // In a real app, you would send the link to your server or API
        // For demonstration, we're creating a mock URL
        setConvertedFileUrl('mock-converted-file.docx');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during conversion');
      setOpenSnackbar(true);
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    // In a real app, this would download the actual converted file
    console.log('Downloading converted file:', convertedFileUrl);
    
    // For demonstration, just show a success message
    setOpenSnackbar(true);
    setError('Download started! (This is a mock download)');
    
    // Reset the state after "download"
    setTimeout(() => {
      setConvertedFileUrl(null);
      setFile(null);
      setPdfLink('');
    }, 3000);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          PDF to Word Converter
        </Typography>
        
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
          Convert your PDF documents to fully editable Word files
        </Typography>
        
        {convertedFileUrl ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" gutterBottom color="success.main">
              Conversion Complete!
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              startIcon={<DownloadIcon />}
              onClick={handleDownload}
              sx={{ mt: 2 }}
            >
              Download Word Document
            </Button>
            <Button 
              variant="outlined"
              onClick={() => setConvertedFileUrl(null)}
              sx={{ mt: 2, ml: 2 }}
            >
              Convert Another PDF
            </Button>
          </Box>
        ) : (
          <Stack spacing={3}>
            {/* File Upload Section */}
            <Box sx={{ border: '2px dashed #e0e0e0', borderRadius: 2, p: 3, textAlign: 'center' }}>
              <input
                type="file"
                accept=".pdf"
                id="pdf-upload"
                style={{ display: 'none' }}
                onChange={handleFileUpload}
              />
              <label htmlFor="pdf-upload">
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<CloudUploadIcon />}
                  disabled={isConverting}
                >
                  Select PDF File
                </Button>
              </label>
              {file && (
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Selected file: <strong>{file.name}</strong> ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </Typography>
              )}
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Maximum file size: 100 MB
              </Typography>
            </Box>

            <Divider>OR</Divider>

            {/* Link Input Section */}
            <Box>
              <TextField
                label="Paste PDF URL"
                variant="outlined"
                fullWidth
                value={pdfLink}
                onChange={handleLinkChange}
                placeholder="https://example.com/document.pdf"
                InputProps={{
                  startAdornment: <LinkIcon color="action" sx={{ mr: 1 }} />,
                }}
                disabled={isConverting}
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Enter the direct URL to a PDF file
              </Typography>
            </Box>

            {/* Convert Button */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleConvert}
              disabled={(!file && !pdfLink) || isConverting}
              sx={{ py: 1.5 }}
            >
              {isConverting ? (
                <>
                  <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
                  Converting...
                </>
              ) : (
                'Convert to Word'
              )}
            </Button>
            
            <Typography variant="body2" align="center" color="text.secondary">
              By using this service, you agree to our Terms of Service and Privacy Policy
            </Typography>
          </Stack>
        )}
      </Paper>
      
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={error && !error.includes('Download') ? "error" : "success"} sx={{ width: '100%' }}>
          {error || "Conversion successful!"}
        </Alert>
      </Snackbar>
    </Container>
  );
}
