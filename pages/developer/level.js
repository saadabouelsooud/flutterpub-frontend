import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  RocketLaunchIcon,
  TrophyIcon,
  BriefcaseIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  Bars3Icon,
  XMarkIcon,
  ShareIcon,
  CodeBracketIcon,
  BoltIcon,
  BugAntIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import { useAuth } from '../../lib/AuthContext';

export default function MyLevel() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && (!user || user.role !== 'developer')) {
      router.replace('/');
    }
  }, [user, loading, router]);

  const NavItem = ({ active, Icon, children, ...props }) => (
    <button
      className={`flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-white/10 ${active ? 'bg-white/10 font-semibold border-l-4 border-white' : ''}`}
      {...props}
    >
      <Icon className="w-5 h-5" />
      {children}
    </button>
  );

  const Badge = ({ color, Icon, label }) => (
    <div className="flex flex-col items-center text-sm font-semibold mr-4 mb-4">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${color} text-white mb-2`}>
        <Icon className="w-8 h-8" />
      </div>
      {label}
    </div>
  );

  return (
    <div className="flex h-screen font-sans">
      {/* Mobile hamburger */}
      <button
        className="sm:hidden p-2 text-gray-700"
        onClick={() => setSidebarOpen(true)}
      >
        <Bars3Icon className="w-6 h-6" />
      </button>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-[280px] shrink-0 bg-[#7064F0] text-white flex flex-col justify-between transform transition-transform duration-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:static`}
      >
        <div>
          <div className="flex justify-end sm:hidden p-2">
            <button onClick={() => setSidebarOpen(false)}>
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
            <NavItem
              Icon={RocketLaunchIcon}
              onClick={() => router.push('/developer/dashboard')}
            >
              Missions
            </NavItem>
            <NavItem
              active
              Icon={TrophyIcon}
              onClick={() => router.push('/developer/level')}
            >
              My Level
            </NavItem>
            <NavItem
              Icon={BriefcaseIcon}
              onClick={() => router.push('/developer/projects')}
            >
              Matched Projects
            </NavItem>
          </nav>
        </div>
        <div className="p-4 text-center">
          <p className="text-sm mb-2">Need help with Flutter?</p>
          <button className="w-full border border-white rounded-full px-4 py-2 flex items-center justify-center gap-2">
            <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
            Contact Support
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">My Level & Badges</h1>
          <button className="flex items-center gap-2 bg-[#7064F0] text-white rounded-full px-4 py-2 text-sm">
            <ShareIcon className="w-5 h-5" />
            Share Progress
          </button>
        </div>

        {/* Level card */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg">Developer Level</h2>
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
              1
            </div>
          </div>
          <div className="w-full max-w-lg bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
            <div className="bg-blue-500 h-full w-0" />
          </div>
          <div className="text-right text-sm text-gray-600 mb-6">0 / 100 XP</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-violet-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold mb-1">0</div>
              <div className="text-sm">Total XP</div>
            </div>
            <div className="bg-violet-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold mb-1">0</div>
              <div className="text-sm">Missions</div>
            </div>
            <div className="bg-violet-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold mb-1">0</div>
              <div className="text-sm">Badges</div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div>
          <h2 className="font-bold text-xl mb-4">Earned Badges</h2>
          <div className="flex flex-wrap sm:grid sm:grid-cols-3 gap-4 overflow-x-auto pb-4">
            <Badge color="bg-blue-500" Icon={CodeBracketIcon} label="Code Master" />
            <Badge color="bg-red-500" Icon={RocketLaunchIcon} label="Fast Learner" />
            <Badge color="bg-purple-500" Icon={BoltIcon} label="UI Wizard" />
            <Badge color="bg-orange-500" Icon={BugAntIcon} label="Bug Hunter" />
            <Badge color="bg-green-500" Icon={TrophyIcon} label="Top Performer" />
            <Badge color="bg-blue-400" Icon={UserGroupIcon} label="Team Player" />
          </div>
        </div>
      </main>
    </div>
  );
}
