import { useState } from 'react';
import { Plus, Check, ExternalLink } from 'lucide-react';
import { CartItem } from '../types';
import { MENU_ITEMS } from '../data';
import { cn, formatXAF } from '../lib/utils';
import { useSEO } from '../hooks/useSEO';

interface MenuPageProps {
  onAddToCart: (itemId: string) => void;
  cart: CartItem[];
}

const CATEGORIES = ['Tous', 'Plats', 'Grillades', 'Boissons'] as const;
const DAYS = ['Tous', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'] as const;

export default function MenuPage({ onAddToCart, cart }: MenuPageProps) {
  useSEO({
    title: 'Menu — Carte & Prix',
    description: 'Menu complet de Chepele : Pork Salade, Achu, Kahti-Kahti, Eru, poulet et porc grilles. Plats du jour de 2 500 a 4 000 FCFA. Boissons et vin de palme.',
    path: '/menu',
  });

  const [activeCategory, setActiveCategory] = useState<string>('Tous');
  const [activeDay, setActiveDay] = useState<string>('Tous');
  const [addedId, setAddedId] = useState<string | null>(null);

  const filtered = MENU_ITEMS.filter(item => {
    const catMatch = activeCategory === 'Tous' || item.category === activeCategory;
    const dayMatch = activeDay === 'Tous' || item.day === activeDay || !item.day;
    return catMatch && dayMatch;
  });

  const handleAdd = (itemId: string) => {
    onAddToCart(itemId);
    setAddedId(itemId);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://chepele.com/wp-content/uploads/2025/08/Chepele-5.png"
            alt="Ambiance Chepele"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Notre Menu
          </h1>
          <p className="mt-3 text-white/70 max-w-lg">
            Cuisine camerounaise authentique. Servi sur feuilles, calebasses, assiettes en bois et cornes de chevreuil.
          </p>
          <a
            href="https://chepele.com/wp-content/uploads/2025/08/Chepele-Man-with-the-Pot-1.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-amber-300 hover:text-amber-200 font-medium"
          >
            Voir le menu complet en image
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters by category */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors cursor-pointer",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Filters by day (only for Plats) */}
          {(activeCategory === 'Tous' || activeCategory === 'Plats') && (
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {DAYS.map(day => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                    activeDay === day
                      ? "bg-amber-100 text-amber-900 border border-amber-200"
                      : "bg-muted/50 text-muted-foreground hover:text-foreground"
                  )}
                >
                  {day === 'Tous' ? 'Tous les jours' : day}
                </button>
              ))}
            </div>
          )}

          <p className="mt-6 text-sm text-muted-foreground">
            {filtered.length} {filtered.length > 1 ? 'plats' : 'plat'}
          </p>

          {/* Menu grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(item => {
              const inCart = cart.find(c => c.menuItem.id === item.id);
              const justAdded = addedId === item.id;
              const hasPrice = item.price > 0;

              return (
                <article
                  key={item.id}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-background/90 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full text-foreground">
                        {item.category}
                      </span>
                      {item.day && (
                        <span className="bg-amber-100/90 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full text-amber-900">
                          {item.day}
                        </span>
                      )}
                    </div>
                    {inCart && (
                      <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                        {inCart.quantity}x
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="font-semibold text-foreground text-lg">{item.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-lg font-bold text-primary">
                        {hasPrice ? formatXAF(item.price) : 'Sur commande'}
                      </span>
                      {hasPrice && (
                        <button
                          onClick={() => handleAdd(item.id)}
                          className={cn(
                            "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer",
                            justAdded
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-primary text-primary-foreground hover:bg-primary/90"
                          )}
                        >
                          {justAdded ? (
                            <>
                              <Check className="w-4 h-4" />
                              Ajoute
                            </>
                          ) : (
                            <>
                              <Plus className="w-4 h-4" />
                              Ajouter
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Official menu image */}
          <div className="mt-16 bg-muted/50 rounded-2xl border border-border p-8 text-center">
            <h3 className="font-serif text-xl font-bold text-foreground">Menu Complet Officiel</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Voici notre carte complete avec tous les prix
            </p>
            <a
              href="https://chepele.com/wp-content/uploads/2025/08/Chepele-Man-with-the-Pot-1.png"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block"
            >
              <img
                src="https://chepele.com/wp-content/uploads/2025/08/Chepele-Man-with-the-Pot-1-768x1086.png"
                alt="Menu officiel Chepele Man with the Pot"
                className="max-w-sm w-full mx-auto rounded-xl border border-border shadow-lg"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
