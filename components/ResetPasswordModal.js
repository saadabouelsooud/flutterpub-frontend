'use client';
import React, { useState } from 'react';
import { auth } from '../lib/firebaseClient';

export default function ResetPasswordModal({ onBack, onClose }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleReset = async () => {
    setMessage('');
    if (!email) return;
    try {
      const { sendPasswordResetEmail } = await import('firebase/auth');
      await sendPasswordResetEmail(auth, email);
      setMessage('Check your email for the reset link.');
    } catch (err) {
      setMessage('Unable to send reset link.');
    }
  };

  return (
    <div
      onClick={handleBackdrop}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-[90%] md:w-[420px]">
        <h2 className="text-2xl font-bold text-center text-gray-900">Reset Password</h2>
        <p className="text-center text-gray-500 mt-2">
          Enter your email and we’ll send you a link to reset your password
        </p>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 mt-6"
        />
        <button
          onClick={handleReset}
          className="w-full bg-[#6c63ff] text-white font-semibold py-3 rounded-xl mt-6 hover:bg-[#5a52e6]"
        >
          Send Reset Link
        </button>
        {message && (
          <p className="text-center text-sm text-gray-600 mt-2">{message}</p>
        )}
        <button
          onClick={onBack}
          className="w-full mt-4 py-3 border border-gray-300 text-gray-600 font-medium rounded-xl bg-white hover:bg-gray-50"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
