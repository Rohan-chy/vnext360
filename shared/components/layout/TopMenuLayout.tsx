'use client';

import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Mail, Phone, Share2, Pencil, BadgeX } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { AppTooltip } from '@/components/custom-components/tooltip-app';

export function TopMenuLayout({ user }: Record<string, any>) {
  const { state } = useSidebar();
  const router = useRouter();

  if (!user) return null;

  const isExpanded = state === 'expanded';
  const avatarUrl =
    user?.imageBaseAddress && user?.imagePath
      ? `http://${user.imageBaseAddress}${user.imagePath}`
      : '';

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        {
          // avatarUrl &&
          // <div className="w-full bg-linear-to-b from-[#0f9a8c] via-[#1086b7] to-[#1b63e0] backdrop-blur-md p-2 text-white">
          <div className="w-full backdrop-blur-md p-2 text-white border-b">
            <div className="flex flex-col items-center text-center">
              {/* Avatar */}

              <div
                className={cn(
                  'relative rounded-full ring-2 ring-primary/20 transition-all duration-200',
                  isExpanded ? 'w-20 h-20' : 'w-10 h-10'
                )}
              >
                {avatarUrl ? (
                  <img
                    src={avatarUrl || ''}
                    alt="Profile"
                    width={100}
                    height={100}
                    className="h-full w-full object-cover rounded-full"
                  />
                ) : (
                  <div
                    className={`h-full w-full rounded-full ring-2 ring-gray/40 flex items-center justify-center text-center text-xl  p-2`}
                  >
                    {user?.firstName?.charAt(0)?.toUpperCase() || '?'}
                  </div>
                )}

                {/* verification badge */}
                <div className="absolute bottom-0 right-0 bg-green-500 rounded-full border-2 border-white w-5 h-5 flex items-center justify-center z-20">
                  <BadgeCheck className="text-white w-3 h-3" />
                </div>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <>
                  {/* Name */}
                  <h3 className="mt-1 text-base font-semibold truncate">
                    {`${user?.title ?? ''}${user?.firstName ?? ''} ${user?.lastName ?? ''}` ||
                      'Name'}
                  </h3>

                  {/* Verification row */}
                  <div className="mt-1 flex flex-wrap items-center justify-center gap-1 text-[11px] text-muted-foreground">
                    {/* <span className="flex items-center gap-1">
                    <BadgeCheck className="h-3.5 w-3.5 text-green-600" />
                    Verified
                  </span> */}

                    <span className="flex items-center gap-1 text-white">
                      <Phone className="h-3.5 w-3.5 " />
                      Phone no.
                      <span className="bg-background rounded-full p-1 ">
                        <BadgeCheck className="h-3.5 w-3.5 text-green-600" />
                      </span>
                    </span>

                    <AppTooltip content="Share Profile">
                      <Button
                        size="icon"
                        className="h-6 w-6 shrink-0 cursor-pointer"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </AppTooltip>

                    <AppTooltip content="Edit Profile">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-6 w-6 shrink-0 cursor-pointer"
                        onClick={() => router.push('/patient/profile/edit')}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </AppTooltip>
                  </div>
                </>
              )}
            </div>
          </div>
        }
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
