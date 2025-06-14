import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/AuthContext';

export default function LoginModal({ onClose, onForgot, onSignup }) {
  const { signIn, signInWithGoogle } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async () => {
    try {
      const u = await signIn(email, password);
      onClose && onClose();
      if (u?.role === 'developer') {
        router.push('/developer/dashboard');
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const handleGoogle = async () => {
    try {
      const u = await signInWithGoogle();
      onClose && onClose();
      if (u?.role === 'developer') {
        router.push('/developer/dashboard');
      }
    } catch (err) {
      setError('Google sign in failed');
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 w-full mt-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 w-full mt-4"
        />
        {error && (
          <p className="text-red-600 text-sm text-center mt-2">{error}</p>
        )}
        <button
          onClick={handleSubmit}
          className="w-full rounded-xl bg-[#6c63ff] text-white font-semibold py-3 mt-6 hover:bg-[#5b54d6]"
        >
          Sign In
        </button>
        <div className="flex items-center gap-4 text-gray-400 text-sm mt-6 mb-4">
          <hr className="flex-grow border-gray-300" />
          OR
          <hr className="flex-grow border-gray-300" />
        </div>
        <button
          onClick={handleGoogle}
          className="border border-gray-300 rounded-xl py-3 px-4 w-full flex items-center justify-center gap-3 font-semibold bg-white"
        >
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
