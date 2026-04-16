'use client';
import React from 'react';
import LayoutComponent from '@/shared/components/layout/LayoutComponent';
import { useUser } from '@/utils/user/useGetUser';
import { useLogout } from '@/utils/user/useLogout';
import { Icons } from '@/shared/icons';

const data = {
  menus: [
    {
      title: 'Dashboard',
      url: '/superAdmin/dashboard',
      icon: Icons.Home,
      isActive: true,
    },
    {
      title: 'Tenants',
      url: '/superAdmin/tenants',
      icon: Icons.User,
    },
    {
      title: 'Organizations',
      url: '/tenants',
      icon: Icons.Hospital,
      children: [
        {
          title: 'All Organizations',
          url: '/superAdmin/organization',
          icon: Icons.Circle,
        },
      ],
    },
    {
      title: 'Doctor',
      url: 'Registration',
      icon: Icons.User,
      children: [
        {
          title: 'Verification Requests',
          url: '/superAdmin/doctor/request',
          icon: Icons.Circle,
        },
        {
          title: 'Doctor Schedules',
          url: '/superAdmin/allocateClinic',
          icon: Icons.Circle,
        },
      ],
    },
    {
      title: 'Clinic',
      url: '/superAdmin/clinics',
      icon: Icons.Hospital,
    },
    {
      title: 'Pages',
      url: 'Page Builder',
      icon: Icons.Page,
      children: [
        {
          title: 'Blog',
          url: '#',
          icon: Icons.Circle,
          children: [
            {
              title: 'Create Blog',
              url: '/superAdmin/blog/create',
              icon: Icons.Circle,
            },
            {
              title: 'View Blogs',
              url: '/superAdmin/blog',
              icon: Icons.Circle,
            },
          ],
        },
        {
          title: 'Design Page',
          url: '/superAdmin/page-builder',
          icon: Icons.Circle,
        },
        {
          title: 'View Page',
          url: '/superAdmin/page-builder/view-page',
          icon: Icons.Circle,
        },
      ],
    },
    {
      title: 'Master',
      url: 'Master',
      icon: Icons.Master,
      children: [
        {
          title: 'Address',
          url: 'address',
          icon: Icons.Location,
          children: [
            {
              title: 'Country',
              url: '/superAdmin/country',
              icon: Icons.Circle,
            },
            {
              title: 'State',
              url: '/superAdmin/state',
              icon: Icons.Circle,
            },
            {
              title: 'District',
              url: '/superAdmin/district',
              icon: Icons.Circle,
            },
            {
              title: 'Municipal',
              url: '/superAdmin/municipal',
              icon: Icons.Circle,
            },
            {
              title: 'Ward',
              url: '/superAdmin/ward',
              icon: Icons.Circle,
            },
          ],
        },
        {
          title: 'Doctor',
          url: '#',
          icon: Icons.User,
          children: [
            {
              title: 'Speciality',
              url: '/superAdmin/master/doctor-category',
              icon: Icons.Circle,
            },
            {
              title: 'Sub-speciality',
              url: '/superAdmin/master/doctor-subcategory',
              icon: Icons.Circle,
            },
          ],
        },
        {
          title: 'Salutation',
          url: '/superAdmin/master/salutation',
          icon: Icons.Circle,
        },
        {
          title: 'Document Type',
          url: '/superAdmin/master/document-type',
          icon: Icons.Circle,
        },
        {
          title: 'Product Attribute',
          url: '/superAdmin/master/product/product-attribute',
          icon: Icons.Circle,
        },
        {
          title: 'Product Attribute Value',
          url: '/superAdmin/master/product/product-attribute-value',
          icon: Icons.Circle,
        },
        {
          title: 'Product Category',
          url: '/superAdmin/master/product/product-category',
          icon: Icons.Circle,
        },
        {
          title: 'Product',
          url: '/superAdmin/master/product',
          icon: Icons.Circle,
        },
        {
          title: 'Number Setting',
          url: '/superAdmin/appointment/numberSetting',
          icon: Icons.Circle,
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Icons.Settings,
    },
  ],
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: profile } = useUser();
  const { logout } = useLogout();

  return (
    <LayoutComponent
      data={data}
      profileData={profile}
      logout={() => logout('/')}
    >
      {children}
    </LayoutComponent>
  );
};

export default Layout;
