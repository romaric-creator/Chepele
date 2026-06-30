import { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className,
  priority = false,
  sizes = '100vw',
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority || !imgRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  const isChepele = src.includes('chepele.com');
  const srcSet = isChepele ? undefined : generateSrcSet(src);

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden bg-muted", className)}>
      {inView && (
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : undefined}
          onLoad={() => setLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}
      {!loaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
    </div>
  );
}

function generateSrcSet(src: string): string | undefined {
  if (!src.includes('unsplash.com')) return undefined;
  const base = src.replace(/&w=\d+/, '');
  return [400, 600, 800, 1200].map(w => `${base}&w=${w} ${w}w`).join(', ');
}
