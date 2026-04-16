'use client';

import React from 'react';
import LayoutComponent from '@/shared/components/layout/LayoutComponent';
import { useGetProfileOrganization } from '@/features/tenant/organization/profile/application/useGetProfileOrganization';
import { useLogout } from '@/utils/user/useLogout';
import { useUser } from '@/utils/user/useGetUser';
import { Icons } from '@/shared/icons';
import { updateClinicImageForm } from '@/shared/features/clinic/domain/forms/updateClinicImageForm';
import { useUpdateClinicImageHandle } from '@/shared/features/clinic/presentation/hooks/useUpdateClinicImageHandle';

const data = {
  user: {
    name: 'bishal',
    email: 'bishal@gmail.com',
    avatar: '',
    url: '',
  },
  menus: [
    {
      title: 'Dashboard',
      url: '/organization',
      icon: Icons.Home,
      isActive: true,
    },
    {
      title: 'Doctors',
      url: 'Registration',
      icon: Icons.User,
      children: [
        {
          title: 'Doctor Requests',
          url: '/organization/doctors/requests',
          icon: Icons.Circle,
        },
        {
          title: 'Doctor Schedules',
          url: '/organization/doctors/schedules',
          icon: Icons.Circle,
        },
      ],
    },
    {
      title: 'Clinic',
      url: '/organization/clinic',
      icon: Icons.Hospital,
    },
    {
      title: 'Appointments',
      url: '/organization/appointments',
      icon: Icons.Calendar,
    },
    {
      title: 'Master',
      url: 'Master',
      icon: Icons.Master,
      children: [
        {
          title: 'Doctor',
          url: '#',
          icon: Icons.User,
          children: [
            {
              title: 'Speciality',
              url: '/organization/master/doctor-category',
              icon: Icons.Circle,
            },
            {
              title: 'Sub-speciality',
              url: '/organization/master/doctor-subcategory',
              icon: Icons.Circle,
            },
          ],
        },
        {
          title: 'Product Attribute',
          url: '/organization/master/product/product-attribute',
          icon: Icons.Circle,
        },
        {
          title: 'Product Attribute Value',
          url: '/organization/master/product/product-attribute-value',
          icon: Icons.Circle,
        },
        {
          title: 'Product Category',
          url: '/organization/master/product/product-category',
          icon: Icons.Circle,
        },
        {
          title: 'Product',
          url: '/organization/master/product',
          icon: Icons.Circle,
        },
        {
          title: 'HsCode',
          url: '/organization/master/product/hsCode',
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
          url: '/organization/changePassword',
          icon: Icons.Circle,
        },
      ],
    },
  ],
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const form = updateClinicImageForm();

  const { data: orgProfile } = useGetProfileOrganization();
  const { data: userProfile } = useUser();

  const profile = orgProfile ?? userProfile;
  const { handleImageChange } = useUpdateClinicImageHandle({ profile });
  const { logout } = useLogout();

  const profileUpdate = {
    form,
    handleImageChange,
  };

  return (
    <LayoutComponent
      data={data}
      profileData={profile}
      hospitalAdmin={true}
      logout={() => logout('/organization/login')}
      profileUpdate={profileUpdate}
    >
      {children}
    </LayoutComponent>
  );
};

export default Layout;
