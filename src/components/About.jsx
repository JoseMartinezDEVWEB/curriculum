import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../styles/animations.js'
import { personal } from '../data/personal.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-2xl font-bold text-slate-800"
        >
          Sobre mí
        </motion.h2>

        <motion.div
          variants={fadeUp(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="card mt-5 p-6"
        >
          <p className="text-slate-700 leading-relaxed">{personal.objective}</p>
        </motion.div>
      </div>
    </section>
  )
}
