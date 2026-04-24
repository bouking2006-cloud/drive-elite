import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cars } from '@/data/cars';
import { Button } from '@/components/ui/Button';
import {
  Users, Gauge, Zap, BriefcaseBusiness, Fuel,
  Wind, Shield, Music, Wifi, Navigation, Baby, ArrowLeft,
  CheckCircle2
} from 'lucide-react';

const FEATURE_ICONS: Record<string, React.ReactNode> = {
  'Autopilot': <Gauge className="h-4 w-4" />,
  'Audio': <Music className="h-4 w-4" />,
  'Wifi': <Wifi className="h-4 w-4" />,
  'GPS': <Navigation className="h-4 w-4" />,
  'Siège': <Baby className="h-4 w-4" />,
};

function getFeatureIcon(feature: string) {
  for (const [key, icon] of Object.entries(FEATURE_ICONS)) {
    if (feature.toLowerCase().includes(key.toLowerCase())) return icon;
  }
  return <CheckCircle2 className="h-4 w-4" />;
}

export function generateStaticParams() {
  return cars.map(car => ({ slug: car.slug }));
}

export default function CarDetailPage({ params }: { params: { slug: string } }) {
  const car = cars.find(c => c.slug === params.slug);
  if (!car) notFound();

  const similar = cars
    .filter(c => c.category === car.category && c.id !== car.id)
    .slice(0, 3);

  return (
    <main className="flex-1 w-full bg-primary min-h-screen">

      {/* Back */}
      <div className="pt-28 pb-4 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-[1280px]">
          <Link href="/flotte" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors font-accent">
            <ArrowLeft className="h-4 w-4" />
            Retour à la flotte
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[55vh] min-h-[400px] bg-primary-lighter overflow-hidden">
        <img
          src={car.images[0]}
          alt={car.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent"></div>

        {/* Badge */}
        <div className={`absolute top-6 right-6 flex items-center gap-1.5 px-4 py-2 text-sm font-accent font-semibold backdrop-blur-sm ${
          car.available
            ? 'bg-success/20 text-success border border-success/30'
            : 'bg-danger/20 text-danger border border-danger/30'
        }`}>
          <span className={`h-2 w-2 rounded-full ${car.available ? 'bg-success' : 'bg-danger'}`}></span>
          {car.available ? 'Disponible à la réservation' : 'Actuellement réservé'}
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 xl:px-0 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left col */}
          <div className="lg:col-span-2 flex flex-col gap-10">

            {/* Title */}
            <div>
              <span className="font-accent text-accent text-sm tracking-widest uppercase mb-2 block">{car.category} · {car.year}</span>
              <h1 className="font-title text-4xl md:text-5xl text-text-main mb-4">{car.name}</h1>
              <p className="text-text-muted text-lg leading-relaxed max-w-2xl">{car.description}</p>
            </div>

            {/* Specs Grid */}
            <div>
              <h2 className="font-title text-2xl text-text-main mb-6">Caractéristiques Techniques</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: <Gauge className="h-5 w-5" />, label: 'Puissance', value: `${car.power} ch` },
                  { icon: <Wind className="h-5 w-5" />, label: '0 à 100 km/h', value: car.acceleration },
                  { icon: <Fuel className="h-5 w-5" />, label: 'Consommation', value: car.consumption },
                  { icon: <Users className="h-5 w-5" />, label: 'Places', value: `${car.seats} places` },
                  { icon: <BriefcaseBusiness className="h-5 w-5" />, label: 'Bagages', value: `${car.luggage} valises` },
                  { icon: <Zap className="h-5 w-5" />, label: 'Transmission', value: car.transmission },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="bg-primary-light border border-primary-lighter p-4 rounded-sm flex flex-col gap-2">
                    <div className="text-accent">{icon}</div>
                    <span className="text-xs font-accent tracking-widest text-text-muted uppercase">{label}</span>
                    <span className="text-text-main font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div>
              <h2 className="font-title text-2xl text-text-main mb-6">Équipements & Options</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3 p-3 bg-primary-light border border-primary-lighter rounded-sm">
                    <span className="text-accent shrink-0">{getFeatureIcon(feature)}</span>
                    <span className="text-sm text-text-muted">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right col — sticky booking card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="bg-primary-light border border-primary-lighter rounded-sm overflow-hidden shadow-[0_8px_30px_rgba(212,175,55,0.1)]">

                {/* Price */}
                <div className="p-6 border-b border-primary-lighter bg-primary-lighter/30">
                  <span className="block text-xs font-accent tracking-widest text-text-muted uppercase mb-1">Tarif</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-title text-5xl text-accent">{car.pricePerDay}€</span>
                    <span className="text-text-muted">/jour</span>
                  </div>
                </div>

                {/* Booking Form */}
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Date de départ</label>
                    <input
                      type="date"
                      className="w-full bg-primary border border-primary-lighter px-3 py-2.5 text-sm text-text-main focus:border-accent focus:outline-none [color-scheme:dark]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Date de retour</label>
                    <input
                      type="date"
                      className="w-full bg-primary border border-primary-lighter px-3 py-2.5 text-sm text-text-main focus:border-accent focus:outline-none [color-scheme:dark]"
                    />
                  </div>

                  <Link href="/reservation" className="mt-2">
                    <Button className="w-full" size="lg" disabled={!car.available}>
                      {car.available ? 'Réserver ce véhicule' : 'Indisponible'}
                    </Button>
                  </Link>

                  <p className="text-center text-xs text-text-muted">
                    <Shield className="h-3.5 w-3.5 inline mr-1 text-accent" />
                    Annulation gratuite 48h avant
                  </p>
                </div>

                {/* Perks */}
                <div className="border-t border-primary-lighter p-6 flex flex-col gap-3">
                  {['Livraison à domicile / hôtel', 'Plein d\'essence inclus', 'Assistance 24/7'].map(perk => (
                    <div key={perk} className="flex items-center gap-2 text-sm text-text-muted">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      {perk}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Vehicles */}
        {similar.length > 0 && (
          <section className="mt-20 pt-12 border-t border-primary-lighter">
            <h2 className="font-title text-3xl text-text-main mb-8">
              Véhicules <span className="text-accent italic">Similaires</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similar.map(c => (
                <Link key={c.id} href={`/flotte/${c.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-primary-lighter mb-4">
                    <img
                      src={c.images[0]}
                      alt={c.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  </div>
                  <h3 className="font-title text-xl text-text-main group-hover:text-accent transition-colors mb-1">{c.name}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-muted">{c.category}</span>
                    <span className="text-accent font-semibold">{c.pricePerDay}€/jour</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
