# FlutterPup Starter with Supabase

This is a starter repo for building your FlutterPup SaaS using Next.js,
Tailwind CSS, and Supabase.

## Local setup

1. Copy `.env.example` to `.env.local` and fill in your Supabase
   credentials.

   ```bash
   cp .env.example .env.local
   ```

   `.env.local` must define `NEXT_PUBLIC_SUPABASE_URL` and
   `NEXT_PUBLIC_SUPABASE_ANON_KEY` (or their Firebase equivalents once
   migrated).

2. Install dependencies and start the dev server:

   ```bash
   npm install
   npm run dev
   ```

