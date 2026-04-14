import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ProgressState {
  reviewedCards: string[];
  totalCards: number;
  quizScores: Record<string, number>;
  currentSession: number;
  markCardReviewed: (cardId: string) => void;
  setTotalCards: (total: number) => void;
  saveQuizScore: (quizId: string, score: number) => void;
  setCurrentSession: (session: number) => void;
  resetProgress: () => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      reviewedCards: [],
      totalCards: 0,
      quizScores: {},
      currentSession: 1,
      
      markCardReviewed: (cardId: string) => {
        set((state) => {
          if (state.reviewedCards.includes(cardId)) {
            return state;
          }
          return { reviewedCards: [...state.reviewedCards, cardId] };
        });
      },
      
      setTotalCards: (total: number) => {
        set({ totalCards: total });
      },
      
      saveQuizScore: (quizId: string, score: number) => {
        set((state) => ({
          quizScores: { ...state.quizScores, [quizId]: score },
        }));
      },
      
      setCurrentSession: (session: number) => {
        set({ currentSession: session });
      },
      
      resetProgress: () => {
        set({
          reviewedCards: [],
          quizScores: {},
        });
      },
    }),
    {
      name: 'thermodynamics-progress',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// Derived getter for progress percentage
export const getProgressPercentage = (state: ProgressState) => {
  if (state.totalCards === 0) return 0;
  return (state.reviewedCards.length / state.totalCards) * 100;
};
