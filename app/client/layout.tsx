'use client';
import Footer1 from '@/features/tenant/super-admin/page-builder/presentation/components/green/Footer1Green';
import Navbar from '@/shared/components/Navbar';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        fontFamily: "'Inter', sans-serif",
      }}
      className="min-h-screen"
    >
      {/* Header */}
      {/* <Header1 /> */}
      <Navbar />

      {/* Page Content */}
      <div>{children}</div>

      {/* Footer */}
      <Footer1 />
    </div>
  );
}
