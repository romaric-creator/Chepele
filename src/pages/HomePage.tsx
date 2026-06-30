import { Link } from 'react-router';
import { ArrowRight, Flame, Users, Clock, Music } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const VILLAGES = [
  { name: 'Bamileke', img: 'https://chepele.com/wp-content/uploads/2025/08/Bamileke-Chepele-Village-DLA-2.png' },
  { name: 'Nso', img: 'https://chepele.com/wp-content/uploads/2025/08/NSO-Chepele-Village-DLA.png' },
  { name: 'Ewondo', img: 'https://chepele.com/wp-content/uploads/2025/08/Ewondo-Chepele-Village-DLA.png' },
  { name: 'Bakweri', img: 'https://chepele.com/wp-content/uploads/2025/08/Bakweri-Cheple-Village-DLA.png' },
  { name: 'Mankon', img: 'https://chepele.com/wp-content/uploads/2025/08/Mankon-Chepele-Village-DLA.png' },
  { name: 'Kom', img: 'https://chepele.com/wp-content/uploads/2025/08/Kom-Chepele-Village-DLA.png' },
  { name: 'Oku', img: 'https://chepele.com/wp-content/uploads/2025/08/Oku-Chepele-Village-DLA.png' },
  { name: 'Awing', img: 'https://chepele.com/wp-content/uploads/2025/08/Awing-Chepele-Village-DLA-.png' },
  { name: 'Ndop', img: 'https://chepele.com/wp-content/uploads/2025/08/Ndop-Chepele-VIllage-DLA.png' },
  { name: 'Nkambe', img: 'https://chepele.com/wp-content/uploads/2025/08/Nkambe-Chepele-Village-DLA.png' },
  { name: 'Nsongwa', img: 'https://chepele.com/wp-content/uploads/2025/08/Nsongwa-Chepele-Village-DLA.png' },
  { name: 'Pinyin', img: 'https://chepele.com/wp-content/uploads/2025/08/Pinyin-Chepele-Village-DLA.png' },
  { name: 'Santa', img: 'https://chepele.com/wp-content/uploads/2025/08/Santa-Chepele-Village-DLA.png' },
  { name: 'Wum', img: 'https://chepele.com/wp-content/uploads/2025/08/Wum-Chepele-Village-DLA.png' },
  { name: 'Bansoh', img: 'https://chepele.com/wp-content/uploads/2025/08/Bansoh-Chepele-Village-DLA.png' },
  { name: 'Batibo', img: 'https://chepele.com/wp-content/uploads/2025/08/Batibo-Chepele-Village-DLA.png' },
];

