'use client';

import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { SidebarLayout } from './SidebarLayout';
import { CustomSidebarTrigger } from '@/components/extended/custom-sidebar-trigger';
import { Bell, Menu } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';
import { ModeToggle } from '../ModeToggle';
import { cn } from '@/lib/utils';

type LayoutProps = {
  children: React.ReactNode;
  data?: any;
  profileData?: any;
  logout?: () => void;
  profileUpdate?: any;
  hospitalAdmin?: any;
};

const LayoutComponent = ({
  children,
  data,
  profileData,
  logout,
  profileUpdate,
  hospitalAdmin,
}: LayoutProps) => {
  const mainRef = React.useRef<HTMLDivElement | null>(null);
  const [hideBreadcrumb, setHideBreadcrumb] = React.useState(false);

  React.useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;

    const handleScroll = () => {
      setHideBreadcrumb(mainEl.scrollTop > 0);
    };

    mainEl.addEventListener('scroll', handleScroll);
    return () => mainEl.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex flex-1 overflow-hidden">
        <SidebarProvider>
          <div className="flex w-full h-screen overflow-hidden">
            <SidebarLayout
              data={data}
              user={profileData}
              hospitalAdmin={hospitalAdmin}
              logout={logout}
              profileUpdate={profileUpdate}
            />

            {/* Main Content */}
            <div className="flex flex-col flex-1 min-w-0 bg-[#E6F4EF] relative">
              {/* Header */}
              <div className="sticky top-0 z-10 flex flex-col bg-white border-b border-primary/10 pb-1">
                <header className="flex justify-between h-12 items-center px-2">
                  {/* Sidebar toggle */}
                  <CustomSidebarTrigger icon={<Menu />} />

                  <div className="flex items-center gap-3 px-4">
                    {/* Notification */}
                    <span className="relative flex h-8 w-8 items-center justify-center">
                      <span className="absolute top-0 right-0 inline-flex h-2 w-2 animate-ping rounded-full bg-primary" />
                      <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary" />

                      <Bell
                        className="relative z-10 h-5 w-5 text-primary"
                        strokeWidth={1.5}
                      />
                    </span>

                    {/* Toggle */}
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#">
                            <ModeToggle />
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </div>
                </header>

                {/* Animated breadcrumb */}
                <div
                  className={cn(
                    'px-4 absolute top-10 transition-all duration-300',
                    hideBreadcrumb
                      ? 'opacity-0 pointer-events-none -translate-y-4'
                      : 'opacity-100 translate-y-0'
                  )}
                >
                  {/* breadcrumb here */}
                </div>
              </div>

              {/* Scroll Area */}
              <main
                ref={mainRef}
                className="flex-1 overflow-y-auto px-4 py-3 bg-[#E6F4EF]"
              >
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default LayoutComponent;
