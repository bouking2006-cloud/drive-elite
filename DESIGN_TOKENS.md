# DESIGN_TOKENS.md — DRIVE ELITE

## 🎨 Palette de Couleurs (Noir / Or / Blanc)

- **Primary Colors (Fonds et structures)**
  - `--color-primary` : `#0A0A0A` (Noir profond absolu - Fond principal)
  - `--color-primary-light` : `#1A1A1A` (Gris crépuscule très sombre - Surfaces des Cards)
  - `--color-primary-lighter` : `#2A2A2A` (Gris sombre moyen - Séparateurs, bordures)

- **Accent Colors (Conversion & Mise en Relief)**
  - `--color-accent` : `#D4AF37` (Or Premium pur - Boutons principaux, éléments d'impact)
  - `--color-accent-hover` : `#F3C74C` (Or Clair chaud - Feedbacks de survol)

- **Secondary & Text (Typographie)**
  - `--color-secondary` : `#F8F8F5` (Blanc cassé "Bone" - Certaines sections full-width pour rythmer la page)
  - `--color-text-main` : `#FFFFFF` (Blanc 100% - Titres et textes cruciaux)
  - `--color-text-muted` : `#A1A1AA` (Gris acier - Textes secondaires, placeholders de fomulaires)

- **Status Colors (Données de contrôle)**
  - `--color-success` : `#10B981` (Vert émeraude sourd - "Disponible")
  - `--color-danger` : `#EF4444` (Rouge sang discret - "Réservé" / Erreurs form)

## 🔤 Typographie (Google Fonts)

- **Familles**
  - `--font-title` : `'Playfair Display', serif` ou `'Cormorant', serif` (Autorité, exclusivité, héritage)
  - `--font-body` : `'Inter', sans-serif` (Lisibilité clinique pour les spec sheets et les textes)
  - `--font-accent` : `'Montserrat', sans-serif` (Capitalisée pour l'agressivité douce des Calls to Action)

- **Échelle d'espacement (Mobile first + Tailwind px/rem)**
  - `h1` : `text-4xl md:text-6xl flex-tight`
  - `h2` : `text-3xl md:text-5xl flex-tight`
  - `body-lg` : `text-lg tracking-wide`
  - `body` : `text-base` (Minimum 16px garanti pour fluidité iOS)
  
## 📐 Espacement & Structure (Layout)

- **Scale** : Bases mathématiques multiples de 4/8 (`16, 24, 32, 48, 64, 96, 128` px).
- **Container Max-Width** : `1280px` stabilisant les designs ultra-larges.
- **Padding Container** : `16px` Mobile -> `32px` Tablette -> `0px` Desktop.
- **Border Radius** : Approche strict, angulaire. Majorité en `rounded-none`, au maximum `rounded-sm (4px)`. Pas de design "bulle".

## 🎭 Ombres et Effets (Shadows & Interactions)

- **Shadows** : Glow esthétique or très subtil au lieu d'ombres noires classiques (`shadow-[0_4px_20px_rgba(212,175,55,0.15)]`).
- **Transitions** : Cohérence globale `transition-all duration-300 ease-in-out`.
- **Hovers** : Épaississement des cartes par une micro-animation minimaliste (`scale-102`).
