import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 px-6 md:px-20 py-12 border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-xl mb-2">FlutterPup</h3>
          <p>
            Building beautiful Flutter applications with AI-powered templates and expert developers.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Product</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Templates</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Resources</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-800 pt-6 flex justify-between items-center">
        <p className="text-sm">&copy; 2023 FlutterPup. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://facebook.com/flutterpup" target="_blank" rel="noopener noreferrer" className="w-5 h-5 text-gray-400 hover:text-white transition" aria-label="Facebook">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2h-3a5 5 0 00-5 5v3H8v4h2v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/flutterpup"
            target="_blank"
            rel="noopener noreferrer"
            className="w-5 h-5 text-gray-400 hover:text-white transition"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="3.5" />
              <circle cx="17.25" cy="6.88" r="0.88" />
            </svg>
          </a>
          <a href="https://linkedin.com/company/flutterpup" target="_blank" rel="noopener noreferrer" className="w-5 h-5 text-gray-400 hover:text-white transition" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
