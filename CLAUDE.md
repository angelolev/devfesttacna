# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DevFest Tacna 2025 is a React-based web application built for managing a developer conference. It features a public landing page for event information and volunteer registration, plus an admin dashboard for managing volunteer applications.

**Tech Stack:**
- React 19 + TypeScript + Vite 7
- Tailwind CSS v4 for styling
- Firebase (Firestore + Authentication)
- React Router v7 for routing
- pnpm as package manager

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Run linter
pnpm run lint

# Preview production build
pnpm run preview
```

## Architecture Overview

### Core Structure
```
src/
├── components/          # React components
│   ├── AdminDashboard.tsx   # Admin panel for volunteer management
│   ├── AdminLogin.tsx       # Admin authentication component
│   ├── AdminRoute.tsx       # Protected route wrapper
│   ├── Header.tsx           # Main navigation header
│   ├── Hero.tsx             # Landing page hero section
│   ├── VolunteerCTA.tsx     # Volunteer registration form
│   └── SpeakerCTA.tsx       # Speaker application redirect
├── lib/                 # Core services and utilities
│   ├── firebase.ts          # Firebase configuration and initialization
│   ├── auth.ts              # Authentication logic with admin controls
│   └── volunteers.ts        # Volunteer data management (Firestore operations)
└── App.tsx             # Main routing logic
```

### Key Architecture Patterns

**Firebase Integration:**
- `src/lib/firebase.ts` initializes Firebase with environment variables
- `src/lib/auth.ts` handles Google OAuth with admin email whitelist
- `src/lib/volunteers.ts` manages Firestore operations for volunteer data

**Admin System:**
- Admin access is controlled via email whitelist in `src/lib/auth.ts:12-16`
- Protected routes use `AdminRoute.tsx` component for authentication checks
- Admin dashboard provides volunteer management with filtering, search, and CSV export

**Component Architecture:**
- Public components (Header, Hero, Schedule, Pricing, Footer) render the main landing page
- VolunteerCTA handles form submission to Firestore
- SpeakerCTA redirects to external Google Forms (URL configured in component)

## Environment Setup

Required environment variables in `.env`:
```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## Configuration Points

**Admin Access:** Update `ADMIN_EMAILS` array in `src/lib/auth.ts:12-16` to authorize admin users.

**Speaker Applications:** Update `SPEAKER_APPLICATION_URL` in `src/components/SpeakerCTA.tsx` to point to external form platform.

## Data Models

**VolunteerData Interface** (`src/lib/volunteers.ts:4-14`):
```typescript
interface VolunteerData {
  id?: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
  availability: string;
  status?: 'pending' | 'contacted' | 'accepted' | 'rejected';
  createdAt?: Timestamp;
}
```

## Build and Deployment

- Builds are optimized through Vite with TypeScript compilation
- ESLint configuration includes React hooks and TypeScript rules
- Production builds go to `dist/` directory
- Tailwind CSS is configured with PostCSS for styling compilation

## Testing

No test framework is currently configured. When adding tests, follow the project's TypeScript and React patterns.