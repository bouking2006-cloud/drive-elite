import React from 'react';
import { MapPin, Plane, Hotel, Star, Clock, ChevronRight, Phone } from 'lucide-react';

const SERVICES = [
  {
    icon: <MapPin className="h-7 w-7" />,
    title: 'Livraison à Domicile',
    desc: 'Votre véhicule livré à votre adresse parisienne à l\'heure exacte que vous choisissez. Nous récupérons les clés à l\'issue de votre location.',
    detail: 'Couverture Paris intramuros et Île-de-France',
  },
  {
    icon: <Hotel className="h-7 w-7" />,
    title: 'Livraison en Hôtel',
    desc: 'Partenaires de tous les grands palaces parisiens — Plaza Athénée, Ritz, Le Meurice, George V. Votre voiture vous attend devant l\'entrée.',
    detail: 'Service valet disponible sur demande',
  },
  {
    icon: <Plane className="h-7 w-7" />,
    title: 'Transferts Aéroport',
    desc: 'Prise en charge directement au terminal d\'arrivée à Charles de Gaulle, Orly ou Le Bourget. Aucune attente, aucun stress.',
    detail: 'Tracking vol en temps réel inclus',
  },
  {
    icon: <Star className="h-7 w-7" />,
    title: 'Chauffeur Privé',
    desc: 'Nos chauffeurs certifiés NF Service prennent le volant pour vous. Idéal pour les soirées d\'exception, les déplacements d\'affaires ou les événements.',
    detail: 'Chauffeur disponible en robe de gala ou tenue affaires',
  },
  {
    icon: <Clock className="h-7 w-7" />,
    title: 'Disponibilité 24/7',
    desc: 'Besoin d\'un véhicule à 3h du matin pour un vol early morning ? Notre équipe de garde répond à toutes les demandes, à toute heure.',
    detail: 'Hotline VIP dédiée aux membres Premium',
  },
  {
    icon: <Phone className="h-7 w-7" />,
    title: 'Prestations Sur-Mesure',
    desc: 'Décoration florale, champagne à bord, playlist personnalisée, itinéraire gastronomique... Chaque détail peut être orchestré selon vos souhaits.',
    detail: 'Expériences uniques conçues à votre image',
  },
];

const EXPERIENCES = [
  {
    title: 'Week-end Évasion',
    image: 'https://images.unsplash.com/photo-1503376710356-70869a3cf344?q=80&w=1200&auto=format&fit=crop',
    desc: 'Porsche 911 + itinéraire secret dans les châteaux de la Loire. Hôtel 5* inclus sur demande.',
    tag: 'Populaire',
  },
  {
    title: 'Anniversaire VIP',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1200&auto=format&fit=crop',
    desc: 'AMG GT avec bouquet de roses, champagne Ruinart rosé et tour des lumières parisiennes.',
    tag: 'Romantique',
  },
  {
    title: 'Business Transfer',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop',
    desc: 'Classe S avec chauffeur pour toute une journée de rendez-vous. Connexion WiFi haut débit à bord.',
    tag: 'Affaires',
  },
];

