import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  type User,
} from "firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

// Admin emails (replace with actual admin email addresses)
const ADMIN_EMAILS = [
  "angelokta7@gmail.com", // Replace with actual admin emails
  "organizer@gdgtacna.org",
  // Add more admin emails as needed
];

export const signInWithGoogle = async (): Promise<{
  success: boolean;
  user?: User;
  error?: string;
}> => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Check if user email is in admin list
    if (user.email && ADMIN_EMAILS.includes(user.email)) {
      return { success: true, user };
    } else {
      // Sign out non-admin user immediately
      await signOut(auth);
      return {
        success: false,
        error:
          "Access denied. You are not authorized to access the admin dashboard.",
      };
    }
  } catch (error: unknown) {
    console.error("Error signing in with Google:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to sign in";
    return {
      success: false,
      error: errorMessage,
    };
  }
};

export const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

export const isAdmin = (user: User | null): boolean => {
  return (
    user !== null && user.email !== null && ADMIN_EMAILS.includes(user.email)
  );
};
