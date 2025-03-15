import React from 'react';
import { File, X } from 'lucide-react';
import { formatFileSize } from '../lib/utils';

interface FileListProps {
  files: File[];
  onRemove: (index: number) => void;
}

export function FileList({ files, onRemove }: FileListProps) {
  if (!files.length) return null;

  return (
    <div className="space-y-2">
      {files.map((file, index) => (
        <div
          key={`${file.name}-${index}`}
          className="flex items-center justify-between bg-gray-800 rounded-lg p-3"
        >
          <div className="flex items-center gap-3">
            <File className="w-5 h-5 text-purple-500" />
            <div>
              <p className="text-sm font-medium text-gray-200">{file.name}</p>
              <p className="text-xs text-gray-400">{formatFileSize(file.size)}</p>
            </div>
          </div>
          <button
            onClick={() => onRemove(index)}
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
}