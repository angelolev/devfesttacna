import { doc, getDoc, setDoc, onSnapshot, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

export interface TicketSettings {
  premiumAvailable: number;
  premiumTotal: number;
  lastUpdated: Timestamp;
}

const SETTINGS_COLLECTION = 'settings';
const TICKET_SETTINGS_DOC = 'ticketAvailability';

// Get ticket availability settings
export const getTicketSettings = async (): Promise<TicketSettings | null> => {
  try {
    const docRef = doc(db, SETTINGS_COLLECTION, TICKET_SETTINGS_DOC);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as TicketSettings;
    } else {
      // Return default values if document doesn't exist
      const defaultSettings: TicketSettings = {
        premiumAvailable: 89,
        premiumTotal: 100,
        lastUpdated: Timestamp.now()
      };
      // Create the document with default values
      await setDoc(docRef, defaultSettings);
      return defaultSettings;
    }
  } catch (error) {
    console.error('Error getting ticket settings:', error);
    return null;
  }
};

// Update ticket availability settings
export const updateTicketSettings = async (
  premiumAvailable: number, 
  premiumTotal: number
): Promise<boolean> => {
  try {
    // Validation
    if (premiumAvailable < 0 || premiumTotal < 0) {
      throw new Error('Values cannot be negative');
    }
    if (premiumAvailable > premiumTotal) {
      throw new Error('Available tickets cannot exceed total tickets');
    }

    const docRef = doc(db, SETTINGS_COLLECTION, TICKET_SETTINGS_DOC);
    const updatedSettings: TicketSettings = {
      premiumAvailable,
      premiumTotal,
      lastUpdated: Timestamp.now()
    };
    
    await setDoc(docRef, updatedSettings);
    return true;
  } catch (error) {
    console.error('Error updating ticket settings:', error);
    throw error;
  }
};

// Subscribe to real-time updates
export const subscribeToTicketSettings = (
  callback: (settings: TicketSettings | null) => void
) => {
  const docRef = doc(db, SETTINGS_COLLECTION, TICKET_SETTINGS_DOC);
  
  return onSnapshot(docRef, (doc) => {
    if (doc.exists()) {
      callback(doc.data() as TicketSettings);
    } else {
      callback(null);
    }
  }, (error) => {
    console.error('Error in ticket settings subscription:', error);
    callback(null);
  });
};