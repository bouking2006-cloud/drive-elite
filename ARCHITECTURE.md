# ARCHITECTURE.md — DRIVE ELITE

## 🏗️ Structure du Projet (Next.js 14 App Router)
Le projet utilise le framework Next.js 14 avec l'App Router pour des performances optimales et un SEO maîtrisé.

- `src/` : Dossier racine de l'application
  - `app/` : Routes, layouts et pages (App Router)
  - `components/` : Composants UI et métier (découpés en `ui/`, `layout/`, `features/`)
  - `data/` : Données mockées (véhicules, témoignages, faq)
  - `lib/` : Utilitaires (tailwind-merge, clsx, validation Zod)
  - `types/` : Interfaces et types TypeScript
  - `styles/` : Fichiers CSS globaux
  - `public/` : Assets statiques (polices, images, icônes)

## 🛠️ Stack Technique
- **Framework** : Next.js 14 (App Router, Server & Client Components)
- **Langage** : TypeScript en mode strict (aucun fallback `any`)
- **Styles** : Tailwind CSS, tailwind-merge, clsx (gestion dynamique)
- **Animations** : Framer Motion
- **Formulaires** : React Hook Form couplé à Zod pour la validation robuste
- **État (State)** : React Context (et Zustand si le tunnel devien complexe)

## 📏 Conventions de Nommage
- **Fichiers React composants/pages** : PascalCase (ex: `CarCard.tsx`, `Header.tsx`)
- **Fichiers Utils/Données/Config** : kebab-case (ex: `cars-data.ts`, `tailwind.config.ts`)
- **Variables et Fonctions** : camelCase (ex: `handleReservation`, `pricePerDay`)
- **Interfaces/Types** : PascalCase avec clarté (ex: `Car`, `Testimonial`)
- **Composants Client** : La directive `'use client'` est ajoutée strictement uniquement en tête des fichiers nécessitant interactivité métier (hooks, DOM events).
