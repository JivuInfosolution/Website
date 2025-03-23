import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './component/About'
import TestimonialsPage from './component/TestimonialsPage'
import TeamPage from './component/TeamPage'
import Navigation  from './component/Navigation'
import LandingPage from './component/LandingPage'
import Services from './component/Services'
import ContactForm from './component/ContactForm'
import JobSearchPage from './component/JobSearchPage'
import Footer from './component/Footer.jsx'
import Home from './Home.jsx'


function App() {

  return (

<BrowserRouter>
<div className="min-h-screen flex flex-col">
  <Navigation />
  <main className="flex-grow">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path='/services' element={<Services/>}/>
      <Route path='/testimonials' element={<TestimonialsPage/>}/>
      <Route path='/team' element={<TeamPage/>}/>
      <Route path='/careers' element={<JobSearchPage/>}/>
    </Routes>
  </main>
  <Footer />
</div>
</BrowserRouter>
  )
}

export default App
