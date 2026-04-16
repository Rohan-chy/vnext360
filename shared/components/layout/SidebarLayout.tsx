'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar';
import { LogOut } from 'lucide-react';
import { PatientSideMenus } from '../patient/PatientSideMenus';
import { TopMenuLayout } from './TopMenuLayout';
import { CustomButton } from '@/components/extended/extended-button';
import { TopMenuHospital } from './TopMenuHospital';

export function SidebarLayout({
  data,
  user,
  hospitalAdmin, //provider flag
  logout,
  profileUpdate, //profile update methods
  ...props
}: any) {
  const { state, toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props} className="h-full">
      {/* Header */}
      <SidebarHeader className="bg-primary p-0 text-white">
        {/* for doctor */}
        {user?.role != 'Admin' && !hospitalAdmin && user && (
          <TopMenuLayout user={user} />
        )}

        {/* for hospital and admin */}
        {(user?.role === 'Admin' || hospitalAdmin) && user && (
          <TopMenuHospital user={user} profileUpdate={profileUpdate} />
        )}
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="bg-primary text-white flex flex-col h-full">
        <PatientSideMenus
          items={data.menus}
          onIconClickAction={state === 'collapsed' ? toggleSidebar : undefined}
        />

        {/* Logout */}
        <div className="mt-auto p-2">
          <CustomButton
            icon={<LogOut />}
            className="w-full border-white bg-white hover:bg-white text-[#0D6641] hover:text-[#0D6641]"
            onClick={logout}
          >
            Logout
          </CustomButton>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
