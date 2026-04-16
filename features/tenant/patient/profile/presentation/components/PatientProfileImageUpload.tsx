'use client';

import { useRef, useState, useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Pencil } from 'lucide-react';

interface Props {
  form: UseFormReturn<any>;
  name: string;
  defaultImage?: string; // fallback URL if no API image
  apiImage?: { baseAddress?: string; path?: string }; // API image data
  mode: 'edit' | 'view';
}

const PatientProfileImageUpload = ({
  form,
  name,
  defaultImage,
  apiImage,
  mode,
}: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // Initialize preview from API image or default
  useEffect(() => {
    if (apiImage?.baseAddress && apiImage?.path) {
      setPreview(`http://${apiImage.baseAddress}${apiImage.path}`);
      form.setValue(name, null); // no file selected yet
    } else if (defaultImage) {
      setPreview(defaultImage);
      form.setValue(name, null);
    }
  }, [apiImage, defaultImage, form, name]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue(name, file, { shouldDirty: true });
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="relative w-28 h-28">
        {preview ? (
          <img
            src={preview || ''}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border"
          />
        ) : (
          <div className="w-28 h-28 rounded-full border flex items-center justify-center text-center text-xs text-gray-500 bg-gray-50 p-2">
            Upload Photo
          </div>
        )}

        {mode === 'edit' && (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <Pencil size={16} />
          </button>
        )}

        <input
          type="file"
          ref={fileInputRef}
          // accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default PatientProfileImageUpload;
