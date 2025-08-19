'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type SiteContextType = {
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export function useSiteContext() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSiteContext deve ser usado dentro de SiteProvider');
  }
  return context;
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <SiteContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
      {children}
    </SiteContext.Provider>
  );
}
