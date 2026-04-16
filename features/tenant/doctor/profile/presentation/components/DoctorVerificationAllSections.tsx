'use client';

import { Tabs, TabsContent } from '@/components/ui/tabs';
import Tablist from '@/components/custom-components/Tablist';
import { doctorVerificationTabs } from '../../application/utils/tablistData';

import ProfileinfoForm from '../sections/ProfileinfoSection';
import VerificationSection from '../sections/VerificationSection';
import CertificationsSection from '../sections/CertificationsSection';
import ExperienceSection from '../sections/ExperienceSection';
import TrainingSection from '../sections/TrainingSection';
import ResearchSection from '../sections/ResearchSection';
import NomineeSection from '../sections/NomineeSection';
import RelativeSection from '../sections/RelativeSection';
import BankSection from '../sections/BankSection';

interface Props {
  doctorProfileData: any;
  verifyDoctorData: any;
  documentTypeData: any;
  activeTab: string;
  setActiveTab: (value: string) => void;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

export default function DoctorVerificationForm({
  doctorProfileData,
  verifyDoctorData,
  documentTypeData,
  activeTab,
  setActiveTab,
  isEditing,
}: Props) {
  // Define tab order
  const tabOrder = [
    'basic',
    'profession',
    'education',
    'experience',
    'training',
    'research',
    'nominee',
    'relative',
    'bank',
  ];

  // Helper to get next / prev tab
  const getNextTab = (tab: string) => {
    const idx = tabOrder.indexOf(tab);
    return idx < tabOrder.length - 1 ? tabOrder[idx + 1] : tab;
  };

  const getPrevTab = (tab: string) => {
    const idx = tabOrder.indexOf(tab);
    return idx > 0 ? tabOrder[idx - 1] : tab;
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl transition-all duration-300">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <Tablist tabData={doctorVerificationTabs} />

          <TabsContent value="basic">
            {activeTab === 'basic' && (
              <ProfileinfoForm
                doctorProfileData={doctorProfileData}
                // isEditing={isEditing}
                setActiveTab={setActiveTab}
                nextTab={getNextTab('basic')}
              />
            )}
          </TabsContent>

          <TabsContent value="profession">
            {activeTab === 'profession' && (
              <VerificationSection
                doctorVerificationData={verifyDoctorData?.doctorVerification}
                setActiveTab={setActiveTab}
                nextTab={getNextTab('profession')}
                prevTab={getPrevTab('profession')}
              />
            )}
          </TabsContent>

          <TabsContent value="education">
            {activeTab === 'education' && (
              <CertificationsSection
                verifyDoctorData={verifyDoctorData}
                doctorId={doctorProfileData?.id}
                isEditing={isEditing}
                documentTypeData={documentTypeData}
                setActiveTab={setActiveTab}
                nextTab={getNextTab('education')}
                prevTab={getPrevTab('education')}
              />
            )}
          </TabsContent>

          <TabsContent value="experience">
            {activeTab === 'experience' && (
              <ExperienceSection
                verifyDoctorData={verifyDoctorData}
                doctorId={doctorProfileData?.id}
                isEditing={isEditing}
                documentTypeData={documentTypeData}
                setActiveTab={setActiveTab}
                nextTab={getNextTab('experience')}
                prevTab={getPrevTab('experience')}
              />
            )}
          </TabsContent>

          <TabsContent value="training">
            {activeTab === 'training' && (
              <TrainingSection
                verifyDoctorData={verifyDoctorData}
                doctorId={doctorProfileData?.id}
                isEditing={isEditing}
                documentTypeData={documentTypeData}
                setActiveTab={setActiveTab}
                nextTab={getNextTab('training')}
                prevTab={getPrevTab('training')}
              />
            )}
          </TabsContent>

          <TabsContent value="research">
            {activeTab === 'research' && (
              <ResearchSection
                verifyDoctorData={verifyDoctorData}
                doctorId={doctorProfileData?.id}
                isEditing={isEditing}
                documentTypeData={documentTypeData}
                setActiveTab={setActiveTab}
                nextTab={getNextTab('research')}
                prevTab={getPrevTab('research')}
              />
            )}
          </TabsContent>

          <TabsContent value="nominee">
            {activeTab === 'nominee' && (
              <NomineeSection
                verifyDoctorData={verifyDoctorData}
                isEditing={isEditing}
                setActiveTab={setActiveTab}
                nextTab={getNextTab('nominee')}
                prevTab={getPrevTab('nominee')}
              />
            )}
          </TabsContent>

          <TabsContent value="relative">
            {activeTab === 'relative' && (
              <RelativeSection
                verifyDoctorData={verifyDoctorData}
                isEditing={isEditing}
                setActiveTab={setActiveTab}
                nextTab={getNextTab('relative')}
                prevTab={getPrevTab('relative')}
              />
            )}
          </TabsContent>

          <TabsContent value="bank">
            {activeTab === 'bank' && (
              <BankSection
                verifyDoctorData={verifyDoctorData}
                isEditing={isEditing}
                setActiveTab={setActiveTab}
                prevTab={getPrevTab('bank')}
              />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
