'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ClinicHeader from './components/ClinicHeader';
import ClinicOverviewSection from './components/ClinicOverviewSection';
import ClinicDoctorSection from './components/ClinicDoctorSection';
// import ClinicServiceSection from './components/ClinicServiceSection';
// import ClinicStories from './components/ClinicStories';
import { useGetClinicById } from './hooks/clinic/useGetClinicById';
import { useParams } from 'next/navigation';
import ClinicReview from './components/ClinicReview';

const ClinicDetailsPage = () => {
  const params = useParams();
  const id = params.id as string;
  const { data: ClinicDetails } = useGetClinicById(id);
  if (!ClinicDetails) return <div>Loading...</div>;
  return (
    <div className="space-y-6 max-w-6xl mx-auto p-4">
      {/* HEADER */}
      <ClinicHeader clinic={ClinicDetails} />

      {/* TABS */}
      <Tabs defaultValue="overview" className="mt-4">
        <TabsList className="flex flex-wrap gap-1 border-b border-gray-200">
          <TabsTrigger
            value="overview"
            className="text-sm font-semibold text-gray-700 hover:text-[#0D6641] 
              data-[state=active]:bg-[#0D6641] data-[state=active]:text-white 
              px-2 py-1 whitespace-nowrap"
          >
            Overview
          </TabsTrigger>

          <TabsTrigger
            value="doctors"
            className="text-sm font-semibold text-gray-700 hover:text-[#0D6641] 
              data-[state=active]:bg-[#0D6641] data-[state=active]:text-white 
              px-2 py-1 whitespace-nowrap"
          >
            Doctors
          </TabsTrigger>

          <TabsTrigger
            value="services"
            className="text-sm font-semibold text-gray-700 hover:text-[#0D6641] 
              data-[state=active]:bg-[#0D6641] data-[state=active]:text-white 
              px-2 py-1 whitespace-nowrap"
          >
            Services
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="text-sm font-semibold text-gray-700 hover:text-[#0D6641] 
              data-[state=active]:bg-[#0D6641] data-[state=active]:text-white 
              px-2 py-1 whitespace-nowrap"
          >
            Reviews
          </TabsTrigger>

          <TabsTrigger
            value="stories"
            className="text-sm font-semibold text-gray-700 hover:text-[#0D6641] 
              data-[state=active]:bg-[#0D6641] data-[state=active]:text-white 
              px-2 py-1 whitespace-nowrap"
          >
            Stories
          </TabsTrigger>
        </TabsList>

        {/* OVERVIEW */}
        <TabsContent value="overview" className="mt-4 space-y-2">
          <ClinicOverviewSection clinic={ClinicDetails} />
        </TabsContent>

        {/* DOCTORS */}
        <TabsContent value="doctors" className="mt-4">
          <ClinicDoctorSection clinic={ClinicDetails} />
        </TabsContent>

        {/* SERVICES */}
        <TabsContent value="services" className="mt-4">
          {/* <ClinicServiceSection hospital={hospital} /> */}
        </TabsContent>
        {/* Reviews */}
        <TabsContent value="reviews" className="mt-4">
          <ClinicReview clinic={ClinicDetails} />
        </TabsContent>

        {/* STORIES */}
        <TabsContent value="stories" className="mt-4">
          {/* <ClinicStories hospital={hospital} /> */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClinicDetailsPage;
