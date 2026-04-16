'use client';

import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs';
import InfoSection from '../sections/InfoSection';
import ServicesSection from '../sections/ServicesSection';
import EducationSection from '../sections/EducationSection';
import ExperienceSection from '../sections/ExperienceSection';
import TrainingSection from '../sections/TrainingSection';
import StoriesSection from '../sections/StoriesSection';
import ArticlesSection from '../sections/ArticlesSection';
import SpecializationSection from '../sections/SpecializationSection';
import MembershipSection from '../sections/MembershipSection';
import TabTitles from './TabTitles';
import ConsultantQA from '../sections/ConsultantQA';
import { DoctorDetailResponse } from '../../infrastructure/dto/doctorDetails.dto';

type DoctorTabsProps = {
  doctor: any;
  doctorDetails: DoctorDetailResponse;
};

export default function DoctorTabs({ doctor, doctorDetails }: DoctorTabsProps) {
  return (
    <Tabs defaultValue="info" className="mt-4 ">
      {/* Tabs List */}
      <TabsList className="flex flex-wrap gap-1 border-b border-gray-200">
        <TabTitles />
      </TabsList>

      {/*INFO*/}
      <TabsContent value="info" className="mt-4">
        <InfoSection doctorDetails={doctorDetails} />
      </TabsContent>

      {/*SPECIALIZATION*/}
      <TabsContent value="specialization" className="mt-4 space-y-2">
        <SpecializationSection doctor={doctor} />
      </TabsContent>

      {/*SERVICES*/}
      <TabsContent
        value="services"
        className="mt-4 grid grid-cols-1 sm:grid-cols-6 gap-2"
      >
        <ServicesSection doctor={doctor} />
      </TabsContent>

      {/*EDUCATION*/}
      <TabsContent value="education" className="mt-4">
        <EducationSection doctor={doctor} />
      </TabsContent>

      {/*MEMBERSHIP*/}
      <TabsContent value="membership" className="mt-4 space-y-2">
        <MembershipSection doctor={doctor} />
      </TabsContent>

      {/*EXPERIENCE*/}
      <TabsContent value="experience" className="mt-4">
        <ExperienceSection doctor={doctor} />
      </TabsContent>

      {/*TRAINING*/}
      <TabsContent value="training" className="mt-4">
        <TrainingSection doctor={doctor} />
      </TabsContent>

      {/*STORIES*/}
      <TabsContent value="stories" className="mt-4 space-y-3">
        <StoriesSection doctor={doctor} />
      </TabsContent>

      {/*CONSULTANT Q&A */}
      <TabsContent value="consultantQA" className="mt-4 space-y-2">
        <ConsultantQA doctor={doctor} />
      </TabsContent>

      {/*ARTICLES */}
      <TabsContent value="articles" className="mt-4">
        <ArticlesSection doctor={doctor} />
      </TabsContent>
    </Tabs>
  );
}
