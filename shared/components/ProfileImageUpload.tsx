'use client';

import { useRef, useState, useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CustomButton } from '@/components/extended/extended-button';
import { Icons } from '../icons';

interface Props {
  form: UseFormReturn<any>;
  name: string;
  className?: string;
  defaultImage?: string; // fallback URL if no API image
  apiImage?: { baseAddress: string; path: string }; // API image data
  label?: string;
  onChange?: (file: File) => void;
  canEdit?: boolean; //flag to edit update profile image
}

const ProfileImageUpload = ({
  form,
  name,
  className = 'w-25 h-25',
  defaultImage,
  apiImage,
  label = 'Upload Photo',
  onChange,
  canEdit = true,
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

    // Call optional onChange if provided
    if (onChange) {
      onChange(file);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className={`relative ${className}`}>
        {preview ? (
          <img
            src={preview || ''}
            alt="Profile"
            className={`${className} rounded-full object-cover border`}
          />
        ) : (
          <div
            className={`${className} rounded-full ring-2 ring-gray/40 flex items-center justify-center text-center p-2`}
          >
            {label}
          </div>
        )}
        {canEdit && (
          <>
            <CustomButton
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-1 right-0 p-2 rounded-full border"
              icon={<Icons.Pencil size={16} />}
            ></CustomButton>

            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileImageUpload;
