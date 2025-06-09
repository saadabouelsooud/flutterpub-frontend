import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between px-6 py-4 items-center text-gray-800">
        <div className="flex items-center gap-2 font-bold">
          <span className="text-2xl">🚀</span>
          <span>FlutterPup</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#how-it-works" className="text-gray-800 hover:text-purple-600">
            How It Works
          </a>
          <a href="#pricing" className="text-gray-800 hover:text-purple-600">
            Pricing
          </a>
          <a href="#faq" className="text-gray-800 hover:text-purple-600">
            FAQ
          </a>
          <a
            href="#"
            className="border border-purple-600 text-purple-600 rounded px-4 py-2 text-sm hover:bg-purple-100"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
