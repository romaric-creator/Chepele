import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function AboutPage() {
  useSEO({
    title: 'A Propos — Notre Histoire',
    description: 'Decouvrez l\'histoire de Chepele, fonde par Achu Valery (Ngessman). Un pot, un manguier, un reve de faire revivre la cuisine africaine authentique a Douala.',
    path: '/a-propos',
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://chepele.com/wp-content/uploads/2025/08/Chepele-Original.png"
            alt="Chepele Restaurant"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            A Propos de Chepele
          </h1>
          <p className="mt-4 text-white/80 max-w-lg text-lg">
            Un pot, un manguier, une vision. Voici notre histoire.
          </p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-primary tracking-widest uppercase">Notre Histoire</p>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-foreground">
                Comment tout a commence
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Tout a commence avec un seul pot sous un manguier. Un reve simple : faire revivre la vraie cuisine africaine, celle de nos grands-meres, dans un cadre villageois authentique.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Fonde par Achu Valery, surnomme "Ngessman", Chepele est bien plus qu'un restaurant. C'est un lieu de culture, de partage et de communaute. Chaque plat raconte une histoire du Cameroun.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Les repas sont servis sur des feuilles de bananier, dans des calebasses, sur des assiettes en bois ou des cornes de chevreuil. Les boissons coulent dans des coupes en bambou. Ici, on mange comme au village.
              </p>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://chepele.com/wp-content/uploads/2025/08/Chepele-5.png"
                alt="Ambiance Chepele"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Le fondateur */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://chepele.com/wp-content/uploads/2025/08/Chepele.png"
                alt="Chepele Man with the Pot"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium text-primary tracking-widest uppercase">Le Fondateur</p>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-foreground">
                "Man with the Pot" — Ngessman
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Achu Valery, connu sous le nom de Ngessman, a cree Chepele avec une seule idee en tete : que chaque bouchee porte l'ame du Cameroun.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Sa philosophie est simple — des ingredients frais du marche, des recettes transmises de generation en generation, et un feu qui ne s'eteint jamais. Pas de raccourcis, pas de compromis.
              </p>
              <p className="mt-4 text-muted-foreground/80 italic">
                "Where tradition meets taste, where every dish carries the soul of Cameroon."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui nous rend uniques */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground text-center">
            Ce qui nous rend uniques
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cadre villageois',
                description: 'Un setup en plein air qui reproduit la vie au village. Chaque espace celebre un peuple du Cameroun — Bamileke, Nso, Ewondo, Bakweri et plus.',
                img: 'https://chepele.com/wp-content/uploads/2025/08/Bamileke-Chepele-Village-DLA-2.png',
              },
              {
                title: 'Musique & danse live',
                description: 'Mbagalum, cercles de tambours et danses traditionnelles chaque soir. On ne mange pas seulement, on vit la culture.',
                img: 'https://chepele.com/wp-content/uploads/2025/10/Chepele-Man-With-the-Pot-Mbagalum-965x1024.jpeg',
              },
              {
                title: 'Service authentique',
                description: 'Servi sur feuilles de bananier, calebasses, assiettes en bois et cornes de chevreuil. Le vin de palme dans des coupes en bambou.',
                img: 'https://chepele.com/wp-content/uploads/2025/08/Chepele-Upstairs-2-1024x767.png',
              },
            ].map(item => (
              <div key={item.title} className="group rounded-2xl border border-border overflow-hidden bg-card hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
            Venez vivre l'experience
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Behind IUC, Logbessou, Douala. Ouvert tous les jours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
            >
              Voir la Carte
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-border text-foreground font-semibold text-sm rounded-lg hover:bg-muted transition-colors"
            >
              Reserver
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
