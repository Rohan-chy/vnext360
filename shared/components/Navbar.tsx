'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  ChevronDown,
  ClipboardClock,
  CreditCard,
  CreditCardIcon,
  History,
  LogOutIcon,
  MessageCircle,
  Microscope,
  SettingsIcon,
  SquareCheck,
  Star,
  UserIcon,
} from 'lucide-react';
import { useGetPatientDetails } from '@/features/tenant/patient/profile/application/usecases/useGetPatientDetails';

type MenuItem = {
  title: string;
  link: string;
  submenu?: MenuItem[];
};

const menuItems: MenuItem[] = [
  { title: 'Find Doctors', link: '/client/doctors' },
  { title: 'Hospitals', link: '/client/hospitals' },
  { title: 'Lab & Diagnostic Test', link: '/client/labAndDiagnosticTest' },
  { title: 'Surgeries', link: '/client/surgeries' },
  { title: 'Pharmacy', link: '/client/pharmacy' },
  { title: 'Ask a question', link: '/client/ask-question' },
];

const offers: MenuItem[] = [
  { title: 'Offers', link: '/client/offers' },
  { title: 'For Corporates', link: '/client/for-corporates' },
  {
    title: 'Register your practice',
    link: '#',
    submenu: [
      { title: 'Register as Doctor', link: '/doctor/register' },
      { title: 'Register your Organization', link: '/organization/register' },
    ],
  },
];

const Navbar: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [offerHover, setOfferHover] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [open, setOpen] = React.useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [hasToken, setHasToken] = useState(false);
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    setHasToken(!!token);
  }, []);

  const menuItemClass =
    'cursor-pointer px-4 py-2 data-[highlighted]:bg-green-800 data-[highlighted]:text-white';
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setHasToken(false);
    router.push('/client');
  };

  const { data: patientProfileData } = useGetPatientDetails();
  const avatarUrl =
    patientProfileData?.baseAddress && patientProfileData?.imageUrl
      ? `http://${patientProfileData.baseAddress}${patientProfileData.imageUrl}`
      : '';

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-5 flex h-18 items-center justify-between border-b border-gray-200 bg-white px-6">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <Link href="/client">
            <Image
              src="/logo/VnextSolutions_logo.png"
              alt="VNEXT360 Logo"
              width={150}
              height={60}
              className="cursor-pointer"
            />
          </Link>

          {!isMobile && (
            <ul className="flex gap-5 text-sm">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link
                    href={item.link}
                    className={`transition-colors ${
                      hoveredIndex === index ? 'text-[#0D6641]' : 'text-black'
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* RIGHT */}
        {!isMobile ? (
          <div className="flex items-center gap-3">
            {offers.map((item, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setOfferHover(i)}
                onMouseLeave={() => setOfferHover(null)}
              >
                <Link
                  href={item.link}
                  className={`rounded-full px-3 py-1 text-sm text-[#0D6641] transition ${
                    offerHover === i ? 'bg-indigo-100' : ''
                  }`}
                >
                  {item.title}
                </Link>

                {item.submenu && offerHover === i && (
                  <div className="absolute left-0 top-full z-10 min-w-55 rounded-lg border bg-white shadow-lg">
                    {item.submenu.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.link}
                        className="block px-4 py-2 text-sm text-black hover:bg-slate-100"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {hasToken ? (
              <div className="flex items-center gap-2">
                <span className="w-14 h-14 overflow-hidden">
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt="user"
                      className="cursor-pointer h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gray-500 flex items-center justify-center text-white font-semibold border">
                      {patientProfileData?.firstName?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </span>

                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger asChild>
                    <div className="flex gap-2">
                      <h1 className="font-semibold hover:underline text-sm cursor-pointer">
                        {`${patientProfileData?.title ?? ''}${patientProfileData?.firstName ?? ''}`}
                      </h1>
                      <span>
                        <ChevronDown
                          className={`size-4 transition-transform duration-200 ${
                            open ? 'rotate-180' : ''
                          }`}
                        />
                      </span>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    side="bottom"
                    align="center"
                    sideOffset={37}
                    className="min-w-64"
                  >
                    <DropdownMenuItem
                      className={menuItemClass}
                      onClick={() => router.push('/patient/profile')}
                    >
                      <UserIcon className="hover:text-white" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="opacity-80 cursor-pointer" />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className={menuItemClass}
                    >
                      <LogOutIcon className="hover:text-white" />
                      Log out
                    </DropdownMenuItem>

                    {/* <DropdownMenuItem className={menuItemClass}>
                      <CreditCard className="hover:text-white" />
                      My Payment Methods
                    </DropdownMenuItem> */}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <>
                <>
                  <button
                    onClick={() => router.push('/patient/login')}
                    className="rounded-lg cursor-pointer border border-[#0D6641] px-4 py-2 text-sm text-[#0D6641]"
                  >
                    Login
                  </button>

                  <button
                    onClick={() => router.push('/patient/register')}
                    className="rounded-lg cursor-pointer bg-[#0D6641] px-5 py-2 text-sm font-semibold text-white"
                  >
                    Sign Up
                  </button>
                </>
              </>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            {hasToken ? (
              <div className="flex items-center gap-2">
                <span className="w-10 h-10 overflow-hidden">
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt="user"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gray-500 flex items-center justify-center text-white font-semibold">
                      {patientProfileData?.firstName?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </span>

                <div
                  className="flex cursor-pointer flex-col gap-1"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span className="h-0.5 w-5.5 bg-[#0D6641]" />
                  <span className="h-0.5 w-5.5 bg-[#0D6641]" />
                  <span className="h-0.5 w-5.5 bg-[#0D6641]" />
                </div>
              </div>
            ) : (
              <>
                <button
                  onClick={() => router.push('/patient/login')}
                  className="cursor-pointer rounded-lg border border-[#0D6641] px-4 py-2 text-sm text-[#0D6641]"
                >
                  Login
                </button>

                <div
                  className="flex cursor-pointer flex-col gap-1"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span className="h-0.5 w-5.5 bg-[#0D6641]" />
                  <span className="h-0.5 w-5.5 bg-[#0D6641]" />
                  <span className="h-0.5 w-5.5 bg-[#0D6641]" />
                </div>
              </>
            )}
          </div>
        )}
      </nav>

      {/* MOBILE MENU */}
      {isMobile && isMobileMenuOpen && (
        <div className="absolute top-18 w-full bg-white p-4 shadow-lg">
          {[...menuItems, ...offers].map((item, i) => (
            <div key={i}>
              <Link
                href={item.link}
                className="block border-b py-3 text-sm text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>

              {item.submenu &&
                item.submenu.map((sub, idx) => (
                  <Link
                    key={idx}
                    href={sub.link}
                    className="block pl-5 py-2 text-sm text-gray-700 hover:bg-slate-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {sub.title}
                  </Link>
                ))}
            </div>
          ))}

          <button className="mt-4 cursor-pointer w-full rounded-lg bg-[#0D6641] py-2 text-sm font-semibold text-white">
            Sign Up
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
