"use client"

import React, { useState } from 'react';
import { Check, ChevronRight, Car, Calendar, Shield, User, CreditCard } from 'lucide-react';
import { cars } from '@/data/cars';
import { Button } from '@/components/ui/Button';

const STEPS = [
  { id: 1, label: 'Dates & Lieu', icon: <Calendar className="h-4 w-4" /> },
  { id: 2, label: 'Véhicule', icon: <Car className="h-4 w-4" /> },
  { id: 3, label: 'Options', icon: <Shield className="h-4 w-4" /> },
  { id: 4, label: 'Vos Infos', icon: <User className="h-4 w-4" /> },
  { id: 5, label: 'Paiement', icon: <CreditCard className="h-4 w-4" /> },
];

const OPTIONS = [
  { id: 'insurance_premium', label: 'Assurance Premium', desc: 'Franchise réduite à 0€ + protection tous risques', price: 45, per: '/jour' },
  { id: 'additional_driver', label: 'Conducteur Supplémentaire', desc: 'Ajoutez un second conducteur à la location', price: 15, per: '/jour' },
  { id: 'gps', label: 'GPS Premium', desc: 'Navigation haute définition mise à jour', price: 10, per: '/jour' },
  { id: 'baby_seat', label: 'Siège Bébé / Rehausseur', desc: 'Pour les enfants de 0 à 12 ans', price: 8, per: '/jour' },
  { id: 'delivery', label: 'Livraison & Reprise sur site', desc: 'À votre hôtel, domicile ou aéroport', price: 80, per: '/trajet' },
];

