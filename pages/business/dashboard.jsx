import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAuth } from '../../lib/AuthContext';
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ChevronDownIcon,
  HomeIcon,
  FolderIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  CpuChipIcon,
  PlusIcon,
  CodeBracketIcon,
  CalendarDaysIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

export default function BusinessDashboard() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && (!user || user.role !== 'businessman')) {
      router.replace('/');
    }
  }, [user, loading, router]);

  const NavItem = ({ active, Icon, children, ...props }) => (
    <button
      className={`flex items-center gap-3 w-full px-4 py-2 rounded-md hover:bg-white/10 ${active ? 'bg-white/20 font-semibold' : ''}`}
      {...props}
    >
      <Icon className="w-5 h-5" />
      {children}
    </button>
  );

  const StatCard = ({ label, value }) => (
    <div className="bg-white rounded-xl shadow-md p-5">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );

  const RecentProjectItem = ({ title, template, status, date }) => (
    <div className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{template}</p>
      </div>
      <div className="text-right space-y-1">
        <span
          className={`inline-block text-xs px-2 py-1 rounded-full ${
            status === 'In Progress'
              ? 'bg-yellow-100 text-yellow-700'
              : status === 'Pending'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-green-100 text-green-700'
          }`}
        >
          {status}
        </span>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </div>
  );

  const QuickAction = ({ Icon, children }) => (
    <button className="flex flex-col items-center justify-center gap-2 border rounded-lg p-4 hover:bg-gray-50">
      <Icon className="w-6 h-6 text-[#7064F0]" />
      <span className="text-sm font-medium">{children}</span>
    </button>
  );

  return (
    <div className="flex h-screen font-sans">
      {/* Mobile hamburger */}
      <button className="sm:hidden p-2" onClick={() => setSidebarOpen(true)}>
        <Bars3Icon className="w-6 h-6 text-gray-700" />
      </button>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 shrink-0 bg-[#7064F0] text-white flex flex-col justify-between transform transition-transform duration-200 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 sm:static`}
      >
        <div>
          <div className="flex items-center justify-between px-4 py-5 sm:justify-center">
            <div className="flex items-center gap-2 font-bold text-lg">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.062 6.304a1 1 0 00.95.69h6.627c.969 0 1.371 1.24.588 1.81l-5.367 3.898a1 1 0 00-.364 1.118l2.062 6.305c.3.921-.755 1.688-1.538 1.118l-5.367-3.898a1 1 0 00-1.176 0l-5.367 3.898c-.783.57-1.838-.197-1.539-1.118l2.062-6.305a1 1 0 00-.364-1.118L2.391 11.73c-.783-.57-.38-1.81.588-1.81h6.627a1 1 0 00.95-.69l2.062-6.304z" />
              </svg>
              FlutterPup AI
            </div>
            <button className="sm:hidden" onClick={() => setSidebarOpen(false)}>
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <nav className="mt-6 px-4 space-y-1">
            <NavItem
              active
              Icon={HomeIcon}
              onClick={() => router.push('/business/dashboard')}
            >
              Overview
            </NavItem>
            <NavItem
              Icon={FolderIcon}
              onClick={() => router.push('/business/projects')}
            >
              Projects
            </NavItem>
            <NavItem Icon={CpuChipIcon}>AI Doers</NavItem>
            <NavItem Icon={UserGroupIcon}>Developers</NavItem>
            <NavItem Icon={Cog6ToothIcon}>Settings</NavItem>
          </nav>
        </div>
        <div className="p-4 space-y-3">
          <button className="w-full flex items-center justify-center gap-2 bg-white text-[#7064F0] font-semibold rounded-md py-2 hover:bg-gray-100">
            <PlusIcon className="w-5 h-5" />
            Start New Project
          </button>
          <button
            onClick={signOut}
            className="w-full border border-white rounded-full px-4 py-2 flex items-center justify-center gap-2 text-white"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <header className="bg-white border-b p-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Dashboard Overview</h1>
            <p className="text-sm text-gray-500">Welcome to your FlutterPup AI dashboard</p>
          </div>
          <div className="flex items-center gap-4">
            <BellIcon className="w-6 h-6 text-gray-500" />
            <div className="flex items-center gap-2">
              <Image src="/images/hero.avif" alt="Avatar" width={32} height={32} className="rounded-full" />
              <span className="font-medium text-gray-700">John Smith</span>
              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 space-y-6 bg-gray-50 overflow-y-auto">
          {/* Stats summary */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Total Projects" value="2" />
            <StatCard label="Active Projects" value="1" />
            <StatCard label="Completed Projects" value="0" />
            <StatCard label="Total Spent" value="$1250" />
          </section>

          {/* Recent projects */}
          <section className="bg-white rounded-xl shadow-md p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-lg">Recent Projects</h2>
              <button className="text-sm text-blue-600 hover:underline">View All</button>
            </div>
            <div className="divide-y">
              <RecentProjectItem
                title="E-commerce App"
                template="Shop Template"
                status="In Progress"
                date="Sep 20, 2023"
              />
              <RecentProjectItem
                title="Restaurant Booking"
                template="Booking Template"
                status="Pending"
                date="Sep 12, 2023"
              />
            </div>
          </section>

          {/* Quick actions */}
          <section className="bg-white rounded-xl shadow-md p-5">
            <h2 className="font-semibold text-lg mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <QuickAction Icon={PlusIcon}>Start New Project</QuickAction>
              <QuickAction Icon={CodeBracketIcon}>Find Developer</QuickAction>
              <QuickAction Icon={CalendarDaysIcon}>AI Doers</QuickAction>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
