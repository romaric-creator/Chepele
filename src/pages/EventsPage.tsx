import { Calendar, Clock, Users } from 'lucide-react';
import { Link } from 'react-router';
import { EVENT_ITEMS } from '../data';
import { useSEO } from '../hooks/useSEO';

const PACKAGES = [
  { label: 'Table de 6', price: '25 000 FCFA', desc: 'Pour un petit groupe entre amis' },
  { label: 'Table de 10', price: '50 000 FCFA', desc: 'Pour feter en famille' },
  { label: 'Table VIP', price: '100 000 FCFA+', desc: 'Espace prive avec service VIP' },
  { label: 'Table Famille', price: 'Appelez-nous', desc: 'On s\'arrange ensemble selon vos besoins' },
];

export default function EventsPage() {
  useSEO({
    title: 'Evenements & Packages',
    description: 'Evenements chez Chepele : fetes privees, soirees sport, competitions. Packages tables de 6 (25 000), 10 (50 000), VIP (100 000+). Reservez maintenant.',
    path: '/evenements',
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://chepele.com/wp-content/uploads/2025/08/Trad-event-March-2025.jpg"
            alt="Evenement traditionnel Chepele"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Evenements & Packages
          </h1>
          <p className="mt-3 text-white/70 max-w-lg">
            Fetes privees, anniversaires, soirees sport et celebrations. On a la place pour tout le monde.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
            Nos Packages
          </h2>
          <p className="mt-2 text-muted-foreground">
            Reservez votre table a l'avance pour etre sur d'avoir votre place.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PACKAGES.map(pkg => (
              <div key={pkg.label} className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="mt-3 font-semibold text-foreground">{pkg.label}</h3>
                <p className="mt-1 text-primary font-bold">{pkg.price}</p>
                <p className="mt-2 text-sm text-muted-foreground">{pkg.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
            >
              Reserver un Package
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
            Prochains Evenements
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENT_ITEMS.map(event => (
              <article
                key={event.id}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow group flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {event.price && (
                    <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                      {event.price}
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg text-foreground">{event.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                    {event.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {event.time}
                    </span>
                  </div>

                  <Link
                    to="/contact"
                    className="mt-5 w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors cursor-pointer text-center block"
                  >
                    Reserver
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                Competitions & Fun
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Concours de fufu, competitions de pistaches (groundnut eating), jeux traditionnels et plus encore.
                Venez vous amuser et gagner des prix !
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
              >
                S'inscrire
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img
                src="https://chepele.com/wp-content/uploads/2025/08/chepele-marco-fufu.jpeg"
                alt="Competition Fufu Chepele"
                className="rounded-xl w-full aspect-square object-cover"
                loading="lazy"
              />
              <img
                src="https://chepele.com/wp-content/uploads/2025/08/Groundnut-eating-competition-chepele-768x1152.png"
                alt="Groundnut eating competition"
                className="rounded-xl w-full aspect-square object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
