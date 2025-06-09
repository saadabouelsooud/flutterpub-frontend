import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <span className="font-bold text-gray-900">FlutterPup</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">How It Works</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              className="px-4 py-2 rounded border border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              Login
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
