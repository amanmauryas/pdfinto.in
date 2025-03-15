import { useState, useEffect } from 'react';

// Configuration for the API
interface ApiConfig {
  apiKey: string | undefined;
  timeout: number;
}

// Mock API configuration
const API_CONFIG: ApiConfig = {
  apiKey: import.meta.env.VITE_ILOVEPDF_API_KEY,
  timeout: 60000, // 60 seconds
};

/**
 * Custom hook for file conversion functionality
 */
export const useFileConversion = () => {
  const [isConverting, setIsConverting] = useState(false);
  const [conversionSuccess, setConversionSuccess] = useState(false);
  const [conversionError, setConversionError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);

  // Check if API key is set
  useEffect(() => {
    const hasValidApiKey = !!API_CONFIG.apiKey;
    setApiKeyMissing(!hasValidApiKey);
    
    if (!hasValidApiKey) {
      console.error("API key is missing. Please add VITE_ILOVEPDF_API_KEY to your .env file.");
    }
  }, []);

  /**
   * Convert a file or URL to the specified output format
   */
  const convertFile = async (file: File | null, url: string, outputFormat: string) => {
    // Check if API key is set
    if (!API_CONFIG.apiKey) {
      setApiKeyMissing(true);
      setConversionError("API key not set. Please add VITE_ILOVEPDF_API_KEY to your .env file.");
      return;
    }

    if (!file && !url) {
      setConversionError("Please provide a file or URL to convert");
      return;
    }

    if (!outputFormat) {
      setConversionError("Please select an output format");
      return;
    }

    setIsConverting(true);
    setConversionSuccess(false);
    setConversionError(null);
    setDownloadUrl(null);
    setApiKeyMissing(false);

    try {
      // For demonstration purposes, we'll use a mock implementation
      console.log(`Starting mock conversion task`);
      console.log(`Input: ${file ? file.name : url}`);
      console.log(`Output format: ${outputFormat}`);
      
      // Simulate API processing time
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create a mock converted file based on the selected format
      let mimeType = "application/pdf";
      let fileExtension = "pdf";
      let fileName = file ? file.name.split('.')[0] : "converted-document";
      
      if (outputFormat.includes("Word")) {
        mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        fileExtension = "docx";
      } else if (outputFormat.includes("Excel")) {
        mimeType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        fileExtension = "xlsx";
      } else if (outputFormat.includes("PowerPoint")) {
        mimeType = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
        fileExtension = "pptx";
      } else if (outputFormat.includes("HTML")) {
        mimeType = "text/html";
        fileExtension = "html";
      } else if (outputFormat.includes("JPEG")) {
        mimeType = "image/jpeg";
        fileExtension = "jpg";
      } else if (outputFormat.includes("PNG")) {
        mimeType = "image/png";
        fileExtension = "png";
      } else if (outputFormat.includes("Text")) {
        mimeType = "text/plain";
        fileExtension = "txt";
      }
      
      // Create a simple mock content for the converted file
      let mockContent = "";
      
      if (fileExtension === "html") {
        mockContent = `<!DOCTYPE html>
<html>
<head>
  <title>Converted Document</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
  </style>
</head>
<body>
  <h1>Converted Document</h1>
  <p>This is a converted document using iLovePDF API.</p>
  <p>Original file: ${file ? file.name : url}</p>
  <p>Converted to: ${outputFormat}</p>
</body>
</html>`;
      } else if (fileExtension === "txt") {
        mockContent = `Converted Document
        
This is a converted document using iLovePDF API.
Original file: ${file ? file.name : url}
Converted to: ${outputFormat}`;
      } else {
        // For binary formats, we'll create a text file with a message
        mimeType = "text/plain";
        fileExtension = "txt";
        mockContent = `This is a mock ${outputFormat} file.
        
In a production environment, this would be an actual ${fileExtension.toUpperCase()} file converted using the iLovePDF API.
Original file: ${file ? file.name : url}`;
      }
      
      // Create a blob with the mock content
      const blob = new Blob([mockContent], { type: mimeType });
      const mockDownloadUrl = URL.createObjectURL(blob);
      
      // Set the download URL with a descriptive filename
      setDownloadUrl(mockDownloadUrl);
      setConversionSuccess(true);
      
      console.log('Mock conversion completed successfully');
    } catch (error) {
      console.error('Conversion error:', error);
      setConversionError(error instanceof Error ? error.message : 'An unknown error occurred');
      
      // Check if the error is related to API key
      if (error instanceof Error && 
          (error.message.includes("API key") || error.message.includes("apiKey") || 
           error.message.includes("Authorization") || error.message.includes("auth") ||
           error.message.includes("401") || error.message.includes("403"))) {
        setApiKeyMissing(true);
      }
    } finally {
      setIsConverting(false);
    }
  };

  return {
    isConverting,
    conversionSuccess,
    conversionError,
    downloadUrl,
    apiKeyMissing,
    convertFile
  };
}; 