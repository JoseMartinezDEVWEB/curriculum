import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../styles/animations.js'
import { studies } from '../data/studies.js'
import { FiBook } from 'react-icons/fi'

export default function Studies() {
  return (
    <section id="studies" className="section">
      <div className="container">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-2xl font-bold text-slate-800"
        >
          Estudios realizados
        </motion.h2>

        <div className="mt-6 grid gap-4">
          {studies.map((s, idx) => (
            <motion.div key={idx} variants={fadeUp(idx * 0.05)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="card p-5">
              <div className="flex items-start gap-3">
                <div className="text-primary"><FiBook /></div>
                <div>
                  <div className="font-semibold">{s.degree}</div>
                  <div className="text-slate-600">{s.institution}</div>
                  {s.location && <div className="text-slate-500 text-sm">{s.location}</div>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
