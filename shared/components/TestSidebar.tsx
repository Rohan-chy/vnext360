'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Calendar,
  Star,
  Users,
  FileText,
  Wallet,
  Receipt,
  MessageCircle,
  Activity,
  Settings,
  LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

type MenuItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
};

const menuItems: MenuItem[] = [
  { label: 'Dashboard', href: '/patient/dashboard', icon: LayoutDashboard },
  { label: 'My Appointments', href: '/patient/appointments', icon: Calendar },
  { label: 'Favourites', href: '/patient/favourites', icon: Star },
  { label: 'Dependants', href: '/patient/dependants', icon: Users },
  { label: 'Medical Records', href: '/patient/records', icon: FileText },
  { label: 'Wallet', href: '/patient/wallet', icon: Wallet },
  { label: 'Invoices', href: '/patient/invoices', icon: Receipt },
  {
    label: 'Message',
    href: '/patient/messages',
    icon: MessageCircle,
    badge: 7,
  },
  { label: 'Vitals', href: '/patient/vitals', icon: Activity },
  { label: 'Settings', href: '/patient/settings', icon: Settings },
];

export default function TestSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-background flex flex-col">
      {/* Logo / Header */}
      <div className="h-16 flex items-center px-4 border-b font-semibold text-lg">
        VNEXT360
      </div>

      {/* Scrollable menu */}
      <ScrollArea className="flex-1">
        <nav className="p-3 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <Badge
                    variant="secondary"
                    className="h-5 min-w-5 px-1.5 text-xs"
                  >
                    {item.badge}
                  </Badge>
                )}
              </Link>
            );
          })}

          {/* Logout */}
          <div className="pt-4">
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-muted">
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </nav>
      </ScrollArea>
    </aside>
  );
}
