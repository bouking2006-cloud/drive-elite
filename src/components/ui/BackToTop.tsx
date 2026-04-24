"use client"

import React, { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-6 z-50 flex h-11 w-11 items-center justify-center border border-accent/40 bg-primary/90 text-accent backdrop-blur-sm transition-all hover:bg-accent hover:text-primary"
      aria-label="Retour en haut"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  )
}
