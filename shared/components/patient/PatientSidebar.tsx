'use client';
import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import { SideMenus } from '../SideMenus';
import { LucideIcon } from 'lucide-react';
import { ComponentType } from 'react';
import { PatientTopMenu } from './PatientTopMenu';
import { PatientFooter } from './PatientFooter';
import { PatientSideMenus } from './PatientSideMenus';

export interface User {
  name: string;
  email: string;
  avatar: string;
  url: string;
}

export interface Team {
  name: string;
  logo: ComponentType<any> | LucideIcon;
  plan: string;
}

export interface MenuItem {
  title: string;
  url?: string;
  icon: LucideIcon;
  isActive?: boolean;
  children?: MenuItem[]; // recursive
}

export interface AppData {
  // user: User;
  teams: Team[];
  menus: MenuItem[];
}
interface PatientSidebarProps extends React.ComponentProps<typeof Sidebar> {
  data: AppData;
  user?: User;
}
export function PatientSidebar({ data, user, ...props }: PatientSidebarProps) {
  const { state, toggleSidebar } = useSidebar(); // Access the sidebar state and toggle function

  return (
    <Sidebar collapsible="icon" {...props} className="h-full relative ">
      <SidebarHeader className="p-0 ">
        <PatientTopMenu user={user} />
      </SidebarHeader>
      <SidebarContent className="bg-primary text-white border-t">
        <PatientSideMenus
          items={data.menus}
          onIconClickAction={state === 'collapsed' ? toggleSidebar : undefined}
        />
      </SidebarContent>
      <SidebarFooter className="bg-primary text-white border-b">
        <PatientFooter />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
