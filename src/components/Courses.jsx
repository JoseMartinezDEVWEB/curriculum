import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, hoverLift } from '../styles/animations.js'
import { courses } from '../data/courses.js'
import { FiBookmark } from 'react-icons/fi'

export default function Courses() {
  return (
    <section id="courses" className="section">
      <div className="container">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-2xl font-bold text-slate-800"
        >
          Cursos técnicos
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {courses.map((c, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp(idx * 0.05)}
              initial="hidden"
              whileInView="show"
              className="card p-5"
            >
              <motion.div
                variants={hoverLift}
                animate="rest"
                whileHover="hover"
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start gap-3">
                  <div className="text-primary"><FiBookmark /></div>
                  <div>
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-slate-600">{c.center}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
