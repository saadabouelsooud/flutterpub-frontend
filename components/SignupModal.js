'use client';
import React, { useState } from 'react';
import { useAuth } from '../lib/AuthContext';

export default function SignupModal({ onClose, onSignIn, onRegistered }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const { signUp } = useAuth();

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    try {
      await signUp(email, password);
      onClose && onClose();
      onRegistered && onRegistered();
    } catch (err) {
      setError('Unable to create account');
    }
  };

  return (
    <div
      onClick={handleBackdrop}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 overflow-y-auto"
    >
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center">Create Account</h2>
        <p className="text-center text-gray-500 mt-1">
          Join FlutterPup and start building your app
        </p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-3"
          />
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-3"
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-3"
          />
          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-[#7064F0] hover:bg-[#5b4fe0] text-white rounded-md py-3 font-semibold"
          >
            Create Account
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{' '}
          <span
            onClick={onSignIn}
            className="text-[#7064F0] cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
