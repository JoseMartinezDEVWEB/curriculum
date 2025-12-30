import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../styles/animations.js'
import { references } from '../data/references.js'
import { FiUser } from 'react-icons/fi'

export default function References() {
  return (
    <section id="references" className="section">
      <div className="container">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-2xl font-bold text-slate-800"
        >
          Referencias personales
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {references.map((r, idx) => (
            <motion.div key={idx} variants={fadeUp(idx * 0.05)} className="card p-5">
              <div className="flex items-start gap-3">
                <div className="text-primary"><FiUser /></div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <a className="text-slate-600 hover:text-primary" href={`tel:${r.phone.replace(/[^0-9+]/g, '')}`}>
                    {r.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
