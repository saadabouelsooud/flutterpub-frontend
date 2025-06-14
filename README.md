# FlutterPup Starter with Firebase

This is a starter repo for building your FlutterPup SaaS using Next.js,
Tailwind CSS, and Firebase.

## Local setup

1. Copy `.env.example` to `.env.local` and fill in your Firebase
   credentials.

   ```bash
   cp .env.example .env.local
   ```

   `.env.local` must define the `NEXT_PUBLIC_FIREBASE_*` variables from the
   example file.

2. Install dependencies and start the dev server:

   ```bash
   npm install
   npm run dev
   ```

