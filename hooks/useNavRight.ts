import { create } from 'zustand';

interface NavRightState {
  activeItem: 'account' | 'wishlist' | 'shopping-bag' | undefined;
  setActiveItem: (item: NavRightState['activeItem']) => void;
}

export const useNavRight = create<NavRightState>((set, get) => ({
  activeItem: undefined,
  setActiveItem: (item) => {
    set({ activeItem: item });
  },
}));
