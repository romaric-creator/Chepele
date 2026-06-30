import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { CartItem } from './types';
import { MENU_ITEMS } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import CartSheet from './components/CartSheet';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
const AboutPage = lazy(() => import('./pages/AboutPage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (itemId: string) => {
    const menuItem = MENU_ITEMS.find(m => m.id === itemId);
    if (!menuItem) return;

    setCart(prev => {
      const existing = prev.find(c => c.menuItem.id === itemId);
      if (existing) {
        return prev.map(c =>
          c.menuItem.id === itemId ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { menuItem, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart(prev => {
      const item = prev.find(c => c.menuItem.id === itemId);
      if (!item) return prev;
      const newQty = item.quantity + delta;
      if (newQty <= 0) return prev.filter(c => c.menuItem.id !== itemId);
      return prev.map(c =>
        c.menuItem.id === itemId ? { ...c, quantity: newQty } : c
      );
    });
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />

        <main className="flex-1">
          <Suspense fallback={<div className="flex-1 flex items-center justify-center py-32"><div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" /></div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/menu" element={<MenuPage onAddToCart={addToCart} cart={cart} />} />
              <Route path="/galerie" element={<GalleryPage />} />
              <Route path="/evenements" element={<EventsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />

        <CartSheet
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onClearCart={() => setCart([])}
        />
      </div>
    </BrowserRouter>
  );
}
