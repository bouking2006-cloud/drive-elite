export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  text: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sophie Martin',
    handle: '@sophiemartin_exec',
    text: "Un service irréprochable du début à la fin. La Classe S était dans un état clinique. Livraison directe à mon hôtel à 7h du matin sans le moindre retard. C'est ça le vrai luxe.",
    date: 'Octobre 2025'
  },
  {
    id: '2',
    name: 'Karim Benali',
    handle: '@k_benali',
    text: "J'ai loué la RS6 pour un week-end en Normandie. Réservation fluide, équipe hyper réactive sur WhatsApp. La voiture est incroyable et l'expérience client au niveau des grands palaces.",
    date: 'Septembre 2025'
  },
  {
    id: '3',
    name: 'Julie Durand',
    handle: '@julied_paris',
    text: "Disponibilité de dernière minute impressionnante. En moins de 2h, le Range Rover m'attendait devant chez moi pour mon départ en montagne. Merci à l'équipe Drive Elite pour leur flexibilité.",
    date: 'Août 2025'
  },
  {
    id: '4',
    name: 'Thomas Leroy',
    handle: '@thomasleroy.invest',
    text: "Rien à dire. C'est du très haut niveau. J'utilise régulièrement des services de location premium lors de mes déplacements à Paris, DRIVE ELITE surclasse nettement la concurrence.",
    date: 'Juillet 2025'
  },
  {
    id: '5',
    name: 'Inès Rachidi',
    handle: '@ines.rach',
    text: "Location d'une 911 pour surprendre mon mari. L'équipe a même prévu une bouteille de champagne à l'arrivée (en tant que passagers, bien sûr !). Une conciergerie d'exception.",
    date: 'Juin 2025'
  },
  {
    id: '6',
    name: 'Marc Dubois',
    handle: '@marcdubois_off',
    text: "Véhicules récents, propres mécaniquement et esthétiquement. Je recommande chaudement la Model S Plaid, une expérience de conduite surréaliste facilitée par la compétence du staff.",
    date: 'Mai 2025'
  }
];
