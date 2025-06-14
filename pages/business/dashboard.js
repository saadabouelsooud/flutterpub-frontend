import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../../lib/AuthContext';

export default function BusinessDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.role !== 'businessman')) {
      router.replace('/');
    }
  }, [user, loading, router]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Business Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
          <p className="text-gray-500">Your projects will be shown here.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">AI Tools</h2>
          <p className="text-gray-500">AI powered planning and analytics tools will appear here.</p>
        </div>
      </div>
    </div>
  );
}

