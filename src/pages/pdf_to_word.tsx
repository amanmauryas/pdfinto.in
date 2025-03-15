import React, { useState } from "react";

const PdfToWord: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [convertedFile, setConvertedFile] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleConvert = async () => {
    if (!selectedFile) {
      alert("Please select a PDF file to convert.");
      return;
    }

    setIsConverting(true);

    // Simulating conversion (Replace with actual API integration)
    setTimeout(() => {
      setConvertedFile(URL.createObjectURL(selectedFile)); // Mock URL
      setIsConverting(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">PDF to Word Converter</h1>
        <p className="text-gray-600 mb-6">Upload your PDF file and convert it to Word format.</p>

        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="border p-2 w-full rounded-md mb-4"
        />

        <button
          onClick={handleConvert}
          disabled={isConverting}
          className={`w-full py-2 px-4 text-white rounded-md transition ${
            isConverting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isConverting ? "Converting..." : "Convert to Word"}
        </button>

        {convertedFile && (
          <div className="mt-4">
            <a
              href={convertedFile}
              download="converted.docx"
              className="text-blue-500 underline"
            >
              Download Converted File
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfToWord;
