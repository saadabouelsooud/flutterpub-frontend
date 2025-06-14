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
  CpuChipIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  PlusIcon,
  ArrowRightOnRectangleIcon,
  SwatchIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

interface Doer {
  id: number;
  title: string;
  desc: string;
  used: number;
  rating: number;
  tag: 'UI' | 'Content' | 'Code';
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  color: string;
}

const doers: Doer[] = [
  {
    id: 1,
    title: 'UI Reskin',
    desc: "Automatically transform your app’s UI with custom colors, fonts, and styles",
    used: 24,
    rating: 4.8,
    tag: 'UI',
    icon: SwatchIcon,
    color: 'text-blue-500 bg-blue-500/10',
  },
  {
    id: 2,
    title: 'Metadata Generator',
    desc: 'Generate app store descriptions, keywords, and screenshots automatically',
    used: 18,
    rating: 4.6,
    tag: 'Content',
    icon: DocumentTextIcon,
    color: 'text-green-500 bg-green-500/10',
  },
  {
    id: 3,
    title: 'Debug Assistant',
    desc: 'Identify and fix common Flutter errors and performance issues',
    used: 12,
    rating: 4.5,
    tag: 'Code',
    icon: WrenchScrewdriverIcon,
    color: 'text-yellow-500 bg-yellow-500/10',
  },
  {
    id: 4,
    title: 'Deployment Helper',
    desc: 'Automate final build & app store upload steps',
    used: 10,
    rating: 4.7,
    tag: 'Code',
    icon: CloudArrowUpIcon,
    color: 'text-red-500 bg-red-500/10',
  },
];

const DoerCard = ({ doer }: { doer: Doer }) => {
  const Icon = doer.icon;
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <div className={`rounded-full p-2 ${doer.color}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{doer.title}</h3>
          <p className="text-sm text-gray-500">{doer.desc}</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
        <span>Used {doer.used} times</span>
        <span className="text-yellow-500 font-medium flex items-center gap-1">
          <StarIcon className="w-4 h-4" />
          {doer.rating}
        </span>
      </div>
    </div>
  );
};

export default function AIDoers() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filter, setFilter] = useState<'All' | 'UI' | 'Content' | 'Code'>('All');

  useEffect(() => {
    if (!loading && (!user || user.role !== 'businessman')) {
      router.replace('/');
    }
  }, [user, loading, router]);

  const NavItem = ({ active, Icon, children, ...props }: any) => (
    <button
      className={`flex items-center gap-3 w-full px-4 py-2 rounded-md hover:bg-white/10 ${active ? 'bg-white/20 font-semibold' : ''}`}
      {...props}
    >
      <Icon className="w-5 h-5" />
      {children}
    </button>
  );

  const filters = ['All', 'UI', 'Content', 'Code'] as const;
  const filtered =
    filter === 'All' ? doers : doers.filter((d) => d.tag === filter);

  return (
    <div className="flex h-screen font-sans">
      {/* Mobile hamburger */}
      <button className="sm:hidden p-2" onClick={() => setSidebarOpen(true)}>
        <Bars3Icon className="w-6 h-6 text-gray-700" />
      </button>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 shrink-0 bg-[#7064F0] text-white flex flex-col justify-between transform transition-transform duration-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:static`}
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
            <NavItem Icon={HomeIcon} onClick={() => router.push('/business/dashboard')}>Overview</NavItem>
            <NavItem Icon={FolderIcon} onClick={() => router.push('/business/projects')}>Projects</NavItem>
            <NavItem active Icon={CpuChipIcon} onClick={() => router.push('/business/AIDoers')}>
              AI Doers
            </NavItem>
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
            <h1 className="text-xl font-semibold">AI Doers</h1>
            <p className="text-sm text-gray-500">AI-powered tools to build your app</p>
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
          <section>
            <h2 className="text-lg font-semibold">AI Doers</h2>
            <p className="text-sm text-gray-500 mb-2">AI-powered tools to help build your Flutter app</p>
            <div className="flex gap-2 flex-wrap">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${filter === f ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((d) => (
              <DoerCard key={d.id} doer={d} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
