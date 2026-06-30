import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface HeaderProps {
  cartCount: number;
  onCartOpen: () => void;
}

const NAV_ITEMS = [
  { label: 'Accueil', path: '/' },
  { label: 'A Propos', path: '/a-propos' },
  { label: 'Menu', path: '/menu' },
  { label: 'Evenements', path: '/evenements' },
  { label: 'Contact', path: '/contact' },
  { label: 'Blog', path: '/blog' },
  { label: 'Galerie', path: '/galerie' },
];

export default function Header({ cartCount, onCartOpen }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://chepele.com/wp-content/uploads/2025/08/cropped-chepele-white-1.png"
              alt="Chepele"
              className="h-8 w-auto invert"
            />
            <span className="font-serif font-bold text-foreground text-lg">Chepele</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onCartOpen}
              className="relative p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
              aria-label="Panier"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <Link
              to="/contact"
              className="hidden sm:inline-flex px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Reserver
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col py-3 px-4 gap-1">
            {NAV_ITEMS.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg text-center"
            >
              Reserver une Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
