import Head from 'next/head';
import Navbar from '../components/Navbar';
import Image from 'next/image';


export default function Home() {
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
            <a href="#" className="text-purple-700 font-semibold hover:underline">
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
    </>
  );
}
