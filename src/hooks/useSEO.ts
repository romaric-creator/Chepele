import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function useSEO({ title, description, path, image }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | Chepele — Man with the Pot`;
    document.title = fullTitle;

    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', `https://chepele.com${path}`, 'property');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    if (image) {
      setMeta('og:image', image, 'property');
      setMeta('twitter:image', image);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://chepele.com${path}`);
    }
  }, [title, description, path, image]);
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}
