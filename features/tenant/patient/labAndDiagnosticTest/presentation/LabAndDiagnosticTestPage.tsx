'use client';
import ServiceSearch from '@/features/tenant/super-admin/page-builder/search/ServiceSearch';
import ArticlesSlider from '@/features/tenant/super-admin/page-builder/presentation/components/ArticlesSlider';
import WhyUs from '@/features/tenant/super-admin/page-builder/presentation/components/green/WhyUsGreen';
import LabAndDiagnosticList, {
  PRIMARY,
} from './components/LabAndDiagnosticTestList';

const LabAndDiagnosticTestPage = () => {
  return (
    <main className="flex flex-col gap-2 px-10 py-2">
      <div className="">
        <h2 className="text-3xl font-bold" style={{ color: PRIMARY }}>
          Find Lab And DiagnosticTest
        </h2>
        <p className="text-gray-600 mt-1">
          Search and filter Lab And DiagnosticTest based on your needs
        </p>
      </div>
      <div className="flex justify-center items-center w-full">
        <ServiceSearch />
      </div>
      <LabAndDiagnosticList />
      <ArticlesSlider />
      <WhyUs />
    </main>
  );
};

export default LabAndDiagnosticTestPage;
