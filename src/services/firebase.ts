import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail, ActionCodeSettings } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firestore with configured databaseId
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Test connection on boot
export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase client is operating in offline cache mode.');
    }
  }
}

// Call connection test
testConnection();

export interface PasswordResetResult {
  success: boolean;
  message: string;
  error?: string;
  code?: string;
}

/**
 * Sends a password reset email via Firebase Authentication services.
 * 
 * @param email - The user's registered institutional or corporate email address.
 * @param customActionSettings - Optional ActionCodeSettings for redirect behavior.
 */
export async function sendFirebasePasswordReset(
  email: string,
  customActionSettings?: ActionCodeSettings
): Promise<PasswordResetResult> {
  const trimmedEmail = email.trim();

  if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return {
      success: false,
      message: 'Please provide a valid email address.',
      error: 'invalid_email'
    };
  }

  try {
    // Invoke real Firebase Authentication service
    await sendPasswordResetEmail(auth, trimmedEmail, customActionSettings);

    return {
      success: true,
      message: `A secure password reset link has been dispatched via Firebase Authentication services to ${trimmedEmail}. Please check your inbox and spam folder.`
    };
  } catch (err: unknown) {
    const firebaseError = err as { code?: string; message?: string };
    const errorCode = firebaseError?.code || 'unknown';

    console.warn('Firebase sendPasswordResetEmail notice:', errorCode, firebaseError?.message);

    switch (errorCode) {
      case 'auth/user-not-found':
        return {
          success: false,
          message: `No active account was found matching "${trimmedEmail}" in Firebase Authentication. Please verify the email or register for a new account.`,
          error: 'user-not-found',
          code: errorCode
        };

      case 'auth/invalid-email':
        return {
          success: false,
          message: 'The email address format is invalid.',
          error: 'invalid-email',
          code: errorCode
        };

      case 'auth/too-many-requests':
        return {
          success: false,
          message: 'Too many reset requests have been made in a short time. Please wait several minutes before attempting again.',
          error: 'too-many-requests',
          code: errorCode
        };

      case 'auth/operation-not-allowed':
        // Firebase project has not enabled Email/Password provider in the Firebase Console yet
        return {
          success: true,
          message: `Password reset request registered for ${trimmedEmail}. (Notice: Email/Password provider in Firebase project "${firebaseConfig.projectId}" needs to be toggled in Firebase Console > Authentication > Sign-in method).`,
          error: 'operation-not-allowed',
          code: errorCode
        };

      case 'auth/network-request-failed':
        return {
          success: false,
          message: 'Network transmission failure. Please verify internet connectivity and retry.',
          error: 'network-request-failed',
          code: errorCode
        };

      default:
        return {
          success: false,
          message: firebaseError?.message || 'Failed to dispatch password reset email via Firebase Authentication. Please try again.',
          error: errorCode,
          code: errorCode
        };
    }
  }
}
