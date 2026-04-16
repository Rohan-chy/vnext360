'use client';

import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CustomButton } from '@/components/extended/extended-button';

interface FieldConfig {
  label: string;
  key?: string;
  icon?: React.ReactNode; // optional icon
  render?: (item: any) => React.ReactNode;
}

interface Props {
  data: any[];
  title?: string;
  fields: FieldConfig[];
  showDocument?: boolean;
  admin?: boolean;
}

export function DataCardGrid({
  data,
  title,
  fields,
  showDocument = true,
  admin = false,
}: Props) {
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    undefined
  );

  if (!data || data.length === 0) return null;

  return (
    <>
      {/* Grid Title */}
      {title && (
        <div
          className="px-5 py-2 font-semibold rounded-t-lg text-[var(--primary-foreground)]"
          style={{
            background: 'var(--primary)',
          }}
        >
          {title}
        </div>
      )}

      {/* Data Cards */}
      <div
        className={cn(
          'grid gap-6 md:grid-cols-2',
          admin ? 'xl:grid-cols-2' : 'xl:grid-cols-3'
        )}
      >
        {data.map((item, index) => {
          const hasImage = showDocument && item.baseAddress && item.documentUrl;
          const imageUrl = hasImage
            ? `http://${item.baseAddress}${item.documentUrl}`
            : undefined;

          return (
            <Card
              key={index}
              className="shadow-sm hover:shadow-md transition-colors border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)]"
            >
              <CardContent className="space-y-4 text-sm">
                {fields.map((field, i) => (
                  <div
                    key={i}
                    className="flex justify-between gap-4 items-center"
                  >
                    <span className="flex items-center gap-1 text-[var(--muted-foreground)]">
                      {field.icon && <span>{field.icon}</span>}
                      {field.label}
                    </span>

                    <span className="font-medium text-right text-[var(--foreground)]">
                      {field.render
                        ? field.render(item)
                        : item[field.key!] || '—'}
                    </span>
                  </div>
                ))}

                {/* Document Section */}
                {hasImage && (
                  <div className="space-y-2">
                    <span className="text-[var(--muted-foreground)]">
                      Document
                    </span>
                    <div className="relative w-full h-32 border border-[var(--border)] rounded-md overflow-hidden">
                      <img
                        src={imageUrl}
                        className="w-full h-full object-cover"
                      />

                      <CustomButton
                        size="icon"
                        icon={<Maximize2 size={16} />}
                        className="absolute bottom-2 right-2 text-[var(--foreground)] text-white"
                        onClick={() => setPreviewImage(imageUrl)}
                      />
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
          <DialogTitle className="text-[var(--foreground)]">
            Preview Document
          </DialogTitle>
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
