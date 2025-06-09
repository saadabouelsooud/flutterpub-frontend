import Head from 'next/head';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-blue-100 to-white">
      <Head>
        <title>FlutterPup</title>
      </Head>
      <section className="w-full flex flex-col items-center justify-center py-24">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">
          Welcome to FlutterPup Starter
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
          Kickstart your next Flutter project with our modern, ready-to-use starter template. Build faster, launch sooner.
        </p>
        <a
          href="#"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold text-lg"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}
