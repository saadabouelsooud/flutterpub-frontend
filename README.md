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

### Environment variables

Create a `.env.local` file using `.env.example` as a template. Each value is
available from your Firebase project's **Project settings** page under
**General > Your apps**.

| Variable | Purpose | Where to find it |
| --- | --- | --- |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | API key used to initialize Firebase in the browser | **Firebase console** &rarr; **Project settings** &rarr; **Web app** | 
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Auth domain for your project | Provided next to the API key in the Firebase console | 
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Unique identifier for your Firebase project | Project settings overview | 
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Cloud Storage bucket name | Project settings overview | 
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Sender ID for Cloud Messaging | Project settings under your Web app configuration | 
| `NEXT_PUBLIC_FIREBASE_APP_ID` | The Web app's App ID | Project settings under your Web app configuration |

