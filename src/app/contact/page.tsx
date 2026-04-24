import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="flex-1 w-full bg-primary min-h-screen">

      {/* Header */}
      <div className="bg-primary-light border-b border-primary-lighter pt-32 pb-16 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-[1280px]">
          <span className="font-accent text-accent text-sm tracking-widest uppercase mb-3 block">Nous contacter</span>
          <h1 className="font-title text-4xl md:text-6xl text-text-main mb-4">
            Parlons de <span className="text-accent italic">Votre Projet</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl">
            Notre équipe est disponible 24h/24 et 7j/7 pour répondre à toutes vos demandes, de la réservation standard à la prestation la plus exclusive.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 md:px-8 xl:px-0 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* Quick Contact Cards */}
            <div className="flex flex-col gap-4">
              <a
                href="tel:+33100000000"
                className="group flex items-center gap-4 p-5 bg-primary-light border border-primary-lighter hover:border-accent/40 rounded-sm transition-colors"
              >
                <div className="h-12 w-12 shrink-0 flex items-center justify-center bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary transition-colors rounded-sm">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-accent tracking-widest text-text-muted uppercase mb-1">Téléphone</p>
                  <p className="text-text-main font-semibold">01 00 00 00 00</p>
                  <p className="text-text-muted text-xs">Disponible 24h/24</p>
                </div>
              </a>

              <a
                href="mailto:contact@drive-elite.fr"
                className="group flex items-center gap-4 p-5 bg-primary-light border border-primary-lighter hover:border-accent/40 rounded-sm transition-colors"
              >
                <div className="h-12 w-12 shrink-0 flex items-center justify-center bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary transition-colors rounded-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-accent tracking-widest text-text-muted uppercase mb-1">Email</p>
                  <p className="text-text-main font-semibold">contact@drive-elite.fr</p>
                  <p className="text-text-muted text-xs">Réponse sous 2h</p>
                </div>
              </a>

              <a
                href="https://wa.me/33100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-primary-light border border-primary-lighter hover:border-accent/40 rounded-sm transition-colors"
              >
                <div className="h-12 w-12 shrink-0 flex items-center justify-center bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary transition-colors rounded-sm">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-accent tracking-widest text-text-muted uppercase mb-1">WhatsApp</p>
                  <p className="text-text-main font-semibold">+33 1 00 00 00 00</p>
                  <p className="text-text-muted text-xs">Réponse instantanée</p>
                </div>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-primary-light border border-primary-lighter hover:border-accent/40 rounded-sm transition-colors"
              >
                <div className="h-12 w-12 shrink-0 flex items-center justify-center bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary transition-colors rounded-sm">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-accent tracking-widest text-text-muted uppercase mb-1">Instagram</p>
                  <p className="text-text-main font-semibold">@driveelite.paris</p>
                  <p className="text-text-muted text-xs">DM ouverts</p>
                </div>
              </a>
            </div>

            {/* Address */}
            <div className="bg-primary-light border border-primary-lighter rounded-sm p-6">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-text-main font-semibold mb-1">Agence Paris 8e</p>
                  <p className="text-text-muted text-sm">15 Avenue George V</p>
                  <p className="text-text-muted text-sm">75008 Paris, France</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-text-main font-semibold mb-1">Horaires d'ouverture</p>
                  <p className="text-text-muted text-sm">Lun – Ven : 8h00 – 20h00</p>
                  <p className="text-text-muted text-sm">Sam – Dim : 9h00 – 18h00</p>
                  <p className="text-accent text-xs mt-1 font-accent">Service de garde 24h/24</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-primary-light border border-primary-lighter rounded-sm p-8">
              <h2 className="font-title text-2xl text-text-main mb-8">Envoyez-nous un message</h2>
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Prénom', placeholder: 'Jean', type: 'text' },
                    { label: 'Nom', placeholder: 'Dupont', type: 'text' },
                  ].map(f => (
                    <div key={f.label} className="flex flex-col gap-1.5">
                      <label className="text-xs font-accent tracking-widest text-text-muted uppercase">{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} className="w-full bg-primary border border-primary-lighter px-4 py-3 text-text-main placeholder:text-text-muted/40 focus:border-accent focus:outline-none" />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Email</label>
                  <input type="email" placeholder="jean.dupont@email.com" className="w-full bg-primary border border-primary-lighter px-4 py-3 text-text-main placeholder:text-text-muted/40 focus:border-accent focus:outline-none" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Téléphone</label>
                  <input type="tel" placeholder="+33 6 00 00 00 00" className="w-full bg-primary border border-primary-lighter px-4 py-3 text-text-main placeholder:text-text-muted/40 focus:border-accent focus:outline-none" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Sujet</label>
                  <select className="w-full bg-primary border border-primary-lighter px-4 py-3 text-text-main focus:border-accent focus:outline-none appearance-none">
                    <option>Demande de réservation</option>
                    <option>Renseignement sur la flotte</option>
                    <option>Service de conciergerie</option>
                    <option>Partenariat / Entreprise</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Message</label>
                  <textarea rows={5} placeholder="Décrivez votre demande..." className="w-full bg-primary border border-primary-lighter px-4 py-3 text-text-main placeholder:text-text-muted/40 focus:border-accent focus:outline-none resize-none" />
                </div>

                <button
                  type="submit"
                  className="self-start h-14 px-10 text-base font-accent uppercase tracking-wider bg-accent text-primary hover:bg-accent-hover transition-colors shadow-gold"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Map embed placeholder */}
            <div className="mt-6 relative h-72 bg-primary-light border border-primary-lighter rounded-sm overflow-hidden">
              <iframe
                title="DRIVE ELITE — 15 Avenue George V, Paris"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.2989%2C48.8710%2C2.3089%2C48.8760&layer=mapnik&marker=48.8735%2C2.3039"
                className="w-full h-full border-0"
                loading="lazy"
              />
              {/* Gold overlay badge */}
              <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-2 border border-primary-lighter">
                <p className="text-xs font-accent tracking-widest text-accent uppercase">DRIVE ELITE</p>
                <p className="text-text-muted text-xs">15 Av. George V — Paris 8e</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
