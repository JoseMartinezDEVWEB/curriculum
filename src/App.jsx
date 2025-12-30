import React from 'react'
import MainLayout from './layouts/MainLayout.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import PersonalInfo from './components/PersonalInfo.jsx'
import Studies from './components/Studies.jsx'
import Courses from './components/Courses.jsx'
import Experience from './components/Experience.jsx'
import References from './components/References.jsx'

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <PersonalInfo />
      <Studies />
      <Courses />
      <Experience />
      <References />
    </MainLayout>
  )
}
