import { createContext, useContext, useState, type ReactNode } from 'react';
import type { CardItem } from '../types';

interface PreviewContextType {
  selectedCard: CardItem | null;
  selectCard: (card: CardItem | null) => void;
}

const PreviewContext = createContext<PreviewContextType | undefined>(undefined);

export function PreviewProvider({ children }: { children: ReactNode }) {
  const [selectedCard, setSelectedCard] = useState<CardItem | null>(null);

  return (
    <PreviewContext.Provider value={{ selectedCard, selectCard: setSelectedCard }}>
      {children}
    </PreviewContext.Provider>
  );
}

export function usePreview() {
  const ctx = useContext(PreviewContext);
  if (!ctx) throw new Error('usePreview must be used within PreviewProvider');
  return ctx;
}
