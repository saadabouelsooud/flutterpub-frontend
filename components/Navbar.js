import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 gap-4 text-white">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <span className="font-bold">FlutterPup</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex gap-6">
            <a href="#how-it-works" className="hover:text-purple-200">
              How It Works
            </a>
            <a href="#pricing" className="hover:text-purple-200">Pricing</a>
            <a href="#faq" className="hover:text-purple-200">FAQ</a>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              className="px-4 py-2 rounded border border-white text-white hover:bg-white/10"
            >
              Login
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded bg-white text-purple-700 hover:bg-purple-50"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
