import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';
import {
  ShareIcon,
  CodeBracketIcon,
  BoltIcon,
  BugAntIcon,
  RocketLaunchIcon,
  TrophyIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import DeveloperSidebar from '../../components/DeveloperSidebar';
import { useAuth } from '../../lib/AuthContext';

export default function MyLevel() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.role !== 'developer')) {
      router.replace('/');
    }
  }, [user, loading, router]);

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
      <DeveloperSidebar active="level" />

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
