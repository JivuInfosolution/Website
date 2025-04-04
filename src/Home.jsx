import React from 'react'
import LandingPage from './component/LandingPage'
import Services from './component/Services'
import About from './component/About'
import TestimonialsPage from './component/TestimonialsPage'
import TeamPage from './component/TeamPage'
import ContactForm from './component/ContactForm'

const Home = () => {
  return (
    <>
      <LandingPage/>
      <Services/>
      <About/>
      <TestimonialsPage/>
      <TeamPage/>
      <ContactForm/>
    </>
  )
}

export default Home