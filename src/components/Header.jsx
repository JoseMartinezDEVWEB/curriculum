import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { personal } from '../data/personal.js'

const nav = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'personal', label: 'Datos' },
  { id: 'studies', label: 'Estudios' },
  { id: 'courses', label: 'Cursos' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'references', label: 'Referencias' },
  { id: 'contact', label: 'Contacto' }
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleNav = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-sky-100">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={personal.heroImage}
            alt={personal.name}
            className="h-8 w-8 rounded-full object-cover border border-white shadow"
          />
          <div className="leading-tight">
            <div className="font-semibold text-slate-800">{personal.name}</div>
            <div className="text-xs text-slate-500">{personal.title}</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => handleNav(n.id)}
              className="text-slate-600 hover:text-primary transition"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Abrir menú">
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-sky-100 bg-white/90 backdrop-blur"
          >
            <div className="container py-3 grid gap-2">
              {nav.map((n) => (
                <button
                  key={n.id}
                  onClick={() => handleNav(n.id)}
                  className="text-left py-2 px-2 rounded hover:bg-sky-50"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
