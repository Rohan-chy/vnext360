'use client';

import * as React from 'react';
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  BadgeCheck,
  Mail,
  Phone,
  Share2,
  Pencil,
  CalendarPlus,
  BadgeX,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useRouter } from 'next/navigation';
import { useGetPatientDetails } from '@/features/tenant/patient/profile/application/usecases/useGetPatientDetails';

export function PatientTopMenu({
  user,
}: {
  user?: {
    name?: string;
    email?: string;
    age?: string;
    gender?: string;
    avatar?: string;
    url?: string;
  };
}) {
  const { state } = useSidebar();
  const router = useRouter();
  const { data: profile } = useGetPatientDetails();

  if (!profile) return null;

  const isExpanded = state === 'expanded';
  const avatarUrl =
    profile?.baseAddress && profile?.imageUrl
      ? `http://${profile.baseAddress}${profile.imageUrl}`
      : '';
  // console.log(profile.firstName)

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="w-full p-2 text-white">
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
                  src={avatarUrl}
                  alt="user"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gray-500 flex items-center justify-center text-white font-semibold border">
                  {profile.firstName?.charAt(0).toUpperCase()}
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
                  {`${profile?.title ?? ''}${profile?.firstName ?? ''} ${profile?.lastName ?? ''}` ||
                    'Patient Name'}
                </h3>

                {/* Meta */}
                {/* {profile?.age && (
                  <p className="text-xs text-muted-foreground">
                    {profile?.gender || ''} • {profile?.age || ''}
                  </p>
                )} */}

                {/* Verification row */}
                <div className="mt-1 flex flex-wrap items-center justify-center gap-2 text-[11px] text-muted-foreground">
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
                  {/* <span className="flex items-center gap-2 text-red-600">
                    <Phone className="h-3.5 w-3.5" />
                    Mobile Not Verified
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-5 text-[10px]"
                    >
                      Verify
                    </Button>
                  </span> */}

                  <span className="flex items-center gap-1 text-white">
                    <Mail className="h-3.5 w-3.5" />
                    Email
                    <span className="bg-background rounded-full p-1 ">
                      <BadgeX className="h-3.5 w-3.5 text-red-600" />
                    </span>
                  </span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-6 w-6 shrink-0 cursor-pointer"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Share Profile</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-6 w-6 shrink-0 cursor-pointer"
                        onClick={() => router.push('/patient/profile/edit')}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Edit Profile</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                {/* Compact Actions Row */}
                {/* <div className="mt-2 flex w-full items-center gap-2"> */}
                {/* Primary */}
                {/* <Button
                    size="sm"
                    onClick={() => router.push('/patient/appointments/book')}
                    className="flex-1 h-8 gap-1 bg-blue-900 px-2 text-xs hover:bg-blue-1000 cursor-pointer"
                  >
                    <CalendarPlus className="h-3.5 w-3.5" />
                    Book Appointment
                  </Button> */}

                {/* Secondary icon buttons */}

                {/* <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 shrink-0 cursor-pointer"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Share Profile</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 shrink-0 cursor-pointer"
                        onClick={() => router.push('/patient/profile/edit')}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Edit Profile</p>
                    </TooltipContent>
                  </Tooltip> */}
                {/* </div> */}
              </>
            )}
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
