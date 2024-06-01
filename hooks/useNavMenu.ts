import FineWatches from '@/components/header/nav-content/FineWatches';
import Fragrance from '@/components/header/nav-content/Fragrance';
import Gifts from '@/components/header/nav-content/Gifts';
import HomeAccessories from '@/components/header/nav-content/HomeAccessories';
import Jewelry from '@/components/header/nav-content/Jewelry';
import LoveEngagement from '@/components/header/nav-content/LoveEngagement';
import Mens from '@/components/header/nav-content/Mens';
import Stories from '@/components/header/nav-content/Stories';
import { MenuItem } from '@/types/menu';
import { useEffect, useState } from 'react';

const useNavMenu = () => {
  const [activeItem, setActiveItem] = useState<MenuItem>();
  const [content, setContent] = useState<JSX.Element>();

  useEffect(() => {
    if (!activeItem) return;

    switch (activeItem.label) {
      case 'Jewelry':
        setContent(Jewelry);
        break;
      case 'Gifts':
        setContent(Gifts);
        break;
      case 'Love & Engagement':
        setContent(LoveEngagement);
        break;
      case 'Fine Watches':
        setContent(FineWatches);
        break;
      case 'Home & Accessories':
        setContent(HomeAccessories);
        break;
      case 'Fragrance':
        setContent(Fragrance);
        break;
      case "Men's":
        setContent(Mens);
        break;
      case 'Stories':
        setContent(Stories);
        break;
      default:
        setContent(Jewelry);
    }
  }, [activeItem, activeItem?.label]);

  return { activeItem, setActiveItem, content };
};

export default useNavMenu;
