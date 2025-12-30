import React from 'react'
import { motion } from 'framer-motion'
import { stagger, fadeUp } from '../styles/animations.js'
import { personal } from '../data/personal.js'
import { FiMapPin, FiPhone, FiUser } from 'react-icons/fi'

const items = [
  { label: 'Dirección', value: personal.address, icon: <FiMapPin /> },
  { label: 'Celular', value: personal.phone, icon: <FiPhone /> },
  { label: 'Nacionalidad', value: personal.nationality, icon: <FiUser /> },
  { label: 'Cédula', value: personal.idCard, icon: <FiUser /> },
  { label: 'Fecha de nacimiento', value: personal.birthDate, icon: <FiUser /> },
  { label: 'Lugar de nacimiento', value: personal.birthPlace, icon: <FiUser /> },
  { label: 'Estado civil', value: personal.maritalStatus, icon: <FiUser /> }
]

export default function PersonalInfo() {
  return (
    <section id="personal" className="section">
      <div className="container">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-2xl font-bold text-slate-800"
        >
          Datos personales
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {items.map((it) => (
            <motion.div
              key={it.label}
              variants={fadeUp(0.02)}
              className="card p-5 flex items-start gap-3"
            >
              <div className="text-primary">{it.icon}</div>
              <div>
                <div className="text-sm text-slate-500">{it.label}</div>
                <div className="font-medium text-slate-800">{it.value}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
