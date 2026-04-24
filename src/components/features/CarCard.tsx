import React from 'react'
import Link from 'next/link'
import { Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export interface CarCardProps {
  slug: string
  name: string
  category: string
  pricePerDay: number
  imageUrl: string
  seats: number
  transmission: string
  available: boolean
}

export function CarCard({ slug, name, category, pricePerDay, imageUrl, seats, transmission, available }: CarCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-sm bg-primary-light shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)]">

      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary-lighter">
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Availability Badge */}
        <div className={`absolute right-4 top-4 flex items-center gap-1.5 px-3 py-1 text-xs font-accent font-semibold backdrop-blur-sm ${
          available
            ? 'bg-success/20 text-success border border-success/30'
            : 'bg-danger/20 text-danger border border-danger/30'
        }`}>
          <span className={`h-1.5 w-1.5 rounded-full ${available ? 'bg-success' : 'bg-danger'}`}></span>
          {available ? 'Disponible' : 'Réservé'}
        </div>

        {/* Category Badge */}
        <div className="absolute left-4 top-4 bg-primary/90 px-3 py-1 text-xs font-accent text-accent backdrop-blur-sm">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-title text-xl text-text-main mb-3 leading-tight">
          {name}
        </h3>

        {/* Key Features */}
        <div className="mb-6 flex items-center gap-4 text-xs text-text-muted">
          <div className="flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-accent" />
            <span>{transmission}</span>
          </div>
          <span className="text-primary-lighter">|</span>
          <div className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-accent" />
            <span>{seats} places</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="mt-auto flex items-end justify-between border-t border-primary-lighter pt-4">
          <div>
            <span className="block text-xs uppercase tracking-widest text-text-muted mb-0.5">À partir de</span>
            <div className="flex items-baseline gap-1 text-accent">
              <span className="font-title text-3xl font-semibold">{pricePerDay}€</span>
              <span className="text-sm text-text-muted">/jour</span>
            </div>
          </div>

          <Link href={`/flotte/${slug}`}>
            <Button variant="default" size="sm">
              Réserver
            </Button>
          </Link>
        </div>
      </div>
    </article>
  )
}
