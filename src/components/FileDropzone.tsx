import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File } from 'lucide-react';
import { cn, formatFileSize, MAX_FILE_SIZE } from '../lib/utils';

interface FileDropzoneProps {
  onFileSelect: (files: File[]) => void;
}

export function FileDropzone({ onFileSelect }: FileDropzoneProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onFileSelect,
    maxSize: MAX_FILE_SIZE,
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors',
        isDragActive ? 'border-purple-500 bg-purple-50/5' : 'border-gray-600 hover:border-purple-500'
      )}
    >
      <input {...getInputProps()} />
      <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
      <p className="text-lg mb-2 text-gray-200">
        {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
      </p>
      <p className="text-sm text-gray-400">
        or click to select files (max {formatFileSize(MAX_FILE_SIZE)})
      </p>
    </div>
  );
}