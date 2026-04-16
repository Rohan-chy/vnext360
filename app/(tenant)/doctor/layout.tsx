'use client';

import React from 'react';
import Image from 'next/image';
import { AudioWaveform, Command } from 'lucide-react';
import LayoutComponent from '@/shared/components/layout/LayoutComponent';
import { useGetDoctorProfile } from '@/features/tenant/doctor/profile/application/usecases/useGetDoctorProfile';
import { useLogout } from '@/utils/user/useLogout';
import { Icons } from '@/shared/icons';

const NepCareLogoComponent = () => (
  <Image
    src={'/logo/VNEXTLogo.png'}
    alt="VNEXT360 Logo"
    width={40}
    height={40}
    style={{ objectFit: 'fill' }}
    priority
  />
);
const data = {
  user: {
    name: 'som',
    email: 'som@gmail.com',
    avatar: '',
    url: '/doctor/profile',
  },
  teams: [
    {
      name: 'VNEXT360',
      logo: NepCareLogoComponent,
      plan: 'Medical System',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  menus: [
    {
      title: 'Home',
      url: '/doctor',
      icon: Icons.Home,
      isActive: true,
    },
    {
      title: 'Profile',
      url: '/doctor/profile',
      icon: Icons.User,
      isActive: true,
    },
    {
      title: 'Appointments',
      url: '/doctor/appointments',
      icon: Icons.Calendar,
      isActive: true,
    },
    {
      title: 'My Hospitals',
      url: '/doctor/hospitals',
      icon: Icons.Hospital,
    },
    {
      title: 'Hospital Requests',
      url: '/doctor/hospitals/requests',
      icon: Icons.Request,
    },
    {
      title: 'My Schedules',
      url: '/doctor/schedules',
      icon: Icons.Calendar,
    },
    {
      title: 'My Patients',
      url: '/doctor/patients',
      icon: Icons.Users,
    },
    {
      title: 'Patient Question',
      url: '/doctor/patients-question',
      icon: Icons.MessageSquare,
    },
    {
      title: 'Rating/Feedback',
      url: '/doctor/rating',
      icon: Icons.Star,
    },
    {
      title: 'My Earnings',
      url: '',
      icon: Icons.Dollar,
      children: [
        {
          title: 'Summary',
          url: '/doctor/earnings/summary',
          icon: Icons.Circle,
        },
        {
          title: 'Details',
          url: '/doctor/earnings/details',
          icon: Icons.Circle,
        },
      ],
    },
    {
      title: 'Receipt From VNext',
      url: '/doctor/receipts',
      icon: Icons.File,
    },
    {
      title: 'Master',
      url: 'Master',
      icon: Icons.Master,
      children: [
        {
          title: 'Offers',
          url: '/doctor/offers',
          icon: Icons.Circle,
        },
        {
          title: 'Advertisements',
          url: '/doctor/advertisements',
          icon: Icons.Circle,
        },
        {
          title: 'Product Attribute',
          url: '/master/product/product-attribute',
          icon: Icons.Circle,
        },
        {
          title: 'Product Attribute Value',
          url: '/master/product/product-attribute-value',
          icon: Icons.Circle,
        },
        {
          title: 'Product Category',
          url: '/master/product/product-category',
          icon: Icons.Circle,
        },
        {
          title: 'Product',
          url: '/master/product',
          icon: Icons.Circle,
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Icons.Settings,
      children: [
        {
          title: 'Change Password',
          url: '/doctor/changePassword',
          icon: Icons.Circle,
        },
      ],
    },
  ],
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: profile } = useGetDoctorProfile();
  const { logout } = useLogout();

  return (
    <LayoutComponent
      data={data}
      profileData={profile}
      logout={() => logout('/doctor/login')}
    >
      {children}
    </LayoutComponent>
  );
};

export default Layout;
