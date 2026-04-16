'use client';

import { Tabs, TabsContent } from '@/components/ui/tabs';
import { hospitalDetail } from '../../application/utils/hospitalDetails';
import HospitalHeader from './HospitalHeader';
import HospitalTabTitles from './HospitalTabTitles';
import OverviewSection from '../section/OverviewSection';
import HospitalDoctorSection from '../section/HospitalDoctorSection';
import HospitalServiceSection from '../section/HospitalServiceSection';
import HospitalStories from '../section/HospitalStories';

export default function HospitalProfile() {
  const hospital = hospitalDetail;

  return (
    <div className="space-y-6 max-w-6xl mx-auto p-4">
      {/*HEADER*/}
      <HospitalHeader hospital={hospital} />

      {/*TABS*/}
      <Tabs defaultValue="overview" className="mt-4">
        <HospitalTabTitles />

        {/*OVERVIEW*/}
        <TabsContent value="overview" className="mt-4 space-y-2">
          <OverviewSection hospital={hospital} />
        </TabsContent>

        {/*DOCTORS*/}
        <TabsContent value="doctors" className="mt-4">
          <HospitalDoctorSection hospital={hospital} />
        </TabsContent>

        {/*SERVICES*/}
        <TabsContent value="services" className="mt-4">
          <HospitalServiceSection hospital={hospital} />
        </TabsContent>

        {/*STORIES*/}
        <TabsContent value="stories" className="mt-4">
          <HospitalStories hospital={hospital} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
