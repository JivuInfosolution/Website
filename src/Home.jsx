import React from 'react'
import LandingPage from './component/LandingPage'
import Services from './component/Services'
import About from './component/About'
import TestimonialsPage from './component/TestimonialsPage'
import TeamPage from './component/TeamPage'

const Home = () => {
  return (
    <>
      <LandingPage/>
      <Services/>
      <About/>
      <TestimonialsPage/>
      <TeamPage/>
    </>
  )
}

export default Home