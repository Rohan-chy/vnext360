'use client';
import { ChevronRight, type LucideIcon } from 'lucide-react';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

export function PatientSideMenus({
  items,
  onIconClickAction,
}: {
  items: MenuItem[];
  onIconClickAction?: () => void;
}) {
  const { state } = useSidebar();
  // Props must be serializable for components in the "use client" entry file.
  // "onIconClick" is a function that's not a Server Action.
  //  Rename "onIconClick" either to "action" or have its name end with "Action" e.g. "onIconClickAction" to indicate it is a Server Action.
  // expanded
  // collapsed
  const [activeMenu, setActiveMenu] = React.useState<string>(
    items.find((item) => item.isActive)?.title || ''
  );

  const handleMenuClick = (title: string) => {
    setActiveMenu(title);
    if (onIconClickAction) onIconClickAction();
  };

  const renderMenu = (menuItems: MenuItem[], level = 0) => {
    return menuItems.map((item) => {
      const hasChildren = !!item.children?.length;

      return (
        <Collapsible
          key={item.title}
          defaultOpen={item.isActive}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              {item.url && !hasChildren ? (
                <Link href={item.url}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    // onClick={onIconClickAction}
                    onClick={() => handleMenuClick(item.title)}
                    className={`${
                      activeMenu === item.title
                        ? 'bg-green-50 text-green-800 hover:bg-green-50 hover:text-green-800'
                        : ''
                    } h-9`}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    {hasChildren && (
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    )}
                  </SidebarMenuButton>
                </Link>
              ) : (
                <SidebarMenuButton
                  tooltip={item.title}
                  // onClick={onIconClickAction}
                  onClick={() => handleMenuClick(item.title)}
                  className={`${
                    activeMenu === item.title
                      ? 'bg-green-800 text-white hover:bg-green-800 hover:text-white'
                      : 'hover:bg-green-800 hover:text-white'
                  }`}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  {hasChildren && (
                    <>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </>
                  )}
                </SidebarMenuButton>
              )}
            </CollapsibleTrigger>

            {hasChildren && (
              <CollapsibleContent>
                <SidebarMenuSub className={level > 0 ? 'pl-4' : ''}>
                  {renderMenu(item.children!, level + 1)}
                </SidebarMenuSub>
              </CollapsibleContent>
            )}
          </SidebarMenuItem>
        </Collapsible>
      );
    });
  };
  return (
    <SidebarGroup>
      <SidebarMenu>{renderMenu(items)}</SidebarMenu>
    </SidebarGroup>
  );
}

import * as React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { cva, type VariantProps } from 'class-variance-authority';
import { MenuItem } from './PatientSidebar';

interface SmoothCollapsibleProps extends React.ComponentProps<
  typeof CollapsiblePrimitive.Root
> {
  children: React.ReactNode;
}

export const SmoothCollapsible: React.FC<SmoothCollapsibleProps> = ({
  children,
  ...props
}) => {
  const [height, setHeight] = React.useState(0);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const handleOpenChange = (open: boolean) => {
    if (contentRef.current) {
      setHeight(open ? contentRef.current.scrollHeight : 0);
    }
  };

  return (
    <CollapsiblePrimitive.Root {...props} onOpenChange={handleOpenChange}>
      <div
        style={{
          height: height,
          overflow: 'hidden',
          transition: 'height 0.4s ease',
        }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </CollapsiblePrimitive.Root>
  );
};
