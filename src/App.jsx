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
import Contact from './pages/Contact.jsx'
import ContactPage from './pages/ContactPage.jsx';
import ContactShare from './component/ContactShare.jsx';
import WebServices from './pages/WebServices.jsx';
import MobileDevelopPage from './pages/MobileDevelopPage.jsx';
import SchoolErpPage from './pages/SchoolErpPage.jsx';
import ResturentPage from './pages/ResturentPage.jsx';
import ConstructionPage from './pages/ConstructionPage.jsx';
import HotelManagePage from './pages/HotelManagePage.jsx';
import HospitalPage from './pages/HospitalPage.jsx';
import DigitalMarketingPage from './pages/DigitalMarketingPage.jsx';
import EcommercePage from './pages/EcommercePage.jsx';



function App() {

  return (

<BrowserRouter>
<div className="min-h-screen flex flex-col">
  <Navigation />
  <ContactShare/>
  <main className="flex-grow">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path='/services' element={<ServicesPage/>}>
        {/* <Route path="WebDevelopment" element={<WebServices/>} />
        <Route path="MobileApplication" element={<Contact/>} />
        <Route path="School/College-ERP" element={<Contact/>} />
        <Route path="RestaurantERP" element={<Contact/>} />
        <Route path="ConstructionERP" element={<Contact/>} />
        <Route path="HotelManagement" element={<Contact/>} />
        <Route path="HospitalManagement" element={<Contact/>} />
        <Route path="DigitalMarketing" element={<Contact/>} />
        <Route path="commerceWebsite" element={<Contact/>} /> */}
      </Route>
      <Route path='/WebServices' element={<WebServices/>}/>
      <Route path='/MobileDevelop' element={<MobileDevelopPage/>}/>
      <Route path='/SchoolErp' element={<SchoolErpPage/>}/>
      <Route path='/Restaurant' element={<ResturentPage/>}/>
      <Route path='/ConstructionPage' element={<ConstructionPage/>}/>
      <Route path='/HotelManagePage' element={<HotelManagePage/>}/>
      <Route path='/HospitalPage' element={<HospitalPage/>}/>
      
      <Route path='/DigitalMarketingPage' element={<DigitalMarketingPage/>}/>
      
      <Route path='/EcommercePage' element={<EcommercePage/>}/>
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
