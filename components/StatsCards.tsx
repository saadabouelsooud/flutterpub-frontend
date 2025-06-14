import React from 'react';
import {
  FolderIcon,
  PlayCircleIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

interface Stat {
  label: string;
  value: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  bg: string;
  color: string;
  tooltip?: string;
}

const stats: Stat[] = [
  {
    label: 'Total Projects',
    value: '2',
    icon: FolderIcon,
    bg: 'bg-blue-100',
    color: 'text-blue-500',
    tooltip: 'Includes archived projects',
  },
  {
    label: 'Active Projects',
    value: '1',
    icon: PlayCircleIcon,
    bg: 'bg-green-100',
    color: 'text-green-500',
    tooltip: 'Projects currently in progress',
  },
  {
    label: 'Completed Projects',
    value: '0',
    icon: CheckCircleIcon,
    bg: 'bg-emerald-100',
    color: 'text-emerald-500',
    tooltip: 'Projects marked as done',
  },
  {
    label: 'Total Spent',
    value: '$1250',
    icon: CurrencyDollarIcon,
    bg: 'bg-red-100',
    color: 'text-red-500',
    tooltip: 'Total budget used',
  },
];

const StatCard = ({ icon: Icon, bg, color, value, label, tooltip }: Stat) => (
  <div
    className="bg-white rounded-xl shadow-md p-5 flex items-start gap-4 hover:scale-105 transition-transform duration-200"
    title={tooltip}
  >
    <div className={`rounded-lg p-3 bg-opacity-50 ${bg}`}>
      <Icon className={`w-6 h-6 ${color}`} />
    </div>
    <div>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  </div>
);

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}

