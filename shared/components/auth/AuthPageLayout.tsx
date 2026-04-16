'use client';

import AuthLeftPanel from './AuthLeftPanel';

interface AuthPageLayoutProps {
  leftPanelData?: {
    title: string;
    desc: string;
  };
  children: React.ReactNode;
}

const AuthPageLayout = ({ leftPanelData, children }: AuthPageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
      {/* LEFT PANEL (hidden on small screens) */}
      {leftPanelData && <AuthLeftPanel data={leftPanelData} />}

      {/* RIGHT SECTION */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 py-12">
        {children}
      </div>
    </div>
  );
};

export default AuthPageLayout;
