import { create } from 'zustand';

interface MobileNavState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMobileNav = create<MobileNavState>((set, get) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
