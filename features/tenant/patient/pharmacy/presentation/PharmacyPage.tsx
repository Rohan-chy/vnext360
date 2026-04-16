'use client';
import ServiceSearch from '@/features/tenant/super-admin/page-builder/search/ServiceSearch';
import ArticlesSlider from '@/features/tenant/super-admin/page-builder/presentation/components/ArticlesSlider';
import WhyUs from '@/features/tenant/super-admin/page-builder/presentation/components/green/WhyUsGreen';
import HospitalList, { PRIMARY } from './components/PharmacyList';

const PharmacyPage = () => {
  return (
    <main className="flex flex-col gap-2 px-10 py-2">
      <div className="">
        <h2 className="text-3xl font-bold" style={{ color: PRIMARY }}>
          Find Pharmacy
        </h2>
        <p className="text-gray-600 mt-1">
          Search and filter Pharmacy based on your needs
        </p>
      </div>
      <div className="flex justify-center items-center w-full">
        <ServiceSearch />
      </div>
      <HospitalList />
      <ArticlesSlider />
      <WhyUs />
    </main>
  );
};

export default PharmacyPage;
