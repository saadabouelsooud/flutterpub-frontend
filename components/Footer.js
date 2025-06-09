import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
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
      <div className="max-w-6xl mx-auto mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; 2023 FlutterPup. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://facebook.com/flutterpup" className="hover:text-white" aria-label="Facebook">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2h-3a5 5 0 00-5 5v3H8v4h2v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <a
            href="https://instagram.com/flutterpup"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M7.75 2C4.6 2 2 4.6 2 7.75v8.5C2 19.4 4.6 22 7.75 22h8.5c3.15 0 5.75-2.6 5.75-5.75v-8.5C22 4.6 19.4 2 16.25 2h-8.5zm0 1.5h8.5A4.26 4.26 0 0120.5 7.75v8.5a4.26 4.26 0 01-4.25 4.25h-8.5A4.26 4.26 0 013.5 16.25v-8.5A4.26 4.26 0 017.75 3.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.88a.88.88 0 100 1.75.88.88 0 000-1.75z" />
            </svg>
          </a>
          <a href="https://linkedin.com/company/flutterpup" className="hover:text-white" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
