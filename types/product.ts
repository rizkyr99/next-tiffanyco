export interface Product {
  name: string;
  image: string;
  url: string;
  isLimited: boolean;
}

export interface CarouselItem {
  name: string;
  image: string;
  slug: string;
  isLimited?: boolean;
}
