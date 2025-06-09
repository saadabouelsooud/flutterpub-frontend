import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-gray-700">
        <div className="flex items-center gap-2 font-bold">
          <span className="text-2xl">🚀</span>
          <span>FlutterPup</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#how-it-works" className="hover:text-purple-600">
            How It Works
          </a>
          <a href="#pricing" className="hover:text-purple-600">
            Pricing
          </a>
          <a href="#faq" className="hover:text-purple-600">
            FAQ
          </a>
          <a
            href="#"
            className="ml-2 px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
