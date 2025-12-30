import React from 'react'
import { personal } from '../data/personal.js'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'

export default function Footer() {
  const mailHref = `mailto:?subject=${encodeURIComponent(
    'Contacto CV - Santa Isabel Adon Vallejo'
  )}&body=${encodeURIComponent('Hola Santa Isabel, vi tu currículum digital y me gustaría contactarte.')}`

  return (
    <footer id="contact" className="mt-10 border-t border-sky-100 bg-white/70">
      <div className="container py-10 grid gap-3 text-slate-700">
        <div className="font-semibold text-slate-800">Contacto</div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="inline-flex items-center gap-2"><FiMapPin /> {personal.address}</span>
          <a className="inline-flex items-center gap-2 hover:text-primary" href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}>
            <FiPhone /> {personal.phone}
          </a>
          <a className="inline-flex items-center gap-2 hover:text-primary" href={mailHref}>
            <FiMail /> Enviar correo
          </a>
        </div>
        <div className="text-sm text-slate-500">© {new Date().getFullYear()} {personal.name}. Todos los derechos reservados.</div>
      </div>
    </footer>
  )
}
