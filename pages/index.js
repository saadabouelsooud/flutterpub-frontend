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
      <main className="scroll-smooth">
        <section className="min-h-screen flex items--start pt-20 bg-gradient-to-br from-[#6666f2] to-[#885df5]">
          <div className="flex flex-col md:flex-row justify-start items-start max-w-7xl mx-auto gap-28">
            <div className="text-white space-y-4 text-center md:text-left flex-1">
              <span className="inline-flex items-center text-xs font-semibold text-white bg-gradient-to-r from-[#8584f4] to-[#8f82f6] px-4 py-1 rounded-full w-full">
                <span className="mr-2 text-sm">☆</span>
                AI-Powered Flutter Development
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold">
                <span className="block">Launch Your App</span>
                <span className="block">With AI-Powered</span>
                <span className="block">Flutter Templates</span>
              </h1>
              <p className="text-lg max-w-xl mx-auto md:mx-0">
                Transform your business idea into a fully functional Flutter app with our AI-powered template recommendations, customization tools, and developer network.</p>
              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-12 py-4 text-base font-bold rounded-lg bg-white text-[#6466f2] hover:bg-purple-50"
                >
                  Start with your idea<span className="ml-2">→</span>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-8 py-2 text-base font-bold text-white rounded-lg hover:bg-white/10"
                >
                  See how it works
                </a>
              </div>
            </div>
            <div className="flex-1 mt-6 md:mt-2 overflow-hidden relative border-4 border-[#9380f7] rounded-lg">
              <Image
                src="/images/hero.avif"
                alt="Laptop with phone"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-[-40px] right-[25%] w-[250px] h-[180px] bg-[#8054FF]/30 rounded-[60px] blur-2xl z-[-1]" />
            </div>
          </div>
        </section>

        {/* AI-Powered Flutter Templates Section */}
        <section className="min-h-screen snap-start flex flex-col justify-center items-center text-center px-6 bg-[#845ef5] text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-5xl font-bold">Build Your Flutter App Faster with AI</h2>
            <p className="text-xl">
              FlutterPup combines AI-powered templates with expert developers to help you build beautiful, high-performance Flutter applications in record time
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
              <a
                href="#"
                className="px-6 py-3 text-base font-semibold rounded-lg bg-white text-[#6466f1] hover:bg-purple-50"
              >
                Get Started
              </a>
              <a
                href="#"
                className="px-6 py-3 text-base font-semibold border border-white text-white rounded-lg hover:bg-white/10"
              >
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
              <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-start text-left transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 aspect-square">
                <svg
                  className="w-12 h-12 mb-4 stroke-[#6466f1]"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="9" y="2" width="6" height="2" />
                  <rect x="7" y="4" width="10" height="8" rx="2" />
                  <circle cx="10" cy="8" r="1" />
                  <circle cx="14" cy="8" r="1" />
                  <path d="M9 14v4h6v-4" />
                </svg>
                <h3 className="font-bold text-lg mb-2">AI-Powered Template Selection</h3>
                <p className="text-gray-600 text-lg">Our AI analyzes your requirements and suggests the perfect Flutter templates to kickstart your project...</p>
              </div>
              <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-start text-left transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 aspect-square">
                <svg
                  className="w-12 h-12 mb-4 stroke-[#6466f1]"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.5 2.5l2 2a2 2 0 010 2.8l-9 9a3 3 0 01-1.3.76l-3.7 1.03 1.03-3.7c.1-.5.3-.9.76-1.3l9-9a2 2 0 012.8 0z" />
                  <path d="M5 18h4v4H5z" />
                </svg>
                <h3 className="font-bold text-lg mb-2">Customization Made Easy</h3>
                <p className="text-gray-600 text-lg">Easily customize your Flutter app with our intuitive interface...</p>
              </div>
              <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-start text-left transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 aspect-square">
                <svg
                  className="w-12 h-12 mb-4 stroke-[#6466f1]"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 20v-2a4 4 0 00-3-3.87M7 20v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z" />
                  <path d="M20 20v-2a4 4 0 00-3-3.87" />
                </svg>
                <h3 className="font-bold text-lg mb-2">Expert Flutter Developers</h3>
                <p className="text-gray-600 text-lg">Connect with our network of vetted Flutter developers...</p>
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
                <h3 className="text-xl font-semibold text-black mb-2">Basic</h3>
                <p className="text-4xl font-extrabold text-[#6466f1] mb-2">$499</p>
                <p className="mb-4 text-gray-600">Perfect for simple apps and MVPs</p>
                <ul className="text-gray-600 flex-1 space-y-2 mb-6 text-left text-lg">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    5 AI-generated templates
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Basic customization
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    30 days support
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Export to Flutter
                  </li>
                </ul>
                <a
                  href="#"
                  className="mt-auto px-6 py-2 text-sm font-semibold rounded-lg bg-[#6466f1] text-white hover:bg-[#6466f1]/90"
                >
                  Get Started
                </a>
              </div>

              {/* Professional */}
              <div className="bg-white rounded-lg shadow p-6 flex flex-col ring-2 ring-[#6466f1] relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6466f1] text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Most Popular
                </span>
                <h3 className="mt-3 text-xl font-semibold text-black mb-2">Professional</h3>
                <p className="text-4xl font-extrabold text-[#6466f1] mb-2">$1,499</p>
                <p className="mb-4 text-gray-600">For businesses with specific requirements</p>
                <ul className="text-gray-600 flex-1 space-y-2 mb-6 text-left text-lg">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    15 templates
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Advanced customization
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    90 days support
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Developer assistance (10h)
                  </li>
                </ul>
                <a
                  href="#"
                  className="mt-auto px-6 py-2 text-sm font-semibold rounded-lg bg-[#6466f1] text-white hover:bg-[#6466f1]/90"
                >
                  Get Started
                </a>
              </div>

              {/* Enterprise */}
              <div className="bg-white rounded-lg shadow p-6 flex flex-col">
                <h3 className="text-xl font-semibold text-black mb-2">Enterprise</h3>
                <p className="text-4xl font-extrabold text-[#6466f1] mb-2">Custom</p>
                <p className="mb-4 text-gray-600">For large-scale and complex applications</p>
                <ul className="text-gray-600 flex-1 space-y-2 mb-6 text-left text-lg">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Unlimited templates
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Full customization
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    1-year support
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Dedicated dev team
                  </li>
                </ul>
                <a
                  href="#"
                  className="mt-auto px-6 py-2 text-sm font-semibold rounded-lg bg-[#6466f1] text-white hover:bg-[#6466f1]/90"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <FAQ />

        <Footer />
      </main>
    </>
  );
}