export default function HomePage() {
  useSEO({
    title: 'Restaurant Barbecue Africain a Douala',
    description: 'Chepele — cuisine camerounaise authentique, grillades au feu de bois, musique live et ambiance villageoise. Behind IUC, Logbessou, Douala.',
    path: '/',
  });

  return (
    <div>
      {/* Annonce Bonaberi */}
      <div className="bg-primary text-primary-foreground text-center py-2.5 px-4">
        <p className="text-sm font-medium">
          Nouveau ! Chepele ouvre bientot a <strong>Bonaberi, Douala</strong>.{' '}
          <Link to="/blog" className="underline hover:no-underline">En savoir plus</Link>
        </p>
      </div>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://chepele.com/wp-content/uploads/2025/08/Chepele.png"
            alt="Chepele Man with the Pot - Restaurant barbecue africain Douala"
            className="w-full h-full object-cover"
            width={1200}
            height={800}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-xl">
            <img
              src="https://chepele.com/wp-content/uploads/2025/08/chepele-white-1.png"
              alt="Logo Chepele Man with the Pot - restaurant africain Douala"
              className="h-12 w-auto mb-8"
              width={180}
              height={48}
              loading="eager"
            />
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              La vraie cuisine camerounaise
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-lg leading-relaxed">
              Barbecue africain, plats du village servis sur feuilles et calebasses. Musique live, danses et vin de palme frais en coupe de bambou. Venez manger comme chez grand-mere.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
              >
                Voir la Carte
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 bg-white/10 text-white font-semibold text-sm rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
              >
                Reserver une Table
              </Link>
            </div>

            <p className="mt-8 text-xs text-white/50">
              Behind IUC, Logbessou, Douala — Ouvert 7j/7
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Flame,
                title: 'Barbecue au Feu de Bois',
                description: 'Poulet, porc et gambas grilles sur braises dans un cadre villageois.'
              },
              {
                icon: Users,
                title: 'Cuisine du Village',
                description: 'Pork Salade, Achu, Kahti-Kahti, Eru, Ndole — des recettes de nos grands-meres.'
              },
              {
                icon: Music,
                title: 'Musique & Danse Live',
                description: 'Mbagalum, tambours et danses traditionnelles chaque soir.'
              },
              {
                icon: Clock,
                title: 'Ouvert Tous les Jours',
                description: 'Lun-Sam 12h-00h | Dim 10h-00h. Venez quand vous voulez.'
              }
            ].map(feature => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="mt-4 font-semibold text-foreground">{feature.title}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Histoire - avec image de fond immersive */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://chepele.com/wp-content/uploads/2025/08/Chepele-Upstairs-2-1024x767.png"
            alt="Terrasse Chepele"
            className="w-full h-full object-cover"
            width={1024}
            height={767}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-amber-300 tracking-widest uppercase">Notre Histoire</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-white">
                Un pot, un manguier, un reve
              </h2>
              <p className="mt-5 text-white/80 leading-relaxed">
                Tout a commence avec un seul pot sous un manguier. Le but : faire revivre la cuisine africaine que nos grands-parents nous ont appris a aimer. Des ingredients frais du marche et un feu qui ne s'eteint jamais.
              </p>
              <p className="mt-4 text-white/80 leading-relaxed">
                Cree par Achu Valery, dit "Ngessman", Chepele c'est plus qu'un restaurant — c'est la culture, le partage et la communaute. On mange sur des feuilles, dans des calebasses, et on boit dans des coupes en bambou. Comme au village.
              </p>
              <p className="mt-4 text-white/60 text-sm italic">
                "Where tradition meets taste, where every dish carries the soul of Cameroon."
              </p>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/10">
              <img
                src="https://chepele.com/wp-content/uploads/2025/08/Chepele-Original.png"
                alt="Chepele Restaurant Douala"
                className="w-full h-full object-cover"
                width={800}
                height={800}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mbagalum / Culture section avec image de fond */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://chepele.com/wp-content/uploads/2025/10/Chepele-Man-With-the-Pot-Mbagalum-965x1024.jpeg"
            alt="Mbagalum Chepele"
            className="w-full h-full object-cover"
            width={965}
            height={1024}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-primary tracking-widest uppercase">Culture</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Un village au coeur de Douala
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Chez Chepele, chaque coin du restaurant represente un peuple du Cameroun. Bamileke, Nso, Ewondo, Bakweri — on celebre notre culture a travers la deco, la musique et la nourriture.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Musique live, mbagalum, tambours et danses tous les soirs dans un cadre en plein air, comme au village.
            </p>
            <Link
              to="/galerie"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary hover:underline"
            >
              Explorer la galerie culturelle
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Villages grid */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-2xl font-bold text-foreground mb-10">
            Les peuples du Cameroun celebres chez Chepele
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {VILLAGES.map(village => (
              <Link
                key={village.name}
                to="/galerie"
                className="group relative aspect-square rounded-xl overflow-hidden"
              >
                <img
                  src={village.img}
                  alt={`Village ${village.name} - Chepele`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-white font-semibold text-sm drop-shadow-lg">{village.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Packages / Events preview */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://chepele.com/wp-content/uploads/2025/08/DSC02525-1024x576.png"
            alt="Evenement Chepele"
            className="w-full h-full object-cover"
            width={1024}
            height={576}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            4 ans de vibe. Venez feter avec nous.
          </h2>
          <p className="mt-4 text-white/80 max-w-lg mx-auto">
            Fetes privees, anniversaires, soirees sport sur grand ecran. Tables de 6, 10 ou VIP disponibles.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { label: 'Table de 6', price: '25 000 XAF' },
              { label: 'Table de 10', price: '50 000 XAF' },
              { label: 'VIP', price: 'A partir de 100 000 XAF' },
            ].map(pkg => (
              <div key={pkg.label} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                <p className="text-white font-semibold">{pkg.label}</p>
                <p className="text-amber-300 text-sm font-medium mt-1">{pkg.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/evenements"
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
            >
              Voir les Evenements
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/10 text-white font-semibold text-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              Reserver un Package
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
