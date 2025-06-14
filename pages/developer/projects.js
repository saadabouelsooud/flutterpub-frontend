import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';
import {
  CheckCircleIcon,
  BoltIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/solid';
import { useAuth } from '../../lib/AuthContext';
import DeveloperSidebar from '../../components/DeveloperSidebar';

export default function MatchedProjects() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.role !== 'developer')) {
      router.replace('/');
    }
  }, [user, loading, router]);

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
      <DeveloperSidebar active="projects" />
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

