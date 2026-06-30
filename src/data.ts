import { MenuItem, GalleryItem, EventItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // === PLATS DU JOUR ===
  // Lundi
  {
    id: 'okonghobong',
    name: 'Okonghobong & Plantain',
    price: 2500,
    description: 'Okonghobong avec plantain mur, njagatu et coco ou banane bouillie.',
    category: 'Plats',
    day: 'Lundi',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pork_salad_lundi',
    name: 'Pork Salade',
    price: 3500,
    description: 'Notre specialite signature — porc grille avec salade fraiche. Le plat le plus demande.',
    category: 'Plats',
    day: 'Lundi',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  },
  // Mardi
  {
    id: 'kahti_kahti_mardi',
    name: 'Kahti-Kahti',
    price: 2500,
    description: 'Kahti-kahti avec coco et bitter leaf. Recette traditionnelle.',
    category: 'Plats',
    day: 'Mardi',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'achu_mardi',
    name: 'Achu',
    price: 3500,
    description: 'Achu — taro pile avec yellow soup. Un classique du Nord-Ouest Cameroun.',
    category: 'Plats',
    day: 'Mardi',
    imageUrl: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800'
  },
  // Mercredi
  {
    id: 'eru_mercredi',
    name: 'Eru avec Water Fufu ou Garri',
    price: 2500,
    description: 'Eru frais prepare a l\'huile de palme, servi avec water fufu ou garri.',
    category: 'Plats',
    day: 'Mercredi',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ogbono',
    name: 'Ogbono',
    price: 2500,
    description: 'Soupe ogbono avec water fufu ou garri.',
    category: 'Plats',
    day: 'Mercredi',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ndole_mercredi',
    name: 'Ndole & Plantains/Ignames',
    price: 2500,
    description: 'Ndole aux feuilles ameres avec plantains ou ignames blanches.',
    category: 'Plats',
    day: 'Mercredi',
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800'
  },
  // Jeudi
  {
    id: 'ekwang',
    name: 'Ekwang',
    price: 2500,
    description: 'Ekwang — manioc rape cuit dans des feuilles avec epices et huile de palme.',
    category: 'Plats',
    day: 'Jeudi',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'turning_coco',
    name: 'Turning Coco (Nangtarre)',
    price: 2500,
    description: 'Turning coco aussi appele nangtarre, avec corn-chaff.',
    category: 'Plats',
    day: 'Jeudi',
    imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800'
  },
  // Vendredi
  {
    id: 'bitter_leaf',
    name: 'Bitter Leaf avec Fufu Corn',
    price: 2500,
    description: 'Bitter leaf avec fufu corn, njagatu et cocoyam.',
    category: 'Plats',
    day: 'Vendredi',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pepper_soup_goat',
    name: 'Pepper Soup de Chevre',
    price: 4000,
    description: 'Pepper soup de chevre — soupe epicee traditionnelle.',
    category: 'Plats',
    day: 'Vendredi',
    imageUrl: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=800'
  },
  // Samedi
  {
    id: 'kahti_kahti_sam',
    name: 'Kahti-Kahti',
    price: 3000,
    description: 'Kahti-kahti du samedi — version genereuse.',
    category: 'Plats',
    day: 'Samedi',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'achu_yellow_soup',
    name: 'Achu avec Yellow Soup',
    price: 3500,
    description: 'Achu avec yellow soup. Taro pile dans une sauce jaune epicee.',
    category: 'Plats',
    day: 'Samedi',
    imageUrl: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'waterfufu_eru_sam',
    name: 'Water Fufu & Eru',
    price: 3000,
    description: 'Water fufu et eru du samedi.',
    category: 'Plats',
    day: 'Samedi',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tanchot_soup_sam',
    name: 'Tanchot Soup',
    price: 3000,
    description: 'Soupe tanchot — riche et epicee.',
    category: 'Plats',
    day: 'Samedi',
    imageUrl: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=800'
  },
  // Dimanche
  {
    id: 'pork_salad_dim',
    name: 'Pork Salade (Dimanche)',
    price: 3500,
    description: 'Pork salade du dimanche — 3 500 a 4 000 FCFA selon la portion.',
    category: 'Plats',
    day: 'Dimanche',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'kahti_kahti_dim',
    name: 'Kahti-Kahti (Dimanche)',
    price: 3000,
    description: 'Kahti-kahti du dimanche.',
    category: 'Plats',
    day: 'Dimanche',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'achu_dim',
    name: 'Achu avec Yellow Soup (Dimanche)',
    price: 3500,
    description: 'Achu avec yellow soup du dimanche.',
    category: 'Plats',
    day: 'Dimanche',
    imageUrl: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'waterfufu_eru_dim',
    name: 'Water Fufu & Eru (Dimanche)',
    price: 3000,
    description: 'Water fufu et eru du dimanche.',
    category: 'Plats',
    day: 'Dimanche',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tanchot_dim',
    name: 'Tanchot Soup (Dimanche)',
    price: 3000,
    description: 'Soupe tanchot du dimanche.',
    category: 'Plats',
    day: 'Dimanche',
    imageUrl: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'isewu',
    name: 'Isewu (chaque 4e dimanche)',
    price: 4000,
    description: 'Isewu — specialite disponible chaque 4e dimanche du mois.',
    category: 'Plats',
    day: 'Dimanche',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800'
  },
  // Plats signature (disponibles tous les jours)
  {
    id: 'nang_tare',
    name: 'Nang Tare',
    price: 3000,
    description: 'Nang Tare — plat signature Chepele, specialite traditionnelle du Nord-Ouest.',
    category: 'Plats',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ngom_tare',
    name: 'Ngom Tare',
    price: 3000,
    description: 'Ngom Tare — autre specialite signature de la maison.',
    category: 'Plats',
    imageUrl: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=800'
  },
  // === GRILLADES ===
  {
    id: 'grilled_chicken',
    name: 'Poulet Grille',
    price: 3000,
    description: 'Poulet grille avec plantains frits, plantains roties et plantain tape. Lun-Ven 3 000 / Sam-Dim 3 500 FCFA.',
    category: 'Grillades',
    imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'grilled_pork',
    name: 'Porc Grille',
    price: 3000,
    description: 'Porc grille au charbon. Lun-Ven 3 000 / Sam-Dim 3 500 FCFA.',
    category: 'Grillades',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gambas',
    name: 'Gambas (Crevettes)',
    price: 0,
    description: 'Crevettes grillees — disponibles sur commande uniquement.',
    category: 'Grillades',
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800'
  },
  // === BOISSONS ===
  {
    id: 'biere_cameroun',
    name: 'Bieres du Cameroun',
    price: 1000,
    description: 'Toutes les brasseries du Cameroun disponibles. 1 000 FCFA chacune.',
    category: 'Boissons',
    imageUrl: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'guinness',
    name: 'Guinness & Boissons Sucrees',
    price: 1000,
    description: 'Toutes les Guinness et boissons sucrees du Cameroun. 1 000 FCFA chacune.',
    category: 'Boissons',
    imageUrl: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'palm_wine',
    name: 'Vin de Palme Chepele',
    price: 1500,
    description: 'Vin de palme frais servi en coupe de bambou. Disponible samedi et dimanche.',
    category: 'Boissons',
    imageUrl: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cocktails',
    name: 'Cocktails',
    price: 7500,
    description: 'Cocktails disponibles — 7 500 a 10 000 FCFA.',
    category: 'Boissons',
    imageUrl: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'vins_spirits',
    name: 'Vins & Spiritueux',
    price: 0,
    description: 'Red/White wines, Whisky, Champagne, Vodka avec jus de fruits naturels.',
    category: 'Boissons',
    imageUrl: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=800'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Photos du restaurant
  {
    id: '1',
    title: 'Chepele - Le Restaurant',
    category: 'Ambiance',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Chepele-Original.png',
    description: 'Vue d\'ensemble du restaurant Chepele "Man with the Pot" a Douala.'
  },
  {
    id: '2',
    title: 'Terrasse a l\'Etage',
    category: 'Ambiance',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Chepele-Upstairs-2-1024x767.png',
    description: 'Notre terrasse a l\'etage pour des repas en plein air avec vue.'
  },
  {
    id: '3',
    title: 'Ambiance Village',
    category: 'Ambiance',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Chepele-5.png',
    description: 'L\'atmosphare villageoise authentique qui fait l\'identite de Chepele.'
  },
  {
    id: '4',
    title: 'Soiree au Restaurant',
    category: 'Ambiance',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Chepele-58.png',
    description: 'Ambiance festive avec musique live et danse traditionnelle.'
  },
  {
    id: '5',
    title: 'Energie Propre',
    category: 'Ambiance',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/cropped-cropped-Clean-Energy-Chepele-scaled-1-1024x614.png',
    description: 'Chepele s\'engage pour l\'energie propre et le developpement durable.'
  },
  {
    id: '6',
    title: 'Evenement Special',
    category: 'Ambiance',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/DSC02525-1024x576.png',
    description: 'Moments de partage et de celebration chez Chepele.'
  },
  // Villages culturels - immersion dans les traditions camerounaises
  {
    id: '7',
    title: 'Village Akum',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Akum-Chepele-Village-DLA.png',
    description: 'Representation du village Akum dans l\'espace culturel de Chepele.'
  },
  {
    id: '8',
    title: 'Village Awing',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Awing-Chepele-Village-DLA-.png',
    description: 'Le peuple Awing et ses traditions au coeur du restaurant.'
  },
  {
    id: '9',
    title: 'Village Bakweri',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Bakweri-Cheple-Village-DLA.png',
    description: 'La culture Bakweri du Mont Cameroun representee chez Chepele.'
  },
  {
    id: '10',
    title: 'Village Bamileke',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Bamileke-Chepele-Village-DLA-2.png',
    description: 'L\'art et les traditions Bamileke de l\'Ouest Cameroun.'
  },
  {
    id: '11',
    title: 'Village Bansoh',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Bansoh-Chepele-Village-DLA.png',
    description: 'Le peuple Bansoh et son patrimoine culturel.'
  },
  {
    id: '12',
    title: 'Village Batibo',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Batibo-Chepele-Village-DLA.png',
    description: 'Les traditions du peuple Batibo mises en valeur.'
  },
  {
    id: '13',
    title: 'Village Bum',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Bum-Chepele-Village.png',
    description: 'Le village Bum et son heritage dans l\'espace Chepele.'
  },
  {
    id: '14',
    title: 'Village Ewondo',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Ewondo-Chepele-Village-DLA.png',
    description: 'La culture Ewondo du Centre Cameroun celebree ici.'
  },
  {
    id: '15',
    title: 'Village Kom',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Kom-Chepele-Village-DLA.png',
    description: 'Le royaume Kom et ses traditions royales.'
  },
  {
    id: '16',
    title: 'Village Mankon',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Mankon-Chepele-Village-DLA.png',
    description: 'Le fon de Mankon et la richesse culturelle du Nord-Ouest.'
  },
  {
    id: '17',
    title: 'Village Nso',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/NSO-Chepele-Village-DLA.png',
    description: 'Le puissant royaume Nso et son Fon, celebres dans la region.'
  },
  {
    id: '18',
    title: 'Village Oku',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Oku-Chepele-Village-DLA.png',
    description: 'Oku, terre du miel blanc et des forets sacrees.'
  },
  {
    id: '19',
    title: 'Village Ndop',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Ndop-Chepele-VIllage-DLA.png',
    description: 'Ndop et son tissu traditionnel celebre dans tout le Cameroun.'
  },
  {
    id: '20',
    title: 'Village Nkambe',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Nkambe-Chepele-Village-DLA.png',
    description: 'Le peuple de Nkambe et ses traditions du Nord-Ouest.'
  },
  {
    id: '21',
    title: 'Village Nsongwa',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Nsongwa-Chepele-Village-DLA.png',
    description: 'Nsongwa et son patrimoine culturel.'
  },
  {
    id: '22',
    title: 'Village Pinyin',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Pinyin-Chepele-Village-DLA.png',
    description: 'Le peuple Pinyin et ses traditions.'
  },
  {
    id: '23',
    title: 'Village Santa',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Santa-Chepele-Village-DLA.png',
    description: 'Santa, carrefour culturel du Nord-Ouest Cameroun.'
  },
  {
    id: '24',
    title: 'Village Wum',
    category: 'Culture',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Wum-Chepele-Village-DLA.png',
    description: 'Wum et ses traditions du Menchum.'
  },
  // Photos de plats
  {
    id: '25',
    title: 'Turning Cocoyam',
    category: 'Plats',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/turning-cocoyam-chepele.jpg',
    description: 'Turning cocoyam — plat traditionnel servi chez Chepele.'
  },
  {
    id: '26',
    title: 'Achu Special',
    category: 'Plats',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/achu-special-chepele.jpg',
    description: 'Achu special — taro pile avec yellow soup.'
  },
  {
    id: '27',
    title: 'Khati Khati',
    category: 'Plats',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/khati-khati-chepele.jpg',
    description: 'Khati khati — un des plats signature de Chepele.'
  }
];

export const EVENT_ITEMS: EventItem[] = [
  {
    id: 'event-1',
    title: 'Soiree Afrobeat & Mbagalum',
    date: 'Sam. 26 Oct.',
    time: '19h00',
    description: 'Musique live, mbagalum, cercles de tambours et danses traditionnelles dans notre cadre villageois en plein air.',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Chepele-58.png',
    price: 'Entree libre pour les clients'
  },
  {
    id: 'event-2',
    title: 'Festin du Patrimoine Camerounais',
    date: 'Ven. 1 Nov.',
    time: '18h00',
    description: 'Soiree immersive : contes traditionnels, kora acoustique et buffet decouverte servi sur feuilles, calebasses et assiettes en bois.',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/DSC02525-1024x576.png',
    price: '15 000 XAF / personne'
  },
  {
    id: 'event-3',
    title: 'Braai du Dimanche',
    date: 'Dim. 3 Nov.',
    time: 'Toute la journee',
    description: 'Barbecue africain a volonte et vin de palme frais en coupe de bambou. Ideal pour les grandes tablees en famille.',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    price: '20 000 XAF / plateau'
  },
  {
    id: 'event-4',
    title: 'Nuit des Tambours',
    date: 'Jeu. 7 Nov.',
    time: '20h00',
    description: 'Cercle de tambours traditionnel avec musiciens locaux. Degustation de vin de palme et amuse-bouches offerts.',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Chepele-5.png',
    price: '5 000 XAF'
  },
  {
    id: 'event-5',
    title: 'Cours de Cuisine : Ndole',
    date: 'Sam. 9 Nov.',
    time: '10h00 - 14h00',
    description: 'Apprenez a preparer le Ndole avec notre chef Ngessman. Ingredients frais du marche, repas inclus.',
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    price: '25 000 XAF / personne'
  },
  {
    id: 'event-6',
    title: 'Celebration 4 Ans de Vibe',
    date: 'Ven. 15 Nov.',
    time: '19h00 - Minuit',
    description: 'Anniversaire de Chepele ! Buffet grillade illimite, danses traditionnelles, DJ et ambiance festive toute la nuit.',
    imageUrl: 'https://chepele.com/wp-content/uploads/2025/08/Chepele-Original.png',
    price: '18 000 XAF'
  }
];
