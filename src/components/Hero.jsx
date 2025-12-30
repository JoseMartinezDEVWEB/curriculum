import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiMail } from 'react-icons/fi'
import { personal } from '../data/personal.js'
import { fadeUp, slideLeft } from '../styles/animations.js'

export default function Hero() {
  const downloadCV = () => {
    const url = personal.cvPdf
    if (url) return window.open(url, '_blank')
    window.alert('No se encontró el PDF. Verifique la ruta del archivo.')
  }

  const mailHref = `mailto:?subject=${encodeURIComponent(
    'Contacto CV - Santa Isabel Adon Vallejo'
  )}&body=${encodeURIComponent('Hola Santa Isabel, vi tu currículum digital y me gustaría contactarte.')}`

  return (
    <section id="hero" className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          variants={slideLeft(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="order-2 md:order-2"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
            {personal.name}
          </h1>
          <p className="mt-2 text-primary text-lg font-semibold">{personal.title}</p>
          <p className="mt-5 text-slate-600 max-w-prose">
            {personal.objective}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={mailHref} className="btn btn-primary">
              <FiMail /> Contactar
            </a>
            <button onClick={downloadCV} className="btn btn-ghost">
              <FiDownload /> Descargar PDF
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="order-1 md:order-1"
        >
          <div className="relative w-full">
            {/* Large image without constraints */}
            <img
              src={personal.heroImage}
              alt={personal.name}
              className="w-full h-auto object-contain md:max-h-[85vh]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
