'use client';

import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface FieldConfig {
  label: string;
  key?: string;
  icon?: React.ReactNode; // new: optional icon
  render?: (item: any) => React.ReactNode;
}

interface Props {
  data: any[];
  title?: string;
  fields: FieldConfig[];
  showDocument?: boolean;
}

export function DataCardGrid({
  data,
  title,
  fields,
  showDocument = true,
}: Props) {
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    undefined
  );

  // Do not render component if no data
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <>
      <h1 className="p-0 font-semibold text-xl mb-1">{title}</h1>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data?.map((item, index) => {
          const hasImage = showDocument && item.baseAddress && item.documentUrl;
          const imageUrl = hasImage
            ? `http://${item.baseAddress}${item.documentUrl}`
            : undefined;

          return (
            <Card key={index} className="shadow-sm hover:shadow-md transition">
              <CardContent className="space-y-4 text-sm">
                {fields.map((field, i) => (
                  <div
                    key={i}
                    className="flex justify-between gap-4 items-center"
                  >
                    {/* Label with optional icon */}
                    <span className="text-muted-foreground flex items-center gap-1">
                      {field.icon && <span>{field.icon}</span>}
                      {field.label}
                    </span>

                    <span className="font-medium text-right">
                      {field.render
                        ? field.render(item)
                        : item[field.key!] || '—'}
                    </span>
                  </div>
                ))}

                {/* Document Section */}
                {hasImage && (
                  <div className="space-y-2">
                    <span className="text-muted-foreground">Document</span>
                    <div className="relative w-full h-32 border rounded-md overflow-hidden">
                      <img
                        src={imageUrl}
                        className="w-full h-full object-cover"
                      />

                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute bottom-2 right-2"
                        onClick={() => setPreviewImage(imageUrl)}
                      >
                        <Maximize2 size={16} />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Preview Dialog */}
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
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
