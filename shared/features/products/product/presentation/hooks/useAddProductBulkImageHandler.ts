import React from 'react';
import { useAddProductBulkImage } from '../../application/usecases/useAddProductBulkImage';
import { useGetProductById } from '../../application/usecases/useGetProductById';
import { useDeleteProductBulkImage } from '../../application/usecases/useDeleteProductBulkImage';

type PreviewItem = {
  url: string;
  id?: string;
  isExisting: boolean;
};

export const useAddProductBulkImageHandle = (data: any) => {
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = React.useState<File[]>([]);
  const [previews, setPreviews] = React.useState<PreviewItem[]>([]);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const { data: productData } = useGetProductById(data?.productId, open);

  const { mutateAsync: uploadbulkImage, isPending: bulkUploadPending } =
    useAddProductBulkImage();

  const { mutateAsync: deletebulkImage, isPending: deletePending } =
    useDeleteProductBulkImage();

  //render saved images
  React.useEffect(() => {
    if (productData?.imageUrls?.length) {
      const existingImages = productData?.imageUrls?.map((img: any) => ({
        url: `http://${productData?.alternateBaseUrl}${img.value}`,
        id: img.id,
        isExisting: true,
      }));

      setPreviews(existingImages);
    }
  }, [productData, productData?.imageUrls]);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);

    setFiles((prev) => [...prev, ...selectedFiles]);

    const newPreviews = selectedFiles.map((file) => ({
      url: URL.createObjectURL(file),
      isExisting: false,
    }));

    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeImage = async (index: number) => {
    const image = previews[index];

    //  If it's an existing image → call delete API
    if (image?.isExisting && image?.id) {
      try {
        await deletebulkImage({ id: image.id });
      } catch (error) {
        console.error('Delete failed:', error);
        return; // stop if delete fails
      }
    } else {
      //  If it's a new file → remove from files
      setFiles((prev) => prev.filter((_, i) => i !== index));
    }

    //  Remove from previews UI
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!files.length) return;

    try {
      await uploadbulkImage({
        productId: data?.productId,
        image: files,
      });

      // Reset UI after success
      setFiles([]);
      setPreviews([]);
      setOpen(false);
    } catch (error) {
      console.error('Bulk upload failed:', error);
    }
  };

  return {
    open,
    setOpen,
    files,
    setFiles,
    previews,
    setPreviews,
    fileInputRef,
    handleClick,
    handleChange,
    removeImage,
    handleSubmit,
    loading: bulkUploadPending || deletePending,
  };
};
