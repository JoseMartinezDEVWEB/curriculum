import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger } from '../styles/animations.js'
import { personal } from '../data/personal.js'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="section">
      <div className="container">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-2xl font-bold text-slate-800"
        >
          Galería
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {personal.gallery.map((src, idx) => (
            <motion.button
              key={src}
              variants={fadeUp(idx * 0.04)}
              className="group relative overflow-hidden rounded-xl border border-sky-100"
              onClick={() => setActive(src)}
            >
              <img src={src} alt={`Galería ${idx + 1}`} className="aspect-square object-cover w-full" />
              <div className="absolute inset-0 bg-sky-600/0 group-hover:bg-sky-600/10 transition" />
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          {active && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
              onClick={() => setActive(null)}
            >
              <motion.img
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                src={active}
                alt="Vista ampliada"
                className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
