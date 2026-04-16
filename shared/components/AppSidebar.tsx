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
import { SideMenus } from './SideMenus';
import { SideHeader } from './SideHeader';
import { NavUser } from './NavUser';

import { LucideIcon } from 'lucide-react';
import { ComponentType } from 'react';

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
  user: User;
  teams: Team[];
  menus: MenuItem[];
}
interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  data: AppData;
}
export function AppSidebar({ data, ...props }: AppSidebarProps) {
  const { state, toggleSidebar } = useSidebar(); // Access the sidebar state and toggle function

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SideHeader teams={data?.teams || []} />
      </SidebarHeader>
      <SidebarContent>
        <SideMenus
          items={data.menus}
          onIconClickAction={state === 'collapsed' ? toggleSidebar : undefined}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data?.user || {}} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
