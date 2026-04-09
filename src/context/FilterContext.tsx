import { createContext, useContext, useState, type ReactNode } from 'react';
import type { DocumentCategory } from '../types';

type FilterValue = 'all' | DocumentCategory;

interface FilterContextType {
  activeFilter: FilterValue;
  searchQuery: string;
  setActiveFilter: (filter: FilterValue) => void;
  setSearchQuery: (query: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <FilterContext.Provider value={{ activeFilter, searchQuery, setActiveFilter, setSearchQuery }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error('useFilter must be used within FilterProvider');
  return ctx;
}
