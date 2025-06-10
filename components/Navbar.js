import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-8 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-gray-800">
        <div className="flex items-center gap-2 font-bold">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.062 6.304a1 1 0 00.95.69h6.627c.969 0 1.371 1.24.588 1.81l-5.367 3.898a1 1 0 00-.364 1.118l2.062 6.305c.3.921-.755 1.688-1.538 1.118l-5.367-3.898a1 1 0 00-1.176 0l-5.367 3.898c-.783.57-1.838-.197-1.539-1.118l2.062-6.305a1 1 0 00-.364-1.118L2.391 11.73c-.783-.57-.38-1.81.588-1.81h6.627a1 1 0 00.95-.69l2.062-6.304z"
            />
          </svg>
          <span className="text-2xl">FlutterPup</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#how-it-works" className="text-[#4b5563] hover:text-[#6466f1] font-semibold">
            How It Works
          </a>
          <a href="#pricing" className="text-[#4b5563] hover:text-[#6466f1] font-semibold">
            Pricing
          </a>
          <a href="#faq" className="text-[#4b5563] hover:text-[#6466f1] font-semibold">
            FAQ
          </a>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="border border-[#6466f1] text-[#6466f1] rounded-md px-4 py-2 text-sm font-bold hover:bg-purple-100"
            >
              Login
            </a>
            <button className="bg-[#6466f1] text-white rounded-md px-4 py-2 hover:bg-purple-700 text-sm font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
