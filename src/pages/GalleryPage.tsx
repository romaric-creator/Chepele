import { useState } from 'react';
import { X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { cn } from '../lib/utils';
import { useSEO } from '../hooks/useSEO';
import OptimizedImage from '../components/OptimizedImage';

const FILTERS = ['Tous', 'Ambiance', 'Culture', 'Plats', 'Grillades'] as const;

export default function GalleryPage() {
  useSEO({
    title: 'Galerie Photos',
    description: 'Photos du restaurant Chepele a Douala : ambiance villageoise, plats camerounais, grillades et villages culturels. 20 villages representes.',
    path: '/galerie',
  });

  const [filter, setFilter] = useState<string>('Tous');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === 'Tous'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const lightboxItem = GALLERY_ITEMS.find(item => item.id === lightbox);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="max-w-2xl">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
            Galerie
          </h1>
          <p className="mt-3 text-muted-foreground">
            Regardez nos photos — l'ambiance, les plats, la culture et le feu de bois.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {FILTERS.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors cursor-pointer",
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo grid - masonry-like with varying heights */}
        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightbox(item.id)}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <OptimizedImage
                src={item.imageUrl}
                alt={item.title}
                className={cn(
                  "w-full group-hover:scale-105 transition-transform duration-500",
                  index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                )}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-medium text-amber-200 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-white font-semibold mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={lightboxItem.imageUrl}
              alt={lightboxItem.title}
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white font-semibold text-lg">{lightboxItem.title}</h3>
              {lightboxItem.description && (
                <p className="text-white/70 text-sm mt-1">{lightboxItem.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
