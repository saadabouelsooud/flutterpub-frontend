import Head from 'next/head';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import FAQ from '../components/FAQ';
import { useEffect, useRef, useState } from 'react';


export default function Home() {
  const howItWorksRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = howItWorksRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>FlutterPup</title>
      </Head>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-purple-50 to-purple-200">
        <section className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
          <span className="inline-block text-xs font-semibold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
            AI-Powered Flutter Development
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Launch Your App with AI-Powered Flutter Templates
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Build production-ready Flutter apps faster using our AI-driven templates and tools. Focus on your idea while we handle the scaffolding.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#"
              className="px-8 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition font-semibold"
            >
              Start with your idea
            </a>
            <a href="#how-it-works" className="text-purple-700 font-semibold hover:underline">
              See how it works
            </a>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/images/hero.png"
            alt="Laptop with phone"
            width={400}
            height={200}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        </section>
      </div>
      {/* New centered section under hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-20 flex items-center justify-center px-4 text-center">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Build Your Flutter App Faster with AI
          </h2>
          <p className="text-white/90 text-lg">
            FlutterPup combines AI-powered templates with expert developers to help you build beautiful, high-performance Flutter applications in record time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3 bg-white text-purple-700 rounded-lg font-semibold shadow hover:bg-purple-50"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
        </section>

      {/* How It Works */}
      <div
        ref={howItWorksRef}
        className={`transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow text-center">
              <div className="text-5xl mb-4 text-purple-600">🤖</div>
              <h3 className="text-lg font-semibold text-purple-600 mb-2">
                AI-Powered Template Selection
              </h3>
              <p className="text-gray-600">
                Our AI analyzes your requirements and suggests the perfect Flutter templates to kickstart your project...
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow text-center">
              <div className="text-5xl mb-4 text-purple-600">🎨</div>
              <h3 className="text-lg font-semibold text-purple-600 mb-2">
                Customization Made Easy
              </h3>
              <p className="text-gray-600">
                Easily customize your Flutter app with our intuitive interface...
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow text-center">
              <div className="text-5xl mb-4 text-purple-600">👥</div>
              <h3 className="text-lg font-semibold text-purple-600 mb-2">
                Expert Flutter Developers
              </h3>
              <p className="text-gray-600">
                Connect with our network of vetted Flutter developers...
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-2 text-gray-600 mb-12">
            Choose the plan that works best for your project needs
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Basic */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Basic</h3>
              <p className="text-4xl font-extrabold text-purple-600 mb-2">$499</p>
              <p className="mb-4 text-gray-600">Perfect for simple apps and MVPs</p>
              <ul className="text-gray-600 flex-1 space-y-2 mb-6 text-left">
                <li>5 AI-generated templates</li>
                <li>Basic customization</li>
                <li>30 days support</li>
                <li>Export to Flutter</li>
              </ul>
              <a
                href="#"
                className="mt-auto px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700"
              >
                Get Started
              </a>
            </div>

            {/* Professional */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col border-2 border-purple-600 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Most Popular
              </span>
              <h3 className="mt-3 text-lg font-semibold text-purple-600 mb-2">Professional</h3>
              <p className="text-4xl font-extrabold text-purple-600 mb-2">$1,499</p>
              <p className="mb-4 text-gray-600">For businesses with specific requirements</p>
              <ul className="text-gray-600 flex-1 space-y-2 mb-6 text-left">
                <li>15 templates</li>
                <li>Advanced customization</li>
                <li>90 days support</li>
                <li>Developer assistance (10h)</li>
              </ul>
              <a
                href="#"
                className="mt-auto px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700"
              >
                Get Started
              </a>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Enterprise</h3>
              <p className="text-4xl font-extrabold text-purple-600 mb-2">Custom</p>
              <p className="mb-4 text-gray-600">For large-scale and complex applications</p>
              <ul className="text-gray-600 flex-1 space-y-2 mb-6 text-left">
                <li>Unlimited templates</li>
                <li>Full customization</li>
                <li>1-year support</li>
                <li>Dedicated dev team</li>
              </ul>
              <a
                href="#"
                className="mt-auto px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      </>
  );
}
