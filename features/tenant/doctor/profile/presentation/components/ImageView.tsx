import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

type ImagePreviewProps = {
  src: string;
  label?: string;
  width?: string;
  height?: string;
};

export function ImagePreview({
  src,
  label = 'Document',
  width = 'w-full',
  height = 'h-40',
}: ImagePreviewProps) {
  const [previewImage, setPreviewImage] = useState<string | undefined>();

  return (
    <div className={`space-y-2 `}>
      {label && <span className="text-muted-foreground">{label}</span>}

      <div
        className={`relative ${width} ${height} border rounded-md overflow-hidden`}
      >
        <img src={src} className="w-full h-full object-cover" alt="preview" />

        <Button
          type="button"
          size="icon"
          variant="secondary"
          className="absolute bottom-2 right-2"
          onClick={() => setPreviewImage(src)}
        >
          <Maximize2 size={16} />
        </Button>
      </div>

      <Dialog
        open={!!previewImage}
        onOpenChange={() => setPreviewImage(undefined)}
      >
        <DialogContent className="max-w-5xl">
          <DialogTitle>Preview Document</DialogTitle>
          {previewImage && (
            <img
              src={previewImage}
              className="w-full max-h-[80vh] object-contain"
              alt="preview-large"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
