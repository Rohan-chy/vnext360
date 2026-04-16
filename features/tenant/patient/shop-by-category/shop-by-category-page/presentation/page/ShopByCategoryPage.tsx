'use client';
import { useParams } from 'next/navigation';
import ShopByCategory from '../components/ShopByCategory';

const ShopByCategoryPage = () => {
  const params = useParams();

  // Normalize params.name to always be a string
  const categoryParam = params?.name;
  const category = Array.isArray(categoryParam)
    ? categoryParam[0]
    : categoryParam;

  return <ShopByCategory category={category || 'Ayurvedic Diabetes Care'} />;
};

export default ShopByCategoryPage;
