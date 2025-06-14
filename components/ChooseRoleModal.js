import React, { useState } from 'react';

export default function ChooseRoleModal({ onClose }) {
  const [selected, setSelected] = useState(null);

  const roles = [
    {
      id: 'businessman',
      title: 'Businessman',
      desc: 'I want to launch a Flutter app for my business',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-5 h-5"
        >
          <path d="M3 7h18v10H3z" />
          <path d="M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2" />
        </svg>
      ),
    },
    {
      id: 'developer',
      title: 'Developer',
      desc: "I'm a Flutter developer looking for clients",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-5 h-5"
        >
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      id: 'agency',
      title: 'Agency',
      desc: 'I manage multiple Flutter app projects for clients',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-5 h-5"
        >
          <path d="M3 21V8l9-6 9 6v13H3z" />
          <path d="M9 21V12h6v9" />
        </svg>
      ),
    },
  ];

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContinue = () => {
    console.log(selected);
    onClose && onClose(selected);
  };

  return (
    <div
      onClick={handleBackdrop}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4"
    >
      <div className="bg-white rounded-xl shadow-xl w-full max-w-xl p-6">
        <h2 className="text-2xl font-bold text-center">Choose Your Role</h2>
        <p className="text-gray-500 text-center mt-1">
          Choose the role that best describes you or select a card below
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {roles.map((role) => (
            <div
              key={role.id}
              onClick={() => setSelected(role.id)}
              className={`cursor-pointer bg-white rounded-lg border p-4 flex flex-col items-center text-center transition hover:shadow-md ${selected === role.id ? 'ring-2 ring-violet-500' : 'border-gray-200'}`}
            >
              <div className="bg-violet-100 text-violet-600 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                {role.icon}
              </div>
              <h3 className="font-bold">{role.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{role.desc}</p>
            </div>
          ))}
        </div>
        <button
          disabled={!selected}
          onClick={handleContinue}
          className={`mt-6 w-full py-3 rounded-md font-semibold text-white ${selected ? 'bg-[#7064F0] hover:bg-[#5b4fe0]' : 'bg-gray-300 cursor-not-allowed'}`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
