import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-primary-lighter bg-primary py-16 text-text-muted">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 xl:px-0">
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <Link href="/" className="mb-6 block font-title text-2xl tracking-widest text-text-main">
              DRIVE <span className="text-accent">ELITE</span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed">
              L'excellence sur 4 roues. Location de véhicules premium pour une clientèle exigeante, 
              disponible 24/7 partout dans Paris.
            </p>
            <div className="flex items-center gap-4 text-text-main">
              {/* Mock Social Icons */}
              <a href="#" className="hover:text-accent transition-colors">IN</a>
              <a href="#" className="hover:text-accent transition-colors">FB</a>
              <a href="#" className="hover:text-accent transition-colors">YT</a>
              <a href="#" className="hover:text-accent transition-colors">TK</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 font-accent text-sm tracking-widest text-text-main">NAVIGATION</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/" className="hover:text-accent transition-colors">Accueil</Link></li>
              <li><Link href="/flotte" className="hover:text-accent transition-colors">Notre Flotte</Link></li>
              <li><Link href="/reservation" className="hover:text-accent transition-colors">Réservation</Link></li>
              <li><Link href="/galerie" className="hover:text-accent transition-colors">Galerie</Link></li>
              <li><Link href="/a-propos" className="hover:text-accent transition-colors">À Propos</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-accent text-sm tracking-widest text-text-main">CONTACT</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>15 Avenue George V</li>
              <li>75008 Paris, France</li>
              <li className="mt-4"><a href="tel:+33100000000" className="text-accent">01 00 00 00 00</a></li>
              <li><a href="mailto:contact@drive-elite.fr" className="hover:text-text-main transition-colors">contact@drive-elite.fr</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6 font-accent text-sm tracking-widest text-text-main">NEWSLETTER</h4>
            <p className="mb-4 text-sm">
              Rejoignez notre cercle fermé pour recevoir nos offres exclusives et les dernières nouveautés de la flotte.
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="w-full bg-primary-light border border-primary-lighter px-4 py-3 text-sm text-text-main placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button 
                type="submit"
                className="w-full bg-accent py-3 text-xs font-accent tracking-widest text-primary hover:bg-accent-hover transition-colors"
              >
                S'INSCRIRE
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-primary-lighter pt-8 text-xs md:flex-row">
          <p>© 2026 DRIVE ELITE. Tous droits réservés.</p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <Link href="/mentions-legales" className="hover:text-text-main transition-colors">Mentions Légales</Link>
            <Link href="/cgv" className="hover:text-text-main transition-colors">CGV</Link>
            <Link href="/confidentialite" className="hover:text-text-main transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
