// components/admin/doctor/DocumentPreviewDialog.tsx

'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';

export function DocumentPreviewDialog({ url }: { url: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View</Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Document Preview</DialogTitle>
        </DialogHeader>

        <img src={url || '#'} alt="" className="w-full h-[500px]" />
      </DialogContent>
    </Dialog>
  );
}
