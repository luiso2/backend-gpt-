import { create } from 'zustand';

export interface JourneyStep {
  step: string;
  value: any;
  timestamp: number;
}

export interface UserProfile {
  frustration?: string;
  revenue?: string;
  attempts?: string;
  interest?: string;
  email?: string;
  name?: string;
  whatsapp?: string;
  leadScore?: number;
  potentialRevenueLoss?: number;
  recommendedSolutions?: string[];
  aiDiagnosis?: string;
  personalizedPitch?: string;
}

interface JourneyStore {
  currentStep: number;
  journeyHistory: JourneyStep[];
  userProfile: UserProfile;
  isLoading: boolean;
  
  setCurrentStep: (step: number) => void;
  addToHistory: (step: string, value: any) => void;
  updateProfile: (data: Partial<UserProfile>) => void;
  setLoading: (loading: boolean) => void;
  reset: () => void;
}

export const useJourneyStore = create<JourneyStore>((set) => ({
  currentStep: 0,
  journeyHistory: [],
  userProfile: {},
  isLoading: false,
  
  setCurrentStep: (step) => set({ currentStep: step }),
  
  addToHistory: (step, value) => 
    set((state) => ({
      journeyHistory: [...state.journeyHistory, {
        step,
        value,
        timestamp: Date.now()
      }]
    })),
  
  updateProfile: (data) =>
    set((state) => ({
      userProfile: { ...state.userProfile, ...data }
    })),
    
  setLoading: (loading) => set({ isLoading: loading }),
  
  reset: () => set({
    currentStep: 0,
    journeyHistory: [],
    userProfile: {},
    isLoading: false
  })
}));