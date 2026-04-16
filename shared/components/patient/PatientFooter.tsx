'use client';
import { LogOut } from 'lucide-react';

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function PatientFooter() {
  const { isMobile } = useSidebar();
  const router = useRouter();

  const handleLogout = () => {
    // Performing logout logic here, such as clearing tokens or user data
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('token');
    }
    router.replace('login');
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="flex justify-between" onClick={handleLogout}>
              <span>
                <LogOut />
              </span>
              <span>Log out</span>
            </div>
          </SidebarMenuButton>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
