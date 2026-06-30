import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useSEO } from '../hooks/useSEO';

const BLOG_POSTS = [
  {
    id: 'bonaberi-fr',
    title: 'CHEPELE ARRIVE A BONABERI, DOUALA !',
    date: '19 Mai 2026',
    summary: 'Des plats camerounais authentiques, une hospitalite chaleureuse, une culture riche et des moments inoubliables. Chepele ouvre bientot a Bonaberi !',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Chepele-Original.png',
  },
  {
    id: 'bonaberi-en',
    title: 'CHEPELE IS COMING TO BONABERI, DOUALA!',
    date: '19 May 2026',
    summary: 'Authentic Cameroonian meals, warm hospitality, rich culture, and unforgettable moments. Chepele is opening soon in Bonaberi!',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Chepele-5.png',
  },
  {
    id: 'mbagalum-juju',
    title: 'Mbagalum and Juju Dance — Une nuit de culture, musique et saveurs !',
    date: '3 Octobre 2025',
    summary: 'Encore une nuit inoubliable de rythme, tradition et bonne bouffe. Mbagalum et Juju dance chaque samedi soir chez Chepele.',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/10/Chepele-Man-With-the-Pot-Mbagalum-965x1024.jpeg',
  },
  {
    id: 'welcome-blog',
    title: 'Bienvenue sur Chepele News & Stories',
    date: '20 Aout 2025',
    summary: 'Chez Chepele, on croit que la nourriture c\'est plus qu\'un repas. C\'est de la culture, du storytelling et de la communaute. Bienvenue dans notre univers.',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Chepele.png',
  },
];

export default function BlogPage() {
  useSEO({
    title: 'Blog & Actualites',
    description: 'Actualites Chepele : nouvelle ouverture a Bonaberi, evenements culturels, mbagalum et juju dance. Restez connectes.',
    path: '/blog',
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
            Blog & Actualites
          </h1>
          <p className="mt-3 text-muted-foreground">
            Les dernieres nouvelles de Chepele — evenements, ouvertures et histoires de notre communaute.
          </p>
        </div>

        {/* Annonce Bonaberi - banniere */}
        <div className="mt-10 bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-1">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Nouveau</span>
              <h2 className="mt-2 font-serif text-xl sm:text-2xl font-bold text-foreground">
                Chepele arrive a Bonaberi !
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Bonne nouvelle ! Chepele ouvre un deuxieme restaurant a Bonaberi, Douala. La meme cuisine authentique, la meme ambiance villageoise, plus pres de vous.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Ouverture prochaine — restez connectes sur nos reseaux pour la date exacte.
              </p>
            </div>
            <img
              src="https://chepele.com/wp-content/uploads/2025/08/Chepele-Original.png"
              alt="Chepele Bonaberi"
              className="w-full sm:w-48 aspect-square rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Blog posts grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map(post => (
            <article
              key={post.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </div>
                <h3 className="mt-3 font-semibold text-foreground text-lg leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Suivez-nous sur les reseaux pour ne rien rater.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {[
              { name: 'Facebook', url: 'https://facebook.com/profile.php?id=100088840404182' },
              { name: 'Instagram', url: 'https://instagram.com/chepelebarbecue.shop/' },
              { name: 'TikTok', url: 'https://tiktok.com/@chepele6' },
            ].map(social => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-muted text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              >
                {social.name}
                <ArrowRight className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
