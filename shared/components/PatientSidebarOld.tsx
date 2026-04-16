'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, LucideIcon } from 'lucide-react';
import { ChevronLeft, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

interface MenuItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  children?: MenuItem[];
}

interface PatientSidebarProps {
  data: {
    menus: MenuItem[];
  };
  className?: string;
  logo?: {
    src: string;
    alt: string;
    href?: string;
  };
  userProfile?: {
    name: string;
    email: string;
    avatar?: string;
  };
  onLogout?: () => void;
  collapsed?: boolean;
  onCollapse?: () => void;
}

export function PatientSidebarOld({
  data,
  className,
  logo,
  userProfile,
  onLogout,
  collapsed = false,
  onCollapse,
}: PatientSidebarProps) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = React.useState<Set<string>>(new Set());

  // Auto-expand parent menu if child is active
  React.useEffect(() => {
    const newOpenMenus = new Set(openMenus);

    data.menus.forEach((menu) => {
      if (menu.children) {
        const hasActiveChild = menu.children.some(
          (child) => child.url === pathname
        );
        if (hasActiveChild) {
          newOpenMenus.add(menu.title);
        }
      }
    });

    setOpenMenus(newOpenMenus);
  }, [pathname, data.menus]);

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  const isMenuItemActive = (item: MenuItem): boolean => {
    if (item.url === pathname) return true;
    if (item.children) {
      return item.children.some((child) => child.url === pathname);
    }
    return false;
  };

  return (
    <aside
      className={cn(
        'flex flex-col h-full bg-green-800 text-white transition-all duration-300',
        collapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      {/* Logo Section */}
      <div
        className={cn(
          'p-4 border-b border-green-700',
          collapsed
            ? 'flex justify-center'
            : 'flex items-center justify-between'
        )}
      >
        <Link
          href={logo?.href || '/'}
          className={cn(
            'flex items-center gap-3',
            collapsed && 'justify-center'
          )}
        >
          {logo?.src ? (
            <div className="relative w-8 h-8 rounded-md overflow-hidden bg-white/10">
              <Image
                src={logo.src}
                alt={logo.alt || 'Logo'}
                fill
                className="object-contain p-1"
              />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-md bg-green-600 flex items-center justify-center">
              <span className="text-lg font-bold text-white">P</span>
            </div>
          )}
          {!collapsed && (
            <span className="text-lg font-semibold tracking-tight text-white">
              Patient Portal
            </span>
          )}
        </Link>

        {/* Collapse Toggle Button */}
        {onCollapse && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onCollapse}
            className={cn(
              'text-white hover:bg-green-700 hover:text-white',
              collapsed && 'hidden'
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Navigation Menu */}
      <ScrollArea className="flex-1">
        <nav className="p-2">
          <ul className="space-y-1">
            {data.menus.map((menu, index) => (
              <MenuItem
                key={`${menu.title}-${index}`}
                item={menu}
                isOpen={openMenus.has(menu.title)}
                onToggle={() => toggleMenu(menu.title)}
                isActive={isMenuItemActive(menu)}
                pathname={pathname}
                collapsed={collapsed}
              />
            ))}
          </ul>
        </nav>
      </ScrollArea>

      {/* User Profile Section */}
      {userProfile && (
        <div className="border-t border-green-700 p-4">
          {collapsed ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex justify-center">
                    <Avatar className="h-8 w-8 ring-2 ring-green-600">
                      <AvatarImage src={userProfile.avatar} />
                      <AvatarFallback className="bg-green-600 text-white">
                        {userProfile.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-green-800 text-white border-green-700"
                >
                  <p>{userProfile.name}</p>
                  <p className="text-xs text-green-200">{userProfile.email}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9 ring-2 ring-green-600">
                  <AvatarImage src={userProfile.avatar} />
                  <AvatarFallback className="bg-green-600 text-white">
                    {userProfile.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {userProfile.name}
                  </p>
                  <p className="text-xs text-green-200 truncate">
                    {userProfile.email}
                  </p>
                </div>
              </div>

              {onLogout && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onLogout}
                  className="w-full justify-start text-green-100 hover:text-white hover:bg-green-700"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign out
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </aside>
  );
}

// Internal MenuItem component using shadcn Collapsible
function MenuItem({
  item,
  isOpen,
  onToggle,
  isActive,
  pathname,
  collapsed,
  level = 0,
}: {
  item: MenuItem;
  isOpen: boolean;
  onToggle: () => void;
  isActive: boolean;
  pathname: string;
  collapsed: boolean;
  level?: number;
}) {
  const hasChildren = item.children && item.children.length > 0;
  const Icon = item.icon;

  if (collapsed) {
    return (
      <li>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              {hasChildren ? (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onToggle}
                  className={cn(
                    'w-full h-9',
                    isActive
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'text-green-100 hover:bg-green-700 hover:text-white'
                  )}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </Button>
              ) : (
                <Link
                  href={item.url}
                  className={cn(
                    'flex items-center justify-center w-full h-9 rounded-md',
                    isActive
                      ? 'bg-green-600 text-white'
                      : 'text-green-100 hover:bg-green-700 hover:text-white'
                  )}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </Link>
              )}
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-green-800 text-white border-green-700"
            >
              <p>{item.title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </li>
    );
  }

  return (
    <li>
      {hasChildren ? (
        <Collapsible open={isOpen} onOpenChange={onToggle}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                'w-full justify-between px-3 py-2 h-auto font-normal',
                isActive
                  ? 'bg-green-600 text-white hover:bg-green-700 hover:text-white'
                  : 'text-green-100 hover:bg-green-700 hover:text-white',
                level > 0 && 'pl-8'
              )}
            >
              <div className="flex items-center gap-3">
                {Icon && <Icon className="h-4 w-4" />}
                <span>{item.title}</span>
              </div>
              {isOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ul className="mt-1 space-y-1">
              {item.children?.map((child, index) => (
                <MenuItem
                  key={`${child.title}-${index}`}
                  item={child}
                  isOpen={false}
                  onToggle={() => {}}
                  isActive={child.url === pathname}
                  pathname={pathname}
                  collapsed={collapsed}
                  level={level + 1}
                />
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      ) : (
        <Link
          href={item.url}
          className={cn(
            'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
            isActive
              ? 'bg-green-600 text-white'
              : 'text-green-100 hover:bg-green-700 hover:text-white',
            level > 0 && 'pl-8'
          )}
        >
          {Icon && <Icon className="h-4 w-4" />}
          <span>{item.title}</span>
        </Link>
      )}
    </li>
  );
}
