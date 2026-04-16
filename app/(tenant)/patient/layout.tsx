'use client';

import { SidebarProvider } from '@/components/ui/sidebar';
import {
  FileText,
  Menu,
  MessageSquare,
  Receipt,
  Repeat,
  Star,
  Truck,
  UserIcon,
  Wallet,
} from 'lucide-react';
import React from 'react';
// import { cn } from '@/lib/utils';
import { CustomSidebarTrigger } from '@/components/extended/custom-sidebar-trigger';
import Image from 'next/image';
import {
  Home,
  // Settings2,
  ClipboardClock,
} from 'lucide-react';
import { PatientSidebar } from '@/shared/components/patient/PatientSidebar';
import Navbar from '@/shared/components/Navbar';
import Footer1 from '@/features/tenant/super-admin/page-builder/presentation/components/green/Footer1Green';

const NepCareLogoComponent = () => (
  <Image
    src="/logo/user.jpg"
    alt="user"
    width={60}
    height={60}
    className="cursor-pointer rounded-full"
  />
);
const data = {
  user: {
    name: 'Er. Som Kr. Shah',
    age: '38 years',
    gender: 'male',
    email: 'bishal@gmail.com',
    avatar: '',
    url: '',
  },
  teams: [
    {
      name: 'Bishal',
      logo: NepCareLogoComponent,
      plan: 'Medical System',
    },
  ],
  menus: [
    {
      title: 'Home',
      url: '/patient/home',
      icon: Home,
      isActive: true,
    },
    {
      title: 'Profile',
      url: '/patient/profile',
      icon: UserIcon,
    },
    {
      title: 'My Appointments',
      url: '/patient/appointments',
      icon: ClipboardClock,
      // children: [
      //   {
      //     title: 'Upcoming Appointments',
      //     url: '/appointment/upcoming',
      //     icon: Circle,
      //   },
      //   {
      //     title: 'Past Appointments',
      //     url: '/appointment/pas t',
      //     icon: Circle,
      //   },
      // ],
    },
    {
      title: 'My Payment Methods',
      url: '/patient/paymentMethods',
      icon: Wallet,
    },
    {
      title: 'My Subscriptions',
      url: '/patient/subscriptions',
      icon: Repeat,
    },
    {
      title: 'My Visit History',
      url: '/patient/visitHistory',
      icon: FileText,
    },
    {
      title: 'My Orders',
      url: '/patient/orders',
      icon: Truck,
    },
    {
      title: 'Purchase History',
      url: '/patient/purchaseHistory',
      icon: Receipt,
    },
    {
      title: 'My Feedback',
      url: '#',
      icon: MessageSquare,
    },
    {
      title: 'My Ratings',
      url: '#',
      icon: Star,
    },
  ],
};

export default function PatientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // 1. Outer wrapper is a column that fills the screen
    <div className="flex flex-col w-full">
      {/* 2. Navbar stays at the top */}
      <nav className="shrink-0">
        <Navbar />
      </nav>

      {/* 3. Middle Section: This grows to fill the gap. */}
      <div className="flex flex-1 overflow-hidden">
        <SidebarProvider>
          <div className="flex w-full h-full">
            <PatientSidebar data={data} />
            {/* 5. Main Content Area */}
            <div className="flex flex-col flex-1 min-w-0 relative">
              {/* <header className="flex h-5 items-center px-4 border-b shrink-0"> */}
              <div className="absolute top-1 left-0 z-50">
                <CustomSidebarTrigger icon={<Menu />} />
              </div>
              {/* </header> */}
              <main className="flex-1 overflow-y-auto px-6 py-1">
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
      </div>

      <footer>
        <Footer1 />
      </footer>
    </div>
  );
}
