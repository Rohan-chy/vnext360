'use client';

import { useEffect, useRef } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { UseFormReturn, Path } from 'react-hook-form';
import { Icons } from '@/shared/icons';

interface ImageUploadFieldProps<TFieldValues> {
  form: UseFormReturn<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  multiple?: boolean;
  accept?: string;
}

export function ImageUploadField<TFieldValues>({
  form,
  name,
  label,
  multiple = false,
  accept = 'image/*',
}: ImageUploadFieldProps<TFieldValues>) {
  const { setValue, watch } = form;
  const files: File[] = watch(name) || [];
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => fileInputRef.current?.click();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selected = multiple
      ? Array.from(e.target.files)
      : [e.target.files[0]];
    setValue(name, selected as any, { shouldValidate: true });
  };

  const removeImage = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setValue(name, newFiles as any, { shouldValidate: true });
  };

  // Generate preview URLs
  const previews = files?.map((file) => ({
    file,
    url: URL?.createObjectURL(file),
  }));

  useEffect(() => {
    return () => previews?.forEach((p) => URL.revokeObjectURL(p.url));
  }, [files]);

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem>
          <FormControl>
            <div className="space-y-2">
              {/* Upload Box */}
              <div
                onClick={handleClick}
                className="border-2 border-dashed border-muted-foreground/30 hover:border-primary transition-colors cursor-pointer rounded-lg p-6 flex flex-col items-center justify-center text-center space-y-2"
              >
                <Icons.Upload className="text-muted-foreground" size={24} />
                {label && <p className="text-sm font-medium">{label}</p>}
                <p className="text-xs text-muted-foreground">
                  PNG, JPG, JPEG {multiple ? '(multiple allowed)' : ''}
                </p>
                <input
                  type="file"
                  multiple={multiple}
                  accept={accept}
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleChange}
                />
              </div>

              {/* Preview */}
              {previews.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {previews.map((p, i) => (
                    <div
                      key={i}
                      className="relative w-full h-24 border rounded-md overflow-hidden"
                    >
                      <img
                        src={p.url}
                        alt="preview"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(i)}
                        className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1"
                      >
                        <Icons.X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
