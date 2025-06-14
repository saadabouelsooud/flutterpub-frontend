import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import {
  RocketLaunchIcon,
  TrophyIcon,
  BriefcaseIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { useAuth } from '../lib/AuthContext';

export default function DeveloperSidebar({ active }) {
  const { signOut } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const NavButton = ({ page, Icon, children }) => (
    <button
      className={`flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-white/10 ${
        active === page ? 'bg-white/10 font-semibold border-l-4 border-white' : ''
      }`}
      onClick={() => {
        router.push(`/developer/${page}`);
        setOpen(false);
      }}
    >
      <Icon className="w-5 h-5" />
      {children}
    </button>
  );

  return (
    <>
      <button className="sm:hidden p-2 text-gray-700" onClick={() => setOpen(true)}>
        <Bars3Icon className="w-6 h-6" />
      </button>
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-[280px] shrink-0 bg-[#7064F0] text-white flex flex-col justify-between transform transition-transform duration-200 ${
          open ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 sm:static`}
      >
        <div>
          <div className="flex justify-end sm:hidden p-2">
            <button onClick={() => setOpen(false)}>
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center py-6">
            <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden mb-3">
              <Image src="/images/hero.avif" alt="Profile" width={80} height={80} className="object-cover" />
            </div>
            <div className="font-bold">John Developer</div>
            <div className="text-sm opacity-80">Level 1</div>
          </div>
          <nav className="mt-6 px-4 space-y-1">
            <NavButton page="dashboard" Icon={RocketLaunchIcon}>
              Missions
            </NavButton>
            <NavButton page="level" Icon={TrophyIcon}>
              My Level
            </NavButton>
            <NavButton page="projects" Icon={BriefcaseIcon}>
              Matched Projects
            </NavButton>
          </nav>
        </div>
        <div className="p-4 text-center">
          <p className="text-sm mb-2">Need help with Flutter?</p>
          <button className="w-full border border-white rounded-full px-4 py-2 flex items-center justify-center gap-2">
            <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
            Contact Support
          </button>
          <button
            onClick={signOut}
            className="w-full mt-3 border border-white rounded-full px-4 py-2 flex items-center justify-center gap-2"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}
