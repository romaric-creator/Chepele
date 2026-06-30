export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Plats' | 'Grillades' | 'Boissons';
  day?: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Ambiance' | 'Plats' | 'Grillades' | 'Culture';
  imageUrl: string;
  description?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  imageUrl: string;
  price?: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export type View = 'home' | 'menu' | 'gallery' | 'events' | 'contact';
