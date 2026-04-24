import React from 'react';

const GALLERY_ITEMS = [
  { src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop', alt: 'Mercedes nuit Paris', label: 'Flotte Luxe', tall: true },
  { src: 'https://images.unsplash.com/photo-1503376710356-70869a3cf344?q=80&w=1600&auto=format&fit=crop', alt: 'Porsche 911', label: 'Sportives', tall: false },
  { src: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1600&auto=format&fit=crop', alt: 'Tesla Model S', label: 'Électriques', tall: false },
  { src: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=1600&auto=format&fit=crop', alt: 'Range Rover', label: 'SUV Premium', tall: true },
  { src: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1600&auto=format&fit=crop', alt: 'AMG GT', label: 'AMG Collection', tall: false },
  { src: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1600&auto=format&fit=crop', alt: 'Paris Nuit', label: 'Paris by Night', tall: false },
  { src: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1600&auto=format&fit=crop', alt: 'Classe S intérieur', label: 'Intérieurs Luxe', tall: true },
  { src: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1600&auto=format&fit=crop', alt: 'Audi RS6', label: 'RS Collection', tall: false },
  { src: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1600&auto=format&fit=crop', alt: 'Cayenne Turbo', label: 'SUV Sport', tall: false },
  { src: 'https://images.unsplash.com/photo-1606016159991-dde5560b457e?q=80&w=1600&auto=format&fit=crop', alt: 'Livraison client', label: 'Livraisons VIP', tall: true },
  { src: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=1600&auto=format&fit=crop', alt: 'BMW M4', label: 'BMW M', tall: false },
  { src: 'https://images.unsplash.com/photo-1555353540-64fd1b620922?q=80&w=1600&auto=format&fit=crop', alt: 'BMW Série 7', label: 'Grand Tourisme', tall: false },
];

const FILTERS = ['Tous', 'Flotte', 'Événements', 'Livraisons', 'Intérieurs'];

export default function GaleriePage() {
  return (
    <main className="flex-1 w-full bg-primary min-h-screen">

      {/* Header */}
      <div className="bg-primary-light border-b border-primary-lighter pt-32 pb-16 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-[1280px] text-center">
          <span className="font-accent text-accent text-sm tracking-widest uppercase mb-3 block">Galerie</span>
          <h1 className="font-title text-4xl md:text-6xl text-text-main mb-4">
            Chaque Image, <span className="text-accent italic">une Expérience</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Découvrez notre flotte sous son meilleur jour — véhicules, livraisons d'exception et moments inoubliables.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-primary-lighter bg-primary-light/50">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 xl:px-0 py-4 flex gap-6 overflow-x-auto">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`whitespace-nowrap text-sm font-accent tracking-wide uppercase pb-2 transition-colors border-b-2 ${
                f === 'Tous' ? 'border-accent text-accent' : 'border-transparent text-text-muted hover:text-text-main'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 xl:px-0 py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-sm break-inside-avoid cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  item.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-300 flex items-end p-6">
                <span className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-accent text-sm tracking-widest uppercase text-accent">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA bottom */}
      <div className="border-t border-primary-lighter bg-primary-light py-16 text-center px-4">
        <h2 className="font-title text-3xl text-text-main mb-4">
          Prêt à vivre l'<span className="text-accent italic">expérience</span>&nbsp;?
        </h2>
        <p className="text-text-muted mb-8">Réservez dès maintenant l'un de nos véhicules d'exception.</p>
        <a href="/flotte">
          <button className="inline-flex items-center justify-center h-14 px-10 text-base font-accent uppercase tracking-wider bg-accent text-primary hover:bg-accent-hover transition-colors">
            Voir la Flotte
          </button>
        </a>
      </div>
    </main>
  );
}
