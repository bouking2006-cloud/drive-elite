"use client"

import React from 'react'
import { Button } from '@/components/ui/Button'
import { Calendar, Car, MapPin } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxe automobile Paris nuit"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 md:px-8 xl:px-0 pt-20">
        <div className="max-w-3xl">
          <h1 className="font-title text-5xl leading-tight text-text-main md:text-7xl lg:text-8xl">
            Location de Voitures <span className="text-accent italic block">d'Exception à Paris</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-text-muted md:text-xl">
            Découvrez notre flotte premium disponible 24/7. L'excellence sur quatre roues, conçue pour une clientèle exigeante.
          </p>
        </div>

        {/* Search Form */}
        <div className="mt-16 bg-primary-light/90 backdrop-blur-md border border-primary-lighter p-6 sm:p-8 md:rounded-sm md:w-[90%] lg:w-[80%] shadow-2xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:items-end">
            
            {/* Start Date */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-accent tracking-widest text-text-muted">DÉPART</label>
              <div className="flex items-center gap-3 border-b border-primary-lighter bg-transparent py-2 focus-within:border-accent transition-colors">
                <Calendar className="h-5 w-5 text-accent" />
                <input type="text" placeholder="Ajouter une date" className="w-full bg-transparent text-sm text-text-main focus:outline-none" readOnly />
              </div>
            </div>

            {/* End Date */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-accent tracking-widest text-text-muted">RETOUR</label>
              <div className="flex items-center gap-3 border-b border-primary-lighter bg-transparent py-2 focus-within:border-accent transition-colors">
                <Calendar className="h-5 w-5 text-accent" />
                <input type="text" placeholder="Ajouter une date" className="w-full bg-transparent text-sm text-text-main focus:outline-none" readOnly />
              </div>
            </div>

            {/* Category */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-accent tracking-widest text-text-muted">CATÉGORIE</label>
              <div className="flex items-center gap-3 border-b border-primary-lighter bg-transparent py-2 focus-within:border-accent transition-colors">
                <Car className="h-5 w-5 text-accent" />
                <select className="w-full bg-transparent text-sm text-text-main focus:outline-none appearance-none cursor-pointer">
                  <option className="bg-primary text-text-main">Tous les véhicules</option>
                  <option className="bg-primary text-text-main">Luxe</option>
                  <option className="bg-primary text-text-main">SUV & 4x4</option>
                  <option className="bg-primary text-text-main">Sportives</option>
                  <option className="bg-primary text-text-main">Électriques</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <Button size="lg" className="w-full">
              RECHERCHER
            </Button>
          </div>
        </div>

        {/* Secondary CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Button variant="outline">Voir la Flotte</Button>
          <Button variant="link" className="text-sm">Réservation Express &rarr;</Button>
        </div>
      </div>
    </section>
  )
}
