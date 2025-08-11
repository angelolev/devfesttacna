import { collection, addDoc, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

export interface VolunteerData {
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

// Add a new volunteer application
export const addVolunteer = async (volunteerData: Omit<VolunteerData, 'id' | 'createdAt' | 'status'>) => {
  try {
    const docRef = await addDoc(collection(db, 'volunteers'), {
      ...volunteerData,
      status: 'pending',
      createdAt: Timestamp.now()
    });
    console.log('Volunteer application submitted with ID: ', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding volunteer: ', error);
    return { success: false, error };
  }
};

// Get all volunteers
export const getVolunteers = async (): Promise<VolunteerData[]> => {
  try {
    const q = query(collection(db, 'volunteers'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const volunteers: VolunteerData[] = [];
    
    querySnapshot.forEach((doc) => {
      volunteers.push({
        id: doc.id,
        ...doc.data()
      } as VolunteerData);
    });
    
    return volunteers;
  } catch (error) {
    console.error('Error getting volunteers: ', error);
    return [];
  }
};