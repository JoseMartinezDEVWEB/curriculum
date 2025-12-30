import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp } from '../styles/animations.js'
import { experience } from '../data/experience.js'
import { personal } from '../data/personal.js'
import { FiBriefcase, FiX } from 'react-icons/fi'

export default function Experience() {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <section id="experience" className="section relative">
      <div className="container">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-2xl font-bold text-slate-800"
        >
          Experiencia laboral
        </motion.h2>

        <div className="mt-10 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory px-4"
          >
            {experience.map((e, idx) => {
              const img = personal.gallery[idx % personal.gallery.length]
              return (
                <motion.div
                  layoutId={`card-${idx}`}
                  key={idx}
                  onClick={() => setSelectedId(idx)}
                  whileHover={{ y: -5 }}
                  className="flex-shrink-0 w-[280px] sm:w-[350px] snap-start cursor-pointer group"
                >
                  <div className="card h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      {img && (
                        <motion.img
                          layoutId={`img-${idx}`}
                          src={img}
                          alt={e.company}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-bottom p-4">
                        <div className="text-white mt-auto">
                          <div className="flex items-center gap-2 text-sm opacity-90">
                            <FiBriefcase className="text-primary-light" />
                            <span>{e.company}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <motion.h3 layoutId={`title-${idx}`} className="text-xl font-bold text-slate-800 leading-tight">
                        {e.role}
                      </motion.h3>
                      <p className="mt-2 text-slate-600 text-sm flex-1">
                        {e.company} - Experiencia laboral destacada en el sector de servicios.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
          <div className="flex justify-center gap-2 mt-2">
            {experience.map((_, idx) => (
              <div key={idx} className="h-1.5 w-1.5 rounded-full bg-primary/20" />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedId !== null && (
          <div className="fixed inset-0 z-50 grid place-items-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 p-2 bg-white/50 backdrop-blur rounded-full text-slate-800 hover:bg-white transition z-20"
              >
                <FiX size={24} />
              </button>

              <div className="relative h-64 sm:h-80 flex-shrink-0 bg-slate-100">
                {personal.gallery[selectedId % personal.gallery.length] && (
                  <motion.img
                    layoutId={`img-${selectedId}`}
                    src={personal.gallery[selectedId % personal.gallery.length]}
                    alt={experience[selectedId].company}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              <div className="p-6 overflow-y-auto">
                <motion.h3 layoutId={`title-${selectedId}`} className="text-3xl font-bold text-slate-800">
                  {experience[selectedId].role}
                </motion.h3>
                <div className="mt-2 text-lg text-primary font-medium">
                  {experience[selectedId].company}
                </div>
                <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    En este puesto, demostré mis habilidades de servicio y dedicación profesional.
                    Me encargué de asegurar la satisfacción del cliente y cumplir con los más altos estándares de calidad.
                  </p>
                  <p>
                    Responsabilidades clave:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Atención personalizada a clientes y pacientes.</li>
                    <li>Gestión eficiente de tareas y resolución de problemas.</li>
                    <li>Trabajo en equipo y comunicación efectiva.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
