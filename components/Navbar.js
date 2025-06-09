import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-8 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-gray-800">
        <div className="flex items-center gap-2 font-bold">
          <span className="text-2xl">🚀</span>
          <span className="text-2xl">FlutterPup</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#how-it-works" className="text-gray-700 hover:text-purple-600">
            How It Works
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-purple-600">
            Pricing
          </a>
          <a href="#faq" className="text-gray-700 hover:text-purple-600">
            FAQ
          </a>
          <a
            href="#"
            className="border border-[#6466f1] text-[#6466f1] rounded-full px-4 py-2 text-sm font-bold hover:bg-purple-100"
          >
            Login
          </a>
          <button className="bg-[#6466f1] text-white rounded-full px-4 py-2 hover:bg-purple-700 text-sm ml-2 font-bold">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