export default function ReservationPage() {
  const [step, setStep] = useState(1);
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const car = cars.find(c => c.id === selectedCar);

  const toggleOption = (id: string) => {
    setSelectedOptions(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const nights = startDate && endDate
    ? Math.max(1, Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / 86400000))
    : 1;

  const optionsCost = OPTIONS
    .filter(o => selectedOptions.has(o.id))
    .reduce((sum, o) => sum + (o.per === '/jour' ? o.price * nights : o.price), 0);

  const total = car ? car.pricePerDay * nights + optionsCost : 0;

  return (
    <main className="flex-1 w-full bg-primary min-h-screen pt-28 pb-24 px-4 md:px-8 xl:px-0">
      <div className="mx-auto max-w-5xl">

        {/* Title */}
        <div className="text-center mb-12">
          <span className="font-accent text-accent text-sm tracking-widest uppercase mb-3 block">Tunnel Sécurisé</span>
          <h1 className="font-title text-4xl md:text-5xl text-text-main">
            Votre <span className="text-accent italic">Réservation</span>
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            {/* Line */}
            <div className="absolute top-5 left-0 right-0 h-px bg-primary-lighter z-0"></div>
            <div
              className="absolute top-5 left-0 h-px bg-accent z-0 transition-all duration-500"
              style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
            ></div>

            {STEPS.map(s => (
              <button
                key={s.id}
                onClick={() => s.id < step && setStep(s.id)}
                className="relative z-10 flex flex-col items-center gap-2"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                  s.id < step
                    ? 'bg-accent border-accent text-primary'
                    : s.id === step
                    ? 'bg-primary border-accent text-accent'
                    : 'bg-primary border-primary-lighter text-text-muted'
                }`}>
                  {s.id < step ? <Check className="h-4 w-4" /> : s.icon}
                </div>
                <span className={`hidden sm:block text-xs font-accent tracking-wide transition-colors ${
                  s.id === step ? 'text-accent' : s.id < step ? 'text-text-muted' : 'text-primary-lighter'
                }`}>
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Steps */}
          <div className="lg:col-span-2">
            <div className="bg-primary-light border border-primary-lighter rounded-sm p-8">

              {/* Step 1 — Dates & Lieu */}
              {step === 1 && (
                <div className="flex flex-col gap-6">
                  <h2 className="font-title text-2xl text-text-main">Dates & Lieu de prise en charge</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Date de départ</label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)}
                        className="w-full bg-primary border border-primary-lighter px-4 py-3 text-text-main focus:border-accent focus:outline-none [color-scheme:dark]"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Date de retour</label>
                      <input
                        type="date"
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)}
                        className="w-full bg-primary border border-primary-lighter px-4 py-3 text-text-main focus:border-accent focus:outline-none [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Lieu de prise en charge</label>
                    <select className="w-full bg-primary border border-primary-lighter px-4 py-3 text-text-main focus:border-accent focus:outline-none appearance-none">
                      <option>Agence Paris 8e — 15 Avenue George V</option>
                      <option>Livraison à domicile / hôtel</option>
                      <option>Aéroport Charles de Gaulle</option>
                      <option>Aéroport Paris-Orly</option>
                      <option>Gare du Nord</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Lieu de restitution</label>
                    <select className="w-full bg-primary border border-primary-lighter px-4 py-3 text-text-main focus:border-accent focus:outline-none appearance-none">
                      <option>Même lieu que la prise en charge</option>
                      <option>Agence Paris 8e — 15 Avenue George V</option>
                      <option>Aéroport Charles de Gaulle</option>
                      <option>Aéroport Paris-Orly</option>
                    </select>
                  </div>

                  <Button size="lg" className="mt-2 self-end" onClick={() => setStep(2)}>
                    Continuer <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}

              {/* Step 2 — Vehicle */}
              {step === 2 && (
                <div className="flex flex-col gap-6">
                  <h2 className="font-title text-2xl text-text-main">Choisissez votre véhicule</h2>
                  <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-1">
                    {cars.filter(c => c.available).map(c => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedCar(c.id)}
                        className={`flex items-center gap-4 p-4 border rounded-sm transition-all text-left ${
                          selectedCar === c.id
                            ? 'border-accent bg-accent/5'
                            : 'border-primary-lighter hover:border-accent/40'
                        }`}
                      >
                        <img src={c.images[0]} alt={c.name} className="h-20 w-32 object-cover rounded-sm shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-text-main font-semibold text-sm mb-0.5">{c.name}</p>
                          <p className="text-text-muted text-xs">{c.category} · {c.transmission}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-accent font-title text-xl">{c.pricePerDay}€</span>
                          <span className="text-text-muted text-xs block">/jour</span>
                        </div>
                        <div className={`h-5 w-5 rounded-full border-2 shrink-0 flex items-center justify-center ${
                          selectedCar === c.id ? 'border-accent bg-accent' : 'border-primary-lighter'
                        }`}>
                          {selectedCar === c.id && <Check className="h-3 w-3 text-primary" />}
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <Button variant="outline" onClick={() => setStep(1)}>Retour</Button>
                    <Button onClick={() => setStep(3)} disabled={!selectedCar}>Continuer <ChevronRight className="ml-2 h-4 w-4" /></Button>
                  </div>
                </div>
              )}

              {/* Step 3 — Options */}
              {step === 3 && (
                <div className="flex flex-col gap-6">
                  <h2 className="font-title text-2xl text-text-main">Options & Accessoires</h2>
                  <div className="flex flex-col gap-3">
                    {OPTIONS.map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => toggleOption(opt.id)}
                        className={`flex items-center gap-4 p-4 border rounded-sm transition-all text-left ${
                          selectedOptions.has(opt.id) ? 'border-accent bg-accent/5' : 'border-primary-lighter hover:border-accent/40'
                        }`}
                      >
                        <div className={`h-5 w-5 rounded border-2 shrink-0 flex items-center justify-center ${
                          selectedOptions.has(opt.id) ? 'border-accent bg-accent' : 'border-primary-lighter'
                        }`}>
                          {selectedOptions.has(opt.id) && <Check className="h-3 w-3 text-primary" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-text-main text-sm font-semibold">{opt.label}</p>
                          <p className="text-text-muted text-xs">{opt.desc}</p>
                        </div>
                        <span className="text-accent font-semibold text-sm shrink-0">+{opt.price}€{opt.per}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <Button variant="outline" onClick={() => setStep(2)}>Retour</Button>
                    <Button onClick={() => setStep(4)}>Continuer <ChevronRight className="ml-2 h-4 w-4" /></Button>
                  </div>
                </div>
              )}

              {/* Step 4 — Customer Info */}
              {step === 4 && (
                <div className="flex flex-col gap-6">
                  <h2 className="font-title text-2xl text-text-main">Vos Informations</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: 'Prénom', placeholder: 'Jean', type: 'text' },
                      { label: 'Nom', placeholder: 'Dupont', type: 'text' },
                      { label: 'Email', placeholder: 'jean.dupont@email.com', type: 'email' },
                      { label: 'Téléphone', placeholder: '+33 6 00 00 00 00', type: 'tel' },
                    ].map(field => (
                      <div key={field.label} className="flex flex-col gap-1.5">
                        <label className="text-xs font-accent tracking-widest text-text-muted uppercase">{field.label}</label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full bg-primary border border-primary-lighter px-4 py-3 text-text-main placeholder:text-text-muted/50 focus:border-accent focus:outline-none"
                        />
                      </div>
                    ))}
                    <div className="sm:col-span-2 flex flex-col gap-1.5">
                      <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Numéro de permis de conduire</label>
                      <input
                        type="text"
                        placeholder="12AB34567"
                        className="w-full bg-primary border border-primary-lighter px-4 py-3 text-text-main placeholder:text-text-muted/50 focus:border-accent focus:outline-none"
                      />
                    </div>
                    <div className="sm:col-span-2 flex flex-col gap-1.5">
                      <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Demandes particulières</label>
                      <textarea
                        rows={3}
                        placeholder="Siège bébé, heure de livraison spécifique, etc."
                        className="w-full bg-primary border border-primary-lighter px-4 py-3 text-text-main placeholder:text-text-muted/50 focus:border-accent focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <Button variant="outline" onClick={() => setStep(3)}>Retour</Button>
                    <Button onClick={() => setStep(5)}>Continuer <ChevronRight className="ml-2 h-4 w-4" /></Button>
                  </div>
                </div>
              )}

              {/* Step 5 — Payment */}
              {step === 5 && (
                <div className="flex flex-col gap-6">
                  <h2 className="font-title text-2xl text-text-main">Récapitulatif & Paiement</h2>
                  <div className="bg-primary border border-primary-lighter rounded-sm p-6 flex flex-col gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-muted">{car?.name}</span>
                      <span className="text-text-main">{car ? car.pricePerDay * nights : 0}€</span>
                    </div>
                    {OPTIONS.filter(o => selectedOptions.has(o.id)).map(o => (
                      <div key={o.id} className="flex justify-between">
                        <span className="text-text-muted">{o.label}</span>
                        <span className="text-text-main">+{o.per === '/jour' ? o.price * nights : o.price}€</span>
                      </div>
                    ))}
                    <div className="border-t border-primary-lighter pt-3 flex justify-between font-semibold">
                      <span className="text-text-main">Total ({nights} jour{nights > 1 ? 's' : ''})</span>
                      <span className="text-accent font-title text-xl">{total}€</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Numéro de carte</label>
                      <input type="text" placeholder="4242 4242 4242 4242" className="w-full bg-primary border border-primary-lighter px-4 py-3 text-text-main placeholder:text-text-muted/50 focus:border-accent focus:outline-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-accent tracking-widest text-text-muted uppercase">Expiration</label>
                        <input type="text" placeholder="MM / AA" className="w-full bg-primary border border-primary-lighter px-4 py-3 text-text-main placeholder:text-text-muted/50 focus:border-accent focus:outline-none" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-accent tracking-widest text-text-muted uppercase">CVC</label>
                        <input type="text" placeholder="123" className="w-full bg-primary border border-primary-lighter px-4 py-3 text-text-main placeholder:text-text-muted/50 focus:border-accent focus:outline-none" />
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-text-muted flex items-center gap-2">
                    <Shield className="h-3.5 w-3.5 text-accent" />
                    Paiement 100% sécurisé. Vos données ne sont jamais stockées.
                  </p>

                  <div className="flex justify-between mt-2">
                    <Button variant="outline" onClick={() => setStep(4)}>Retour</Button>
                    <Button size="lg" className="shadow-gold">
                      Confirmer la réservation — {total}€
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-primary-light border border-primary-lighter rounded-sm overflow-hidden">
              <div className="p-5 border-b border-primary-lighter">
                <h3 className="font-accent text-xs tracking-widest uppercase text-text-main">Récapitulatif</h3>
              </div>
              <div className="p-5 flex flex-col gap-4 text-sm">
                {car ? (
                  <>
                    <img src={car.images[0]} alt={car.name} className="w-full aspect-video object-cover rounded-sm" />
                    <div>
                      <p className="text-text-main font-semibold">{car.name}</p>
                      <p className="text-text-muted text-xs">{car.category}</p>
                    </div>
                  </>
                ) : (
                  <p className="text-text-muted text-xs">Aucun véhicule sélectionné</p>
                )}
                {startDate && endDate && (
                  <div className="text-xs text-text-muted space-y-1 border-t border-primary-lighter pt-4">
                    <p>Départ : <span className="text-text-main">{new Date(startDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}</span></p>
                    <p>Retour : <span className="text-text-main">{new Date(endDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}</span></p>
                    <p>Durée : <span className="text-text-main">{nights} jour{nights > 1 ? 's' : ''}</span></p>
                  </div>
                )}
                {total > 0 && (
                  <div className="border-t border-primary-lighter pt-4">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Total estimé</span>
                      <span className="text-accent font-title text-xl">{total}€</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