export default function ConciergeriePage() {
  return (
    <main className="flex-1 w-full bg-primary min-h-screen">

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=2000&auto=format&fit=crop"
            alt="Paris Conciergerie"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-8 xl:px-0 text-center pt-20">
          <span className="font-accent text-accent text-sm tracking-widest uppercase mb-4 block">Service Exclusif</span>
          <h1 className="font-title text-5xl md:text-7xl text-text-main mb-6">
            La <span className="text-accent italic">Conciergerie</span>
            <span className="block text-3xl md:text-4xl mt-2 text-text-muted font-normal">DRIVE ELITE</span>
          </h1>
          <p className="text-text-muted text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Au-delà de la location, nous orchestrons des expériences automobiles uniques.
            Votre vision, notre expertise — livrée avec l'excellence d'un palace 5 étoiles.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#demande" className="inline-flex items-center justify-center h-14 px-10 text-base font-accent uppercase tracking-wider bg-accent text-primary hover:bg-accent-hover transition-colors shadow-gold">
              Faire une demande
            </a>
            <a href="tel:+33100000000" className="inline-flex items-center gap-2 h-14 px-10 text-base font-accent uppercase tracking-wider border border-accent text-accent hover:bg-accent hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              Appel direct
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-primary-light border-y border-primary-lighter px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-16">
            <span className="font-accent text-accent text-sm tracking-widest uppercase mb-3 block">Ce que nous faisons</span>
            <h2 className="font-title text-3xl md:text-5xl text-text-main">
              Nos <span className="text-accent italic">Prestations</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <div key={s.title} className="group flex flex-col gap-5 p-8 bg-primary border border-primary-lighter hover:border-accent/40 transition-all rounded-sm">
                <div className="text-accent p-3 border border-accent/20 rounded-sm w-fit group-hover:bg-accent/10 transition-colors">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-title text-xl text-text-main mb-2">{s.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-3">{s.desc}</p>
                  <p className="text-accent text-xs font-accent tracking-wide flex items-center gap-1.5">
                    <ChevronRight className="h-3.5 w-3.5" />
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="py-24 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-16">
            <span className="font-accent text-accent text-sm tracking-widest uppercase mb-3 block">Prêt à l'emploi</span>
            <h2 className="font-title text-3xl md:text-5xl text-text-main">
              Expériences <span className="text-accent italic">Signature</span>
            </h2>
            <p className="text-text-muted mt-4 max-w-2xl mx-auto">Des formules clé en main pensées pour les moments qui comptent. Tout est orchestré, rien n'est laissé au hasard.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXPERIENCES.map(exp => (
              <div key={exp.title} className="group relative overflow-hidden rounded-sm">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 text-xs font-accent font-bold uppercase">
                    {exp.tag}
                  </div>
                </div>
                <div className="p-6 bg-primary-light border border-t-0 border-primary-lighter">
                  <h3 className="font-title text-2xl text-text-main mb-2">{exp.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">{exp.desc}</p>
                  <a href="#demande" className="text-accent text-xs font-accent tracking-widest uppercase flex items-center gap-1.5 hover:gap-3 transition-all">
                    Sur devis <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury"
            className="h-full w-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8 xl:px-0 text-center">
          <p className="font-title text-2xl md:text-4xl text-text-main italic leading-relaxed mb-6">
            "Le luxe, c'est la précision de chaque détail orchestré avec l'élégance du naturel."
          </p>
          <span className="font-accent text-accent text-sm tracking-widest">— Alexandre Moreau, Fondateur DRIVE ELITE</span>
        </div>
      </section>

      {/* Request Form */}
      <section id="demande" className="py-24 bg-primary-light border-t border-primary-lighter px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <span className="font-accent text-accent text-sm tracking-widest uppercase mb-3 block">Demande Personnalisée</span>
            <h2 className="font-title text-3xl md:text-4xl text-text-main">
              Décrivez Votre <span className="text-accent italic">Vision</span>
            </h2>
            <p className="text-text-muted mt-4">Notre équipe vous rappelle dans les 2 heures pour construire votre expérience.</p>
          </div>

          <div className="bg-primary border border-primary-lighter rounded-sm p-8">
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Prénom & Nom</label>
                  <input type="text" placeholder="Jean Dupont" className="w-full bg-primary-light border border-primary-lighter px-4 py-3 text-text-main placeholder:text-text-muted/40 focus:border-accent focus:outline-none" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Téléphone</label>
                  <input type="tel" placeholder="+33 6 00 00 00 00" className="w-full bg-primary-light border border-primary-lighter px-4 py-3 text-text-main placeholder:text-text-muted/40 focus:border-accent focus:outline-none" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Type de prestation souhaitée</label>
                <select className="w-full bg-primary-light border border-primary-lighter px-4 py-3 text-text-main focus:border-accent focus:outline-none appearance-none">
                  <option>Livraison à domicile / hôtel</option>
                  <option>Transfert aéroport</option>
                  <option>Chauffeur privé</option>
                  <option>Expérience sur-mesure</option>
                  <option>Événement / Soirée</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Date souhaitée</label>
                  <input type="date" className="w-full bg-primary-light border border-primary-lighter px-4 py-3 text-text-main focus:border-accent focus:outline-none [color-scheme:dark]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Budget indicatif</label>
                  <select className="w-full bg-primary-light border border-primary-lighter px-4 py-3 text-text-main focus:border-accent focus:outline-none appearance-none">
                    <option>500€ – 1 000€</option>
                    <option>1 000€ – 3 000€</option>
                    <option>3 000€ – 5 000€</option>
                    <option>5 000€+</option>
                    <option>Non défini</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Décrivez votre demande</label>
                <textarea rows={5} placeholder="Occasion, véhicule préféré, lieu, attentes particulières..." className="w-full bg-primary-light border border-primary-lighter px-4 py-3 text-text-main placeholder:text-text-muted/40 focus:border-accent focus:outline-none resize-none" />
              </div>

              <button
                type="submit"
                className="self-start h-14 px-10 text-base font-accent uppercase tracking-wider bg-accent text-primary hover:bg-accent-hover transition-colors shadow-gold"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
