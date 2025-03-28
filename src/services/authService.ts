
import { toast } from "sonner";

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  accessToken: string | null;
}

// We'll use this mock user for development until we integrate with Google Auth
const mockAuthUser: User = {
  uid: "mock-user-1",
  email: "user@example.com",
  displayName: "Demo User",
  photoURL: "https://i.pravatar.cc/300",
  accessToken: "mock-token-123"
};

// Auth state listeners
const listeners: ((user: User | null) => void)[] = [];

// Initially null, set to mock user when signed in
let currentUser: User | null = null;

export const signInWithGoogle = async (): Promise<User> => {
  try {
    // This will be replaced with actual Google Auth logic
    console.log("Signing in with Google...");
    // Simulating network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Set mock user and notify listeners
    currentUser = mockAuthUser;
    notifyListeners();
    
    toast.success("Signed in successfully!");
    return mockAuthUser;
  } catch (error) {
    console.error("Error signing in:", error);
    toast.error("Failed to sign in. Please try again.");
    throw error;
  }
};

export const signOut = async (): Promise<void> => {
  try {
    console.log("Signing out...");
    // Simulating network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Clear current user and notify listeners
    currentUser = null;
    notifyListeners();
    
    toast.success("Signed out successfully!");
  } catch (error) {
    console.error("Error signing out:", error);
    toast.error("Failed to sign out. Please try again.");
    throw error;
  }
};

export const getCurrentUser = (): User | null => {
  return currentUser;
};

export const onAuthStateChanged = (callback: (user: User | null) => void): (() => void) => {
  listeners.push(callback);
  
  // Call immediately with current state
  callback(currentUser);
  
  // Return unsubscribe function
  return () => {
    const index = listeners.indexOf(callback);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  };
};

// Helper to notify all listeners
const notifyListeners = () => {
  listeners.forEach(listener => listener(currentUser));
};
