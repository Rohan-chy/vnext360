'use client';

import { Icons } from '@/shared/icons';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CustomButton } from '@/components/extended/extended-button';
import { AppTooltip } from '@/components/custom-components/tooltip-app';
import { Product } from '../../domain/getProduct.schema';
import { useAddProductBulkImageHandle } from '../hooks/useAddProductBulkImageHandler';

export interface props {
  data: Product;
}

const AddProductBulkImages = ({ data }: props) => {
  const {
    open,
    setOpen,
    files,
    previews,
    fileInputRef,
    handleClick,
    handleChange,
    removeImage,
    handleSubmit,
    loading,
  } = useAddProductBulkImageHandle(data);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <AppTooltip content="Upload Product Images">
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" className="h-6">
            <Icons.Upload size={18} />
          </Button>
        </DialogTrigger>
      </AppTooltip>

      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-primary">
            Upload Product Images
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/*  Clean Upload Box */}
          <div
            onClick={handleClick}
            className="border-2 border-dashed border-muted-foreground/30 hover:border-primary transition-colors cursor-pointer rounded-lg p-6 flex flex-col items-center justify-center text-center space-y-2"
          >
            <Icons.Upload className="text-muted-foreground" size={24} />

            <p className="text-sm font-medium">Click to upload</p>

            <p className="text-xs text-muted-foreground">
              PNG, JPG, JPEG (multiple allowed)
            </p>

            <input
              type="file"
              multiple
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleChange}
            />
          </div>

          {/* Preview */}
          {previews.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {previews.map((src, index) => (
                <div
                  key={index}
                  className="relative w-full h-24 border rounded-md overflow-hidden"
                >
                  <img
                    src={src.url}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />

                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1"
                  >
                    <Icons.X size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-2">
            <CustomButton variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </CustomButton>
            <CustomButton
              onClick={handleSubmit}
              disabled={!files.length || loading}
            >
              {loading ? 'Uploading...' : 'Upload'}
            </CustomButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductBulkImages;
