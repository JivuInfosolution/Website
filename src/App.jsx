import { useState } from 'react'
import About from './component/About'
import TestimonialsPage from './component/TestimonialsPage'
import TeamPage from './component/TeamPage'
import Navigation  from './component/Navigation'
import LandingPage from './component/LandingPage'
import Services from './component/Services'
import ContactForm from './component/ContactForm'
import Faqitem from './component/Faqitem'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Navigation/>
      <LandingPage/>
      <Services/>
      <About/>
      <TestimonialsPage/>
      <TeamPage/>
      
      



    </div>
  )
}

export default App
