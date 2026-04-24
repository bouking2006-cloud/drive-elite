"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { X, Menu } from 'lucide-react'

const NAV_LINKS = [
  { href: '/',            label: 'Accueil' },
  { href: '/flotte',      label: 'Flotte' },
  { href: '/reservation', label: 'Réservation' },
  { href: '/galerie',     label: 'Galerie' },
  { href: '/conciergerie',label: 'Conciergerie' },
  { href: '/a-propos',    label: 'À Propos' },
  { href: '/contact',     label: 'Contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled || menuOpen
            ? 'border-primary-lighter bg-primary/98 backdrop-blur-md shadow-lg'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-4 md:px-8 xl:px-0">

          {/* Logo */}
          <Link href="/" className="font-title text-2xl tracking-widest text-text-main md:text-3xl z-10">
            DRIVE <span className="text-accent">ELITE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === href ? 'text-accent' : 'text-text-muted hover:text-accent'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA & Lang Switcher */}
          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex items-center gap-2 border-r border-primary-lighter pr-4 text-xs font-accent text-text-muted">
              <button className="text-accent transition-colors">FR</button>
              <span>/</span>
              <button className="hover:text-text-main transition-colors">EN</button>
            </div>
            <Link href="/reservation">
              <Button variant="default" size="sm">Réserver</Button>
            </Link>
          </div>

          {/* Mobile — Lang + Hamburger */}
          <div className="flex items-center gap-4 lg:hidden">
            <div className="flex items-center gap-2 text-xs font-accent text-text-muted">
              <button className="text-accent">FR</button>
              <span>/</span>
              <button className="hover:text-text-main">EN</button>
            </div>
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="flex h-10 w-10 items-center justify-center text-accent"
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-primary/98 backdrop-blur-md flex flex-col transition-all duration-300 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-center h-full px-8 pt-20 pb-12 gap-2">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`py-4 font-title text-3xl border-b border-primary-lighter transition-colors ${
                pathname === href ? 'text-accent' : 'text-text-main hover:text-accent'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="mt-8">
            <Link href="/reservation">
              <Button size="lg" className="w-full">Réserver maintenant</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
