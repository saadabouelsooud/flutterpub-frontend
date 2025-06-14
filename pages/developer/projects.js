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
  CheckCircleIcon,
  BoltIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/solid';
import { useAuth } from '../../lib/AuthContext';

export default function MatchedProjects() {
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
      className={`flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-white/10 ${
        active ? 'bg-[#3F51F5] font-semibold border-l-4 border-white' : ''
      }`}
      {...props}
    >
      <Icon className="w-5 h-5" />
      {children}
    </button>
  );

  const FilterButton = ({ active, children, ...props }) => (
    <button
      className={`rounded-full px-4 py-1 text-sm ${
        active
          ? 'bg-[#3F51F5] text-white'
          : 'border border-gray-300 text-gray-700'
      }`}
      {...props}
    >
      {children}
    </button>
  );

  const SkillTag = ({ children }) => (
    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
      {children}
    </span>
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
        className={`fixed inset-y-0 left-0 z-40 w-[280px] shrink-0 bg-[#7064F0] text-white flex flex-col justify-between transform transition-transform duration-200 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 sm:static`}
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
            <div className="text-sm text-violet-300">Level 1</div>
          </div>
          <nav className="mt-6 px-4 space-y-1">
            <NavItem Icon={RocketLaunchIcon} onClick={() => router.push('/developer/dashboard')}>Missions</NavItem>
            <NavItem Icon={TrophyIcon} onClick={() => router.push('/developer/level')}>My Level</NavItem>
            <NavItem active Icon={BriefcaseIcon} onClick={() => router.push('/developer/projects')}>Matched Projects</NavItem>
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
          <h1 className="text-2xl font-bold">Matched Projects</h1>
          <div className="flex gap-2">
            <FilterButton active>All</FilterButton>
            <FilterButton>Available</FilterButton>
            <FilterButton>Applied</FilterButton>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-lg">E-commerce App</h3>
              <span className="flex items-center gap-1 text-sm bg-green-100 text-green-600 px-2 py-1 rounded-full">
                <CheckCircleIcon className="w-4 h-4" />
                Available
              </span>
            </div>
            <p className="text-gray-600 mb-4">Build a fashion retail mobile app</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mb-4">
              <div>
                <span className="font-bold">$5000–$10000</span> Budget
              </div>
              <div>
                <span className="font-bold">2–3 months</span> Timeline
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <SkillTag>Flutter</SkillTag>
              <SkillTag>Firebase</SkillTag>
              <SkillTag>Payment Integration</SkillTag>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-orange-500 font-bold">
                <BoltIcon className="w-5 h-5" />
                85% Match
              </div>
              <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md">
                Offer to Help
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

