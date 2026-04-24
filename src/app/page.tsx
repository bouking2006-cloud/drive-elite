import React from 'react';
import { HeroSection } from '@/components/layout/HeroSection';
import { VehiclesSection } from '@/components/layout/VehiclesSection';
import { TestimonialCard } from '@/components/features/TestimonialCard';
import { Button } from '@/components/ui/Button';
import { testimonials } from '@/data/testimonials';

export default function Home() {
  return (
    <main className="flex-1 w-full bg-primary flex flex-col">
      <HeroSection />
      <VehiclesSection />

      {/* Categories Section */}
      <section className="py-24 bg-primary-light border-y border-primary-lighter">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 xl:px-0">
          <h2 className="font-title text-4xl text-center text-text-main mb-16 md:text-5xl">
            Choisissez votre <span className="text-accent italic">Expérience</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cat 1 */}
            <div className="group relative h-[400px] overflow-hidden rounded-sm">
              <img src="https://images.unsplash.com/photo-1606664515524-ed2f786a0b12?q=80&w=1000&auto=format&fit=crop" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Luxe" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
              <div className="absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/20"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="font-title text-3xl text-text-main mb-2">Classe Luxe</h3>
                <p className="text-text-muted mb-4 max-w-[250px]">L'apogée du raffinement et du confort pour vos déplacements V.I.P.</p>
                <Button variant="link" className="p-0 h-auto text-accent text-sm font-semibold">Découvrir les Limousines &rarr;</Button>
              </div>
            </div>

            {/* Cat 2 */}
            <div className="group relative h-[400px] overflow-hidden rounded-sm">
              <img src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=1000&auto=format&fit=crop" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="SUV" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
              <div className="absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/20"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="font-title text-3xl text-text-main mb-2">SUV Premium</h3>
                <p className="text-text-muted mb-4 max-w-[250px]">Espace, charisme et domination sur la route avec nos tout-terrains exclusifs.</p>
                <Button variant="link" className="p-0 h-auto text-accent text-sm font-semibold">Découvrir les SUV &rarr;</Button>
              </div>
            </div>

            {/* Cat 3 */}
            <div className="group relative h-[400px] overflow-hidden rounded-sm">
              <img src="https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=1000&auto=format&fit=crop" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Sportives" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
              <div className="absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/20"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="font-title text-3xl text-text-main mb-2">Sportives</h3>
                <p className="text-text-muted mb-4 max-w-[250px]">L'adrénaline à l'état pur. Des performances terrifiantes, un design sculptural.</p>
                <Button variant="link" className="p-0 h-auto text-accent text-sm font-semibold">Découvrir les Sportives &rarr;</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Paris Nuit */}
      <section className="relative flex min-h-[500px] items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=2000&auto=format&fit=crop" 
            alt="Paris Nuit"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-title text-4xl text-text-main md:text-6xl mb-8">
            Réservez Votre Véhicule en <span className="text-accent italic">3 Clics</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 mb-12 text-sm text-text-muted uppercase tracking-widest font-accent">
            <span className="flex items-center gap-2"><span className="text-accent">✓</span> Système de réservation instantané</span>
            <span className="hidden md:block text-primary-lighter">|</span>
            <span className="flex items-center gap-2"><span className="text-accent">✓</span> Confirmation immédiate par email</span>
          </div>
          <Button size="lg" className="w-full md:w-auto shadow-gold">
            Commencer la réservation
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-16">
            <span className="font-accent text-accent text-sm tracking-widest uppercase mb-2 block">Témoignages</span>
            <h2 className="font-title text-4xl text-text-main md:text-5xl">
              Ce que disent <span className="text-accent italic">nos clients</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <TestimonialCard 
                key={t.id}
                name={t.name}
                handle={t.handle}
                text={t.text}
                date={t.date}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-light border-y border-primary-lighter">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-primary-lighter">
            <div className="flex flex-col items-center justify-center p-6">
              <span className="font-title text-5xl md:text-6xl text-accent mb-2">200+</span>
              <span className="font-accent text-sm uppercase tracking-widest text-text-main">Véhicules Premium</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 border-t md:border-none">
              <span className="font-title text-5xl md:text-6xl text-accent mb-2">15k+</span>
              <span className="font-accent text-sm uppercase tracking-widest text-text-main">Clients Satisfaits</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 border-t md:border-none">
              <span className="font-title text-5xl md:text-6xl text-accent mb-2">24/7</span>
              <span className="font-accent text-sm uppercase tracking-widest text-text-main">Service Client</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
