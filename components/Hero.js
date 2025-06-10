import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#8054FF] to-[#A259FF] text-white min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side */}
        <div className="text-center md:text-left max-w-xl w-full space-y-6">
          <span className="bg-white/10 text-white px-4 py-1 rounded-full inline-flex items-center gap-2 text-sm font-medium">
            <span className="opacity-80">★</span>
            AI-Powered Flutter Development
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Launch Your App with<br />AI-Powered Flutter<br />Templates
          </h1>
          <p className="text-lg text-white/80 max-w-xl mt-6 mx-auto md:mx-0">
            Build your next <strong>AI-powered Flutter app</strong> faster and connect with our expert developer network.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8 justify-center md:justify-start">
            <a
              href="#"
              className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:scale-105 transition"
            >
              Start with your idea<span className="ml-2">→</span>
            </a>
            <a href="#how-it-works" className="text-white font-semibold hover:underline text-base">
              See how it works
            </a>
          </div>
        </div>
        {/* Right side */}
        <div className="w-full md:w-1/2 relative rounded-2xl shadow-lg overflow-hidden bg-white p-1">
          <Image
            src="/images/hero.png"
            alt="FlutterPup screenshot"
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-auto"
          />
          <span className="absolute bottom-4 left-4 bg-black bg-opacity-80 p-2 rounded-full text-xl">
            🧠
          </span>
        </div>
      </div>
    </section>
  );
}
