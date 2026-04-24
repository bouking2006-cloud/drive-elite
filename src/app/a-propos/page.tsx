import React from 'react';
import { Award, Heart, Shield } from 'lucide-react';

const TEAM = [
  {
    name: 'Alexandre Moreau',
    role: 'Fondateur & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&facepad=4&face=1',
    bio: 'Passionné d\'automobiles depuis l\'enfance, Alexandre a fondé DRIVE ELITE avec la conviction que la location premium devait atteindre les standards des grands palaces parisiens.',
  },
  {
    name: 'Nathalie Vernet',
    role: 'Directrice des Opérations',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop',
    bio: 'Avec 12 ans d\'expérience dans l\'hôtellerie 5 étoiles, Nathalie a structuré des processus d\'excellence opérationnelle qui garantissent une expérience irréprochable à chaque location.',
  },
  {
    name: 'Romain Khalil',
    role: 'Responsable Flotte',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    bio: 'Ancien ingénieur chez Mercedes-Benz France, Romain supervise la sélection et l\'entretien de chaque véhicule de la flotte selon des critères d\'exigence absolue.',
  },
  {
    name: 'Camille Besson',
    role: 'Responsable Conciergerie',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    bio: 'Spécialiste de la relation clientèle VIP, Camille orchestre les demandes sur-mesure et s\'assure que chaque client repart avec le sourire — et l\'envie de revenir.',
  },
];

const VALUES = [
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Excellence',
    text: 'Chaque véhicule, chaque interaction, chaque détail est soumis à nos critères de qualité premium. Nous ne tolérons rien de moins que le meilleur.',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Fiabilité',
    text: 'Ponctualité et transparence sont nos piliers. Un véhicule confirmé est un véhicule livré — sans surprise, sans compromis, dans l\'état promis.',
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Service',
    text: 'Nous traitons chaque client comme un hôte de marque. Notre équipe est disponible 24/7 pour anticiper vos besoins et dépasser vos attentes.',
  },
];

const MILESTONES = [
  { year: '2018', event: 'Fondation de DRIVE ELITE avec une flotte de 8 véhicules premium.' },
  { year: '2020', event: 'Lancement du service de conciergerie VIP et livraison à domicile.' },
  { year: '2022', event: 'Extension de la flotte à 100+ véhicules. Ouverture de l\'agence George V.' },
  { year: '2024', event: 'Intégration des véhicules électriques haut de gamme. 10 000 clients satisfaits.' },
  { year: '2025', event: 'Partenariat avec les grands palaces parisiens. Flotte portée à 200+ véhicules.' },
];

export default function AProposPage() {
  return (
    <main className="flex-1 w-full bg-primary min-h-screen">

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop"
            alt="DRIVE ELITE"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-8 xl:px-0 text-center">
          <span className="font-accent text-accent text-sm tracking-widest uppercase mb-3 block">Notre Maison</span>
          <h1 className="font-title text-4xl md:text-6xl text-text-main mb-6">
            L'Histoire de <span className="text-accent italic">DRIVE ELITE</span>
          </h1>
          <p className="text-text-muted text-xl max-w-3xl mx-auto leading-relaxed">
            Fondée à Paris en 2018 par des passionnés d'automobiles et d'excellence, DRIVE ELITE est née d'une conviction simple :
            la location de voitures premium devait être à la hauteur des véhicules qu'elle propose.
          </p>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-20 bg-primary-light border-y border-primary-lighter px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-16">
            <h2 className="font-title text-3xl md:text-4xl text-text-main">
              Notre <span className="text-accent italic">Parcours</span>
            </h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary-lighter md:-translate-x-px"></div>

            <div className="flex flex-col gap-10">
              {MILESTONES.map((m, i) => (
                <div key={m.year} className={`relative flex gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 h-4 w-4 rounded-full bg-accent border-4 border-primary -translate-x-1.5 md:-translate-x-2 top-1"></div>
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-primary border border-primary-lighter p-6 rounded-sm inline-block text-left">
                      <span className="font-accent text-accent text-sm tracking-widest block mb-2">{m.year}</span>
                      <p className="text-text-muted text-sm">{m.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-16">
            <span className="font-accent text-accent text-sm tracking-widest uppercase mb-3 block">Ce qui nous anime</span>
            <h2 className="font-title text-3xl md:text-5xl text-text-main">
              Nos <span className="text-accent italic">Valeurs</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map(v => (
              <div key={v.title} className="group flex flex-col items-center text-center p-10 border border-primary-lighter hover:border-accent/40 transition-colors bg-primary-light rounded-sm">
                <div className="mb-6 text-accent p-4 border border-accent/20 rounded-sm group-hover:bg-accent/10 transition-colors">
                  {v.icon}
                </div>
                <h3 className="font-title text-2xl text-text-main mb-4">{v.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-primary-light border-y border-primary-lighter px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-16">
            <span className="font-accent text-accent text-sm tracking-widest uppercase mb-3 block">Les Visages</span>
            <h2 className="font-title text-3xl md:text-5xl text-text-main">
              Notre <span className="text-accent italic">Équipe</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map(member => (
              <div key={member.name} className="group flex flex-col items-center text-center">
                <div className="relative mb-6 h-36 w-36 overflow-hidden rounded-full border-2 border-primary-lighter group-hover:border-accent/50 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-title text-xl text-text-main mb-1">{member.name}</h3>
                <span className="font-accent text-accent text-xs tracking-widest uppercase block mb-3">{member.role}</span>
                <p className="text-text-muted text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Certifications */}
      <section className="py-16 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-[1280px] text-center">
          <h2 className="font-title text-2xl text-text-muted mb-10">Nos Partenaires & Certifications</h2>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 hover:opacity-70 transition-opacity">
            {['MERCEDES-BENZ', 'PORSCHE', 'BMW', 'AUDI', 'LAND ROVER', 'TESLA'].map(p => (
              <span key={p} className="font-accent text-xs tracking-widest text-text-muted uppercase">{p}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
