import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer.jsx';
import JobSearchPage from './component/JobSearchPage';
import Navigation from './component/Navigation';
import Home from './Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import TeamPages from './pages/TeamPages.jsx';
import Testimonials from './pages/Testimonials.jsx';


function App() {

  return (

<BrowserRouter>
<div className="min-h-screen flex flex-col">
  <Navigation />
  <main className="flex-grow">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path='/services' element={<ServicesPage/>}/>
      <Route path='/testimonials' element={<Testimonials />}/>
      <Route path='/team' element={<TeamPages/>}/>
      <Route path='/blog' element={<BlogPage />}/>
      <Route path='/careers' element={<JobSearchPage/>}/>
    </Routes>
  </main>
  <Footer />
</div>
</BrowserRouter>
  )
}

export default App
