import FineWatches from '@/components/header/nav-content/FineWatches';
import Fragrance from '@/components/header/nav-content/Fragrance';
import Gifts from '@/components/header/nav-content/Gifts';
import HomeAccessories from '@/components/header/nav-content/HomeAccessories';
import Jewelry from '@/components/header/nav-content/Jewelry';
import LoveEngagement from '@/components/header/nav-content/LoveEngagement';
import Mens from '@/components/header/nav-content/Mens';
import Stories from '@/components/header/nav-content/Stories';
import { MenuItem } from '@/types/menu';
import { create } from 'zustand';

interface NavMenuState {
  activeItem: MenuItem | undefined;
  setActiveItem: (item: MenuItem | undefined) => void;
  content: JSX.Element;
}

export const useNavMenu = create<NavMenuState>((set, get) => ({
  activeItem: undefined,
  setActiveItem: (item) => {
    set({ activeItem: item });
    switch (item?.label) {
      case 'Jewelry':
        set({ content: Jewelry() });
        break;
      case 'Gifts':
        set({ content: Gifts() });
        break;
      case 'Love & Engagement':
        set({ content: LoveEngagement() });
        break;
      case 'Fine Watches':
        set({ content: FineWatches() });
        break;
      case 'Home & Accessories':
        set({ content: HomeAccessories() });
        break;
      case 'Fragrance':
        set({ content: Fragrance() });
        break;
      case "Men's":
        set({ content: Mens() });
        break;
      case 'Stories':
        set({ content: Stories() });
        break;
      default:
        set({ content: Jewelry() });
    }
  },
  content: Jewelry(),
}));
