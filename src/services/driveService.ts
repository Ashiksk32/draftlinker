
import { toast } from "sonner";
import { getCurrentUser } from "./authService";

export interface Letter {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

// Mock data for development
const mockLetters: Letter[] = [
  {
    id: "letter-1",
    title: "Welcome Letter",
    content: "<p>Dear user,</p><p>Welcome to DraftLinker! This is a sample letter to demonstrate the application's functionality.</p><p>Sincerely,<br>The DraftLinker Team</p>",
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "letter-2",
    title: "Project Proposal",
    content: "<p>Dear Team,</p><p>I propose we implement the following changes to our project...</p><p>Best regards,<br>Demo User</p>",
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()
  }
];

// User specific storage
const userLetters = new Map<string, Letter[]>();

export const getLetters = async (): Promise<Letter[]> => {
  try {
    const user = getCurrentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Get user-specific letters or create new entry with mock data
    if (!userLetters.has(user.uid)) {
      userLetters.set(user.uid, [...mockLetters]);
    }
    
    return userLetters.get(user.uid) || [];
  } catch (error) {
    console.error("Error fetching letters:", error);
    toast.error("Failed to fetch letters");
    throw error;
  }
};

export const getLetter = async (id: string): Promise<Letter | undefined> => {
  try {
    const user = getCurrentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const letters = userLetters.get(user.uid) || [];
    return letters.find(letter => letter.id === id);
  } catch (error) {
    console.error(`Error fetching letter with ID ${id}:`, error);
    toast.error("Failed to fetch letter");
    throw error;
  }
};

export const saveLetter = async (letter: Omit<Letter, 'id' | 'createdAt' | 'updatedAt'> & { id?: string }): Promise<Letter> => {
  try {
    const user = getCurrentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const now = new Date().toISOString();
    const letters = userLetters.get(user.uid) || [];
    
    let savedLetter: Letter;
    
    if (letter.id) {
      // Update existing letter
      const index = letters.findIndex(l => l.id === letter.id);
      if (index === -1) {
        throw new Error(`Letter with ID ${letter.id} not found`);
      }
      
      savedLetter = {
        ...letters[index],
        ...letter,
        updatedAt: now
      };
      
      letters[index] = savedLetter;
    } else {
      // Create new letter
      savedLetter = {
        ...letter,
        id: `letter-${Date.now()}`,
        createdAt: now,
        updatedAt: now
      };
      
      letters.push(savedLetter);
    }
    
    userLetters.set(user.uid, letters);
    toast.success(`Letter ${letter.id ? 'updated' : 'created'} successfully!`);
    
    return savedLetter;
  } catch (error) {
    console.error("Error saving letter:", error);
    toast.error("Failed to save letter");
    throw error;
  }
};

export const deleteLetter = async (id: string): Promise<void> => {
  try {
    const user = getCurrentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const letters = userLetters.get(user.uid) || [];
    const newLetters = letters.filter(letter => letter.id !== id);
    
    if (letters.length === newLetters.length) {
      throw new Error(`Letter with ID ${id} not found`);
    }
    
    userLetters.set(user.uid, newLetters);
    toast.success("Letter deleted successfully!");
  } catch (error) {
    console.error(`Error deleting letter with ID ${id}:`, error);
    toast.error("Failed to delete letter");
    throw error;
  }
};

// Method to simulate saving to Google Drive
export const saveToGoogleDrive = async (letter: Letter): Promise<void> => {
  try {
    const user = getCurrentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log(`Letter "${letter.title}" saved to Google Drive`);
    toast.success("Letter exported to Google Drive successfully!");
  } catch (error) {
    console.error("Error saving to Google Drive:", error);
    toast.error("Failed to export to Google Drive");
    throw error;
  }
};
