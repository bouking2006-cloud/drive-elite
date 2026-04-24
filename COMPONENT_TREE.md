# COMPONENT_TREE.md — DRIVE ELITE

## 🌳 Arborescence des Composants Réutilisables

### 🧱 Composants de Layout (Structure)
- `RootLayout` (Encapsule la fonte globale, metadatas SEO et setup le fond sombre global)
- `Container` (Wrapper limitant la largeur d'affichage et centrant le contenu)
- `Section` (Conteneur vertical standardisant l'espacement entre chaque "bloc" d'une page)
- `Header` (Navigation sticky, adaptation asymétrique : logo texte et menu responsive)
- `Footer` (Navigation secondaire, réassurance, liens juridiques, newsletter)

### 💎 Composants UI Primaires (Design System Core)
- `Button` (Variantes : `primary-gold`, `outline-gold`, `ghost`, Tailles : `sm`, `md`, `lg`)
- `Input` / `Textarea` (Champs de formulaires luxueux, fond `#1A1A1A`, bordure basse uniquement)
- `Select` / `DatePicker` (Sélecteurs de données esthétiquement alignés, sans style navigateur natif visible)
- `Badge` (Micro-tag pour indiquer la disponibilité ou la classe d'un véhicule)
- `Card` (Surfaces de base gris très sombre `bg-[#1A1A1A]` accueillant du contenu composite)

### 🏎️ Composants Métiers Spécifiques
- `CarCard` (Bloc présentation compact d'une voiture : image qualité supérieure, prix/jour mis en exergue, bouton CTA)
- `CategoryCard` (Tuile à forte empreinte visuelle avec hover zoom contextuel, ciblant une gamme)
- `TestimonialCard` (Cartouche typographique isolant un avis client avec rating par étoiles)
- `StatsBlock` (Numérotation animée valorisant la réputation au scroll)
- `WhatsAppFAB` (Floating Action Button omni-présent pour conversion directe)
- `ReservationStepsTimeline` (UI de suivi du progrès du client dans le tunnel d'achat)

### 🔥 Wrappers d'Animation & Interactivité
- `FadeIn` / `SlideUp` (Encapsulation Framer Motion fluidifiant l'apparition lors du viewport enter)
- `StaggerContainer` (Séquence l'apparition d'une grille de CarCards en "cascade" majestueuse)
