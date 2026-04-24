"use client"

import React, { useState, useMemo } from 'react';
import { cars } from '@/data/cars';
import { CarCard } from '@/components/features/CarCard';
import { SlidersHorizontal, X } from 'lucide-react';

const CATEGORIES = ['Tous', 'Luxe', 'SUV', 'Sportive', 'Électrique'];
const TRANSMISSIONS = ['Toutes', 'Automatique', 'Manuelle'];

export default function FlottePage() {
  const [category, setCategory] = useState('Tous');
  const [transmission, setTransmission] = useState('Toutes');
  const [availableOnly, setAvailableOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(750);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    return cars.filter(car => {
      if (category !== 'Tous' && car.category !== category) return false;
      if (transmission !== 'Toutes' && car.transmission !== transmission) return false;
      if (availableOnly && !car.available) return false;
      if (car.pricePerDay > maxPrice) return false;
      return true;
    });
  }, [category, transmission, availableOnly, maxPrice]);

  const resetFilters = () => {
    setCategory('Tous');
    setTransmission('Toutes');
    setAvailableOnly(false);
    setMaxPrice(750);
  };

  const activeFiltersCount = [
    category !== 'Tous',
    transmission !== 'Toutes',
    availableOnly,
    maxPrice !== 750,
  ].filter(Boolean).length;

  const FilterPanel = () => (
    <div className="flex flex-col gap-8">
      {/* Categories */}
      <div>
        <h3 className="font-accent text-xs tracking-widest uppercase text-text-main mb-4">Catégorie</h3>
        <div className="flex flex-col gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`flex items-center justify-between py-2 text-sm transition-colors text-left ${
                category === cat ? 'text-accent' : 'text-text-muted hover:text-text-main'
              }`}
            >
              <span>{cat}</span>
              <span className={`h-2 w-2 rounded-full transition-colors ${category === cat ? 'bg-accent' : 'bg-primary-lighter'}`}></span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-accent text-xs tracking-widest uppercase text-text-main mb-4">Prix max / jour</h3>
        <div className="flex items-center justify-between text-sm mb-3">
          <span className="text-text-muted">150€</span>
          <span className="text-accent font-accent font-semibold">{maxPrice}€</span>
        </div>
        <input
          type="range"
          min="150"
          max="750"
          step="50"
          value={maxPrice}
          onChange={e => setMaxPrice(Number(e.target.value))}
          className="w-full accent-[#D4AF37] cursor-pointer"
        />
      </div>

      {/* Transmission */}
      <div>
        <h3 className="font-accent text-xs tracking-widest uppercase text-text-main mb-4">Transmission</h3>
        <div className="flex flex-col gap-2">
          {TRANSMISSIONS.map(t => (
            <button
              key={t}
              onClick={() => setTransmission(t)}
              className={`flex items-center justify-between py-2 text-sm transition-colors text-left ${
                transmission === t ? 'text-accent' : 'text-text-muted hover:text-text-main'
              }`}
            >
              <span>{t}</span>
              <span className={`h-2 w-2 rounded-full transition-colors ${transmission === t ? 'bg-accent' : 'bg-primary-lighter'}`}></span>
            </button>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-accent text-xs tracking-widest uppercase text-text-main mb-4">Disponibilité</h3>
        <label className="flex items-center gap-3 cursor-pointer group">
          <div
            onClick={() => setAvailableOnly(v => !v)}
            className={`relative h-5 w-9 rounded-full transition-colors ${availableOnly ? 'bg-accent' : 'bg-primary-lighter'}`}
          >
            <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${availableOnly ? 'translate-x-4' : 'translate-x-0.5'}`}></span>
          </div>
          <span className="text-sm text-text-muted group-hover:text-text-main transition-colors">Disponibles uniquement</span>
        </label>
      </div>

      {/* Reset */}
      {activeFiltersCount > 0 && (
        <button
          onClick={resetFilters}
          className="flex items-center gap-2 text-xs font-accent text-text-muted hover:text-accent transition-colors uppercase tracking-widest"
        >
          <X className="h-3.5 w-3.5" />
          Réinitialiser les filtres
        </button>
      )}
    </div>
  );

  return (
    <main className="flex-1 w-full bg-primary min-h-screen">
      {/* Page Hero */}
      <div className="relative bg-primary-light border-b border-primary-lighter pt-32 pb-16 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-[1280px]">
          <span className="font-accent text-accent text-sm tracking-widest uppercase mb-3 block">Notre Collection</span>
          <h1 className="font-title text-4xl md:text-6xl text-text-main mb-4">
            La <span className="text-accent italic">Flotte Complète</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl">
            {cars.length} véhicules d'exception sélectionnés pour une clientèle qui n'accepte que le meilleur.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 md:px-8 xl:px-0 py-12">
        <div className="flex gap-10">

          {/* Sidebar Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-28 bg-primary-light border border-primary-lighter p-6 rounded-sm">
              <h2 className="font-accent text-sm tracking-widest uppercase text-text-main mb-6 pb-4 border-b border-primary-lighter">
                Filtres {activeFiltersCount > 0 && <span className="ml-2 bg-accent text-primary text-xs px-2 py-0.5 rounded-full">{activeFiltersCount}</span>}
              </h2>
              <FilterPanel />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">

            {/* Mobile filter toggle + count */}
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <p className="text-sm text-text-muted">
                <span className="text-text-main font-semibold">{filtered.length}</span> véhicule{filtered.length !== 1 ? 's' : ''}
              </p>
              <button
                onClick={() => setSidebarOpen(v => !v)}
                className="flex items-center gap-2 text-sm font-accent text-accent border border-accent/30 px-4 py-2 hover:bg-accent/10 transition-colors"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filtres {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </button>
            </div>

            {/* Mobile sidebar */}
            {sidebarOpen && (
              <div className="lg:hidden mb-8 bg-primary-light border border-primary-lighter p-6 rounded-sm">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-primary-lighter">
                  <span className="font-accent text-sm tracking-widest uppercase text-text-main">Filtres</span>
                  <button onClick={() => setSidebarOpen(false)}><X className="h-4 w-4 text-text-muted" /></button>
                </div>
                <FilterPanel />
              </div>
            )}

            {/* Results count desktop */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="text-sm text-text-muted">
                <span className="text-text-main font-semibold">{filtered.length}</span> véhicule{filtered.length !== 1 ? 's' : ''} correspondent à votre recherche
              </p>
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map(car => (
                  <CarCard
                    key={car.id}
                    slug={car.slug}
                    name={car.name}
                    category={car.category}
                    pricePerDay={car.pricePerDay}
                    imageUrl={car.images[0]}
                    seats={car.seats}
                    transmission={car.transmission}
                    available={car.available}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 border border-primary-lighter bg-primary-light rounded-sm text-center px-4">
                <span className="text-4xl mb-4">🔍</span>
                <p className="text-text-main font-title text-xl mb-2">Aucun véhicule trouvé</p>
                <p className="text-text-muted text-sm mb-4">Essayez d'élargir vos critères de recherche.</p>
                <button onClick={resetFilters} className="text-accent text-sm font-accent underline-offset-4 hover:underline">
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
