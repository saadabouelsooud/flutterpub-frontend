import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';
import { useAuth } from '../../lib/AuthContext';
import { RocketLaunchIcon, TrophyIcon, BriefcaseIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';

export default function DeveloperDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.role !== 'developer')) {
      router.replace('/');
    }
  }, [user, loading, router]);

  return (
    <div className="flex h-screen font-sans">
      <aside className="w-[280px] shrink-0 bg-[#7064F0] text-white flex flex-col justify-between">
        <div>
          <div className="flex flex-col items-center py-6">
            <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden mb-3">
              <Image src="/images/hero.avif" alt="Profile" width={80} height={80} className="object-cover" />
            </div>
            <div className="font-bold">John Developer</div>
            <div className="text-sm opacity-80">Level 1</div>
          </div>
          <nav className="mt-6 px-4 space-y-1">
            <button className="flex items-center gap-3 w-full bg-white/10 rounded-md px-3 py-2 font-semibold">
              <RocketLaunchIcon className="w-5 h-5" />
              Missions
            </button>
            <button className="flex items-center gap-3 w-full hover:bg-white/10 rounded-md px-3 py-2">
              <TrophyIcon className="w-5 h-5" />
              My Level
            </button>
            <button className="flex items-center gap-3 w-full hover:bg-white/10 rounded-md px-3 py-2">
              <BriefcaseIcon className="w-5 h-5" />
              Matched Projects
            </button>
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
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Learning Missions</h1>
        <div className="flex gap-3 mb-6">
          <button className="rounded-full bg-violet-200 text-violet-700 px-4 py-1 font-semibold">All</button>
          <button className="rounded-full border border-violet-300 px-4 py-1 text-gray-700 hover:bg-violet-50">Theory</button>
          <button className="rounded-full border border-violet-300 px-4 py-1 text-gray-700 hover:bg-violet-50">Code</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow flex flex-col">
            <div className="relative h-40">
              <Image src="/images/hero.avif" alt="Mission" layout="fill" className="object-cover rounded-t-xl" />
              <div className="absolute top-2 left-2 flex gap-2">
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Level 1</span>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Theory</span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-bold text-lg mb-1">Flutter Basics</h3>
              <p className="text-sm text-gray-600 flex-grow">Learn the fundamentals of Flutter development</p>
              <div className="h-2 bg-gray-200 rounded-full mt-4 overflow-hidden">
                <div className="bg-green-500 h-full w-0" />
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm text-gray-500">2 Tasks</span>
                <button className="px-4 py-1 bg-green-500 text-white rounded">Start</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
