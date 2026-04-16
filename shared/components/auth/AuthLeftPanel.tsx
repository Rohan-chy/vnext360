import Image from 'next/image';
import Link from 'next/link';

interface AuthLeftPanelProps {
  data: {
    title: string;
    desc: string;
  };
}

const AuthLeftPanel = ({ data }: AuthLeftPanelProps) => {
  return (
    <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center bg-gradient-to-br from-[#0D6641] to-[#0a4f33] text-white px-6 py-16 lg:py-0">
      <div className="max-w-md text-center space-y-6">
        <div className="flex justify-center">
          <Link href="/client">
            <Image
              src="/logo/VnextSolutions_logo.png"
              alt="VNext360 Logo"
              width={220}
              height={80}
              priority
              className="w-40 md:w-52 h-auto bg-white rounded-lg p-2"
            />
          </Link>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
          {data.title}
        </h1>

        <p className="text-green-100 text-sm sm:text-base md:text-lg">
          {data.desc}
        </p>
      </div>
    </div>
  );
};

export default AuthLeftPanel;
