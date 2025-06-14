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
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const Badge = ({ status }: { status: string }) => {
  const styles =
    status === 'In Progress'
      ? 'bg-blue-100 text-blue-700'
      : 'bg-yellow-100 text-yellow-700';
  return (
    <span className={`px-2 py-1 text-xs rounded-full font-medium ${styles}`}>{status}</span>
  );
};

const ProgressBar = ({ value }: { value: number }) => (
  <div className="w-full bg-gray-200 rounded h-2 overflow-hidden">
    <div className="h-full bg-blue-500" style={{ width: `${value}%` }} />
  </div>
);

interface Project {
  id: number;
  name: string;
  status: 'In Progress' | 'Pending';
  progress: number;
  template: string;
  doers: string[];
  developer?: string;
  updatedAt: string;
}

const ProjectRow = ({ project }: { project: Project }) => (
  <tr className="border-b last:border-b-0">
    <td className="px-4 py-3 whitespace-nowrap font-medium">{project.name}</td>
    <td className="px-4 py-3"><Badge status={project.status} /></td>
    <td className="px-4 py-3 w-40"><ProgressBar value={project.progress} /></td>
    <td className="px-4 py-3 whitespace-nowrap">{project.template}</td>
    <td className="px-4 py-3">
      <div className="flex flex-wrap gap-1">
        {project.doers.map((d) => (
          <span
            key={d}
            className="bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full text-xs font-medium"
          >
            {d}
          </span>
        ))}
      </div>
    </td>
    <td className="px-4 py-3 whitespace-nowrap">
      {project.developer || <span className="text-gray-500">Not assigned</span>}
    </td>
    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
      {project.updatedAt}
    </td>
  </tr>
);

export default function Projects() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tab, setTab] = useState('All');
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!loading && (!user || user.role !== 'businessman')) {
      router.replace('/');
    }
  }, [user, loading, router]);

  const projects: Project[] = [
    {
      id: 1,
      name: 'E-commerce App',
      status: 'In Progress',
      progress: 60,
      template: 'Shop Template',
      doers: ['UI Designer', 'Auth'],
      developer: 'Jane Developer',
      updatedAt: 'Jun 20, 2024',
    },
    {
      id: 2,
      name: 'Restaurant Booking',
      status: 'Pending',
      progress: 20,
      template: 'Booking Template',
      doers: ['Reservations', 'Maps'],
      developer: '',
      updatedAt: 'Jun 18, 2024',
    },
    {
      id: 3,
      name: 'Blog App',
      status: 'In Progress',
      progress: 80,
      template: 'Blog Template',
      doers: ['CMS', 'Notifications'],
      developer: 'John Developer',
      updatedAt: 'Jun 15, 2024',
    },
  ];

  const filtered = projects.filter((p) => {
    const matchesTab =
      tab === 'All' ||
      (tab === 'In Progress' && p.status === 'In Progress') ||
      (tab === 'Pending' && p.status === 'Pending');
    const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
    return matchesTab && matchesQuery;
  });

  const NavItem = ({ active, Icon, children, ...props }: any) => (
    <button
      className={`flex items-center gap-3 w-full px-4 py-2 rounded-md hover:bg-white/10 ${
        active ? 'bg-white/20 font-semibold' : ''
      }`}
      {...props}
    >
      <Icon className="w-5 h-5" />
      {children}
    </button>
  );

  const TabButton = ({ label }: { label: string }) => (
    <button
      onClick={() => setTab(label)}
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        tab === label ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
      }`}
    >
      {label}
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
        className={`fixed inset-y-0 left-0 z-40 w-64 shrink-0 bg-blue-500 text-white flex flex-col justify-between transform transition-transform duration-200 ${
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
              Icon={HomeIcon}
              onClick={() => router.push('/business/dashboard')}
            >
              Overview
            </NavItem>
            <NavItem
              active
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
        <div className="p-4">
          <button className="w-full flex items-center justify-center gap-2 bg-white text-blue-500 font-semibold rounded-md py-2 hover:bg-gray-100">
            <PlusIcon className="w-5 h-5" />
            Start New Project
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <header className="bg-white border-b p-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">My Projects</h1>
            <p className="text-sm text-gray-500">Manage your Flutter app projects</p>
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative flex-1 max-w-xs">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search projects"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md">
              <PlusIcon className="w-5 h-5" />
              New Project
            </button>
          </div>
          <div className="flex gap-2">
            {['All', 'In Progress', 'Pending'].map((label) => (
              <TabButton key={label} label={label} />
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="px-4 py-3 font-medium">Project Name</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Progress</th>
                  <th className="px-4 py-3 font-medium">Template</th>
                  <th className="px-4 py-3 font-medium">AI Doers</th>
                  <th className="px-4 py-3 font-medium">Developer</th>
                  <th className="px-4 py-3 font-medium">Last Update</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <ProjectRow key={p.id} project={p} />
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

