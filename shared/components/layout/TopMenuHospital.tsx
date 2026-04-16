'use client';

import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import ProfileImageUpload from '../ProfileImageUpload';

export function TopMenuHospital({ user, profileUpdate }: any) {
  const { state } = useSidebar();
  const isExpanded = state === 'expanded';

  const { form, handleImageChange } = profileUpdate || {};

  if (!user) return null;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="w-full p-1 text-white border-b">
          <div className="flex flex-col items-center text-center">
            {/* Avatar */}

            <ProfileImageUpload
              form={form}
              name="image"
              className={isExpanded ? 'w-20 h-20' : 'w-10 h-10'}
              label={user?.name?.charAt(0)?.toUpperCase() || '?'}
              canEdit={true} //no provision to profile edit
              onChange={handleImageChange} // profile edit method, it will only work when canEdit is true
              apiImage={{
                baseAddress: user?.baseAddress,
                path: user?.imageUrl,
              }}
            />

            {/* Name */}
            {isExpanded && (
              <>
                <h3 className="mt-2 text-sm font-semibold truncate">
                  {user.name}
                </h3>
                {/* Email */}
                {user.email && (
                  <p className="text-xs text-white/80 truncate">{user.email}</p>
                )}
              </>
            )}
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
