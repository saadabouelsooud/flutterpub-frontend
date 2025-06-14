import React from 'react';

export default function LoginModal({ onClose, onForgot, onSignup }) {
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdrop}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 overflow-y-auto"
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-[90%] md:w-[420px]">
        <h2 className="text-2xl font-bold text-center text-gray-900">Welcome Back</h2>
        <p className="text-center text-gray-500 mt-2">Sign in to your FlutterPup account</p>
        <input
          type="email"
          placeholder="Email address"
          className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 w-full mt-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 w-full mt-4"
        />
        <button className="w-full rounded-xl bg-[#6c63ff] text-white font-semibold py-3 mt-6 hover:bg-[#5b54d6]">
          Sign In
        </button>
        <div className="flex items-center gap-4 text-gray-400 text-sm mt-6 mb-4">
          <hr className="flex-grow border-gray-300" />
          OR
          <hr className="flex-grow border-gray-300" />
        </div>
        <button className="border border-gray-300 rounded-xl py-3 px-4 w-full flex items-center justify-center gap-3 font-semibold bg-white">
          <span className="text-xl">G</span>
          Continue with Google
        </button>
        <div
          className="text-[#6c63ff] text-sm text-center mt-4 underline cursor-pointer"
          onClick={onForgot}
        >
          Forgot Password?
        </div>
        <div className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onSignup();
            }}
            className="text-[#6c63ff] font-bold"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
