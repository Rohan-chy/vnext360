import ProfileImageUpload from '@/shared/components/ProfileImageUpload';
import { useAddProductImage } from '../../application/usecases/useAddProductImage';
import { useAddProductImageForm } from '../../domain/addProductImage.schema';

const ProductImageUpload = ({ data }: any) => {
  const form = useAddProductImageForm();

  const { mutateAsync: addProductImage } = useAddProductImage();

  const handleImageChange = async (file: File) => {
    try {
      await addProductImage({
        productId: data?.productId,
        image: file,
      });
    } catch (err) {
      console.error('Failed to upload image', err);
    }
  };

  return (
    <ProfileImageUpload
      form={form}
      name="image"
      className="w-17 h-17"
      label={data?.name?.charAt(0)?.toUpperCase() || '?'}
      onChange={handleImageChange}
      apiImage={{
        baseAddress: data?.baseUrl,
        path: data?.imageUrl,
      }}
    />
  );
};

export default ProductImageUpload;
