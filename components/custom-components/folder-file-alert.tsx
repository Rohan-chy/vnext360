'use client';
import { Folder } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { useState } from 'react';

export const FolderComponent = ({ images }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="relative flex items-center justify-center mb-1 cursor-pointer"
        onClick={() => setOpen(true)}
        title="View Files"
      >
        <Folder className="text-yellow-600" fill={'#facc15'} />
        {
          <span className="absolute -top-1 ml-6 bg-yellow-600 text-white text-sm rounded-full px-1 py-0.2">
            {images ? 1 : ''}
          </span>
        }
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Document Files</DialogTitle>
          </DialogHeader>

          {!images ? (
            <p>No images found.</p>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-full h-[70vh] bg-black flex items-center justify-center rounded-lg overflow-hidden">
                <img
                  id="full-image"
                  src={`http://${images}`}
                  alt={images}
                  className="object-contain w-full h-full"
                />

                <button
                  title="View Full Screen"
                  onClick={() =>
                    document.getElementById('full-image')?.requestFullscreen?.()
                  }
                  className="absolute top-2 right-2 bg-white p-1 rounded shadow text-sm"
                >
                  Full Screen
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
