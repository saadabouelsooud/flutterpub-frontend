import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-800">
        <div className="flex items-center gap-2 font-bold">
          <span className="text-xl text-purple-600">🚀</span>
          <span className="text-xl font-bold text-gray-900">FlutterPup</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#how-it-works" className="text-gray-700 hover:text-purple-600">How It Works</a>
          <a href="#pricing" className="text-gray-700 hover:text-purple-600">Pricing</a>
          <a href="#faq" className="text-gray-700 hover:text-purple-600">FAQ</a>
          <a
            href="#"
            className="px-4 py-2 border border-purple-500 text-purple-500 rounded-md hover:bg-purple-100 text-sm font-medium"
          >
            Login
          </a>
          <button className="bg-purple-600 text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-purple-700 ml-4 text-sm">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
