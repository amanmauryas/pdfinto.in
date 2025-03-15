import React from 'react';
import { Settings2 } from 'lucide-react';

interface ConversionOptionsProps {
  sourceFormat: string;
  onTargetFormatChange: (format: string) => void;
}

export function ConversionOptions({ sourceFormat, onTargetFormatChange }: ConversionOptionsProps) {
  const getTargetFormats = (source: string): string[] => {
    const formats = {
      'image/jpeg': ['image/png', 'image/webp'],
      'image/png': ['image/jpeg', 'image/webp'],
      'image/webp': ['image/jpeg', 'image/png'],
      'application/pdf': ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['application/pdf'],
      'video/mp4': ['audio/mp3'],
      'audio/mp3': ['audio/wav'],
    };
    return formats[source as keyof typeof formats] || [];
  };

  const targetFormats = getTargetFormats(sourceFormat);

  if (!targetFormats.length) return null;

  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-4">
      <div className="flex items-center gap-2 mb-3">
        <Settings2 className="w-5 h-5 text-purple-500" />
        <h3 className="text-lg font-semibold text-gray-200">Conversion Options</h3>
      </div>
      <div className="space-y-3">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Target Format</label>
          <select
            className="w-full bg-gray-700 text-gray-200 rounded-md px-3 py-2 border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            onChange={(e) => onTargetFormatChange(e.target.value)}
          >
            {targetFormats.map((format) => (
              <option key={format} value={format}>
                {format.split('/')[1].toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}