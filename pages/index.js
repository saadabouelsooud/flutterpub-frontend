import Head from 'next/head';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
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
      <main className="scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen">
        <section className="min-h-screen snap-start flex flex-col md:flex-row items-center justify-center gap-12 px-6 pb-24 bg-gradient-to-r from-[#8054FF] to-[#A259FF] text-center overflow-hidden">
          <div className="flex-1 text-center text-white space-y-4">
            <span className="inline-block text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full">
              AI-Powered Flutter Development
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold">
              Launch Your App with AI-Powered Flutter Templates
            </h1>
            <p className="text-lg max-w-xl mx-auto md:mx-0">
              Build production-ready Flutter apps faster using our AI-driven templates and tools. Focus on your idea while we handle the scaffolding.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="#"
                className="px-6 py-2 text-sm font-semibold rounded-lg bg-white text-purple-600 hover:bg-purple-50"
              >
                Get Started
              </a>
              <a
                href="#how-it-works"
                className="px-6 py-2 text-sm font-semibold border border-white text-white rounded-lg hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <Image
              src="/images/hero.png"
              alt="Laptop with phone"
              width={400}
              height={200}
              className="rounded-lg shadow-lg w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* AI-Powered Flutter Templates Section */}
        <section className="min-h-screen snap-start flex flex-col justify-center items-center text-center px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Build Your Flutter App Faster with AI</h2>
            <p className="text-gray-600">
              Harness AI-powered templates to kickstart development and focus on building amazing features.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#" className="px-6 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700">
                Get Started
              </a>
              <a href="#" className="px-6 py-2 rounded-lg border border-purple-600 text-purple-600 font-semibold hover:bg-purple-50">
                Explore Templates
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          ref={howItWorksRef}
          className={`snap-start min-h-screen flex flex-col justify-center items-center px-6 bg-[#f6f8fc] transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded-xl aspect-square h-72 flex flex-col justify-center items-center">
              <div className="text-purple-500 w-8 h-8 mb-4 text-3xl">🤖</div>
              <h3 className="font-bold text-lg text-center mb-2">AI-Powered Template Selection</h3>
              <p className="text-center text-gray-600">Our AI analyzes your requirements and suggests the perfect Flutter templates to kickstart your project...</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl aspect-square h-72 flex flex-col justify-center items-center">
              <div className="text-purple-500 w-8 h-8 mb-4 text-3xl">🎨</div>
              <h3 className="font-bold text-lg text-center mb-2">Customization Made Easy</h3>
              <p className="text-center text-gray-600">Easily customize your Flutter app with our intuitive interface...</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl aspect-square h-72 flex flex-col justify-center items-center">
              <div className="text-purple-500 w-8 h-8 mb-4 text-3xl">👥</div>
              <h3 className="font-bold text-lg text-center mb-2">Expert Flutter Developers</h3>
              <p className="text-center text-gray-600">Connect with our network of vetted Flutter developers...</p>
            </div>
          </div>
        </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="snap-start min-h-screen flex flex-col justify-center px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-center text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 mb-12">Choose the plan that works best for your project needs</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="mt-auto px-6 py-2 text-sm font-semibold rounded-lg bg-purple-600 text-white hover:bg-purple-700"
              >
                Get Started
              </a>
            </div>

            {/* Professional */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col ring-2 ring-purple-500 relative">
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
                className="mt-auto px-6 py-2 text-sm font-semibold rounded-lg bg-purple-600 text-white hover:bg-purple-700"
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
                className="mt-auto px-6 py-2 text-sm font-semibold rounded-lg bg-purple-600 text-white hover:bg-purple-700"
              >
                Contact Us
              </a>
            </div>
          </div>
          </div>
        </section>

        <FAQ />

        <section className="min-h-screen snap-start flex flex-col justify-between items-center px-6 pb-24">
          <Footer />
        </section>
      </main>
    </>
  );
}
