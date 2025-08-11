# DevFest Tacna 2025 - Setup Guide

A modern React application for DevFest Tacna 2025 with Firebase backend for volunteer management and admin dashboard.

## Features

- ✅ **Modern Design**: Built with Tailwind CSS v4 for a clean, professional look
- ✅ **Volunteer Registration**: Firebase Firestore integration for volunteer applications
- ✅ **Admin Dashboard**: Secure admin panel to manage volunteer applications
- ✅ **Speaker Applications**: External redirect to Google Forms or similar platform
- ✅ **Responsive Design**: Mobile-first approach with full responsive support
- ✅ **Real-time Data**: Live updates for volunteer applications
- ✅ **Export Functionality**: Export volunteer data to CSV

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4
- **Backend**: Firebase (Firestore, Authentication)
- **Routing**: React Router v7
- **Build Tool**: Vite 7
- **Package Manager**: pnpm

## Setup Instructions

### 1. Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable **Firestore Database** and **Authentication**
3. In Authentication, enable **Google Sign-in Provider**
4. Copy your Firebase config from Project Settings

### 2. Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Fill in your Firebase configuration in `.env`:
```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 3. Configure Admin Access

Edit `src/lib/auth.ts` and update the `ADMIN_EMAILS` array with authorized admin email addresses:

```typescript
const ADMIN_EMAILS = [
  'admin@gdgtacna.org',  // Replace with actual emails
  'organizer@gdgtacna.org',
  // Add more admin emails as needed
];
```

### 4. Configure Speaker Applications

Edit `src/components/SpeakerCTA.tsx` and update the `SPEAKER_APPLICATION_URL` with your Google Form or external platform URL:

```typescript
const SPEAKER_APPLICATION_URL = 'https://forms.gle/YOUR_ACTUAL_FORM_ID';
```

### 5. Run the Development Server

```bash
pnpm run dev
```

The application will be available at `http://localhost:5173`

## Usage

### Public Site
- Visit the main site to see event information
- Users can register as volunteers through the volunteer form
- Users are redirected to external platform for speaker applications

### Admin Dashboard
- Visit `/admin` to access the admin dashboard
- Sign in with Google using an authorized admin email
- View, filter, search, and export volunteer applications
- Real-time updates when new volunteers register

## Deployment on Vercel

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy!

## What's Implemented

✅ **Tailwind CSS v4 Migration**: Complete setup with Header, Hero, VolunteerCTA, and SpeakerCTA components migrated
✅ **Firebase Firestore Integration**: Real-time volunteer data storage and retrieval
✅ **Admin Dashboard**: Secure Google Authentication with comprehensive volunteer management
✅ **Volunteer Registration**: Complete form with Firebase submission, validation, and success/error handling
✅ **Speaker Applications**: Simplified external redirect system to Google Forms or similar platforms
✅ **Admin Features**: 
  - Filter volunteers by status (pending, contacted, accepted, rejected)
  - Search by name, email, or role
  - Export volunteer data to CSV
  - Real-time data updates
  - Responsive design
✅ **Security**: Admin access restricted to specific email addresses
✅ **Build System**: Successfully builds and deploys
✅ **Routing**: React Router setup with public and admin routes
✅ **TypeScript**: Full type safety with proper imports

## Project Status: ✅ PRODUCTION READY

The application is fully functional and ready for deployment with all core features implemented:

- ✅ Modern Tailwind CSS v4 styling
- ✅ Firebase backend integration 
- ✅ Admin dashboard for volunteer management
- ✅ Form validation and error handling
- ✅ Real-time data synchronization
- ✅ CSV export functionality
- ✅ Responsive design
- ✅ Security implementations
- ✅ Build optimization

### Optional Future Enhancements
- Complete Tailwind migration for remaining components (About, Schedule, Pricing, Footer) - These are currently using custom CSS and work fine
- Add volunteer status management (ability to change status from admin dashboard)
- Email notifications for volunteer applications