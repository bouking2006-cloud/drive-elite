"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { CarCard } from '@/components/features/CarCard';
import { cars } from '@/data/cars';
import { Button } from '@/components/ui/Button';

const FILTERS = ['Tous', 'Luxe', 'SUV', 'Sportive', 'Électrique'];

export function VehiclesSection() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filteredCars = cars
    .filter(car => activeFilter === 'Tous' || car.category === activeFilter)
    .slice(0, 8);

  return (
    <section className="py-24 bg-primary px-4 md:px-8 xl:px-0">
      <div className="mx-auto max-w-[1280px]">

        {/* Header & Filters */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-primary-lighter pb-8">
          <div>
            <span className="font-accent text-accent text-sm tracking-widest uppercase mb-2 block">Notre Flotte</span>
            <h2 className="font-title text-4xl text-text-main md:text-5xl">
              Véhicules d'Exception
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4 font-accent text-xs">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 uppercase tracking-wide transition-colors ${
                  activeFilter === filter
                    ? 'border-b-2 border-accent text-accent'
                    : 'text-text-muted hover:text-text-main'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCars.map(car => (
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

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link href="/flotte">
            <Button variant="outline" size="lg">
              Voir toute la flotte — 20+ véhicules
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}
