import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300  ${
      scrolled ? 'bg-white  py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="flex items-center">
          <span className={`text-3xl font-bold ${scrolled ? 'text-[#051c40]' : 'text-white'}`}>Jivu</span>
          <span className="bg-[#ffc451] text-[#051c40] px-2 py-1 ml-1 font-bold">Infosolution</span>
        </div>
        
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`hover:text-[#ffc451] transition-colors duration-300 ${
            scrolled ? 'text-[#051c40]' : 'text-white'
          }`}>Home</Link>
          <Link to="/services" className={`hover:text-[#ffc451] transition-colors duration-300 ${
            scrolled ? 'text-[#051c40]' : 'text-white'
          }`}>Services</Link>
          <a href="#portfolio" className={`hover:text-[#ffc451] transition-colors duration-300 ${
            scrolled ? 'text-[#051c40]' : 'text-white'
          }`}>Portfolio</a>
          <Link to="/testimonials" className={`hover:text-[#ffc451] transition-colors duration-300 ${
            scrolled ? 'text-[#051c40]' : 'text-white'
          }`}>Testimonials</Link>
          <Link to="/team" className={`hover:text-[#ffc451] transition-colors duration-300 ${
            scrolled ? 'text-[#051c40]' : 'text-white'
          }`}>Team</Link>
          <div className="relative group">
            <button className={`flex items-center hover:text-[#ffc451] transition-colors duration-300 ${
              scrolled ? 'text-[#051c40]' : 'text-white'
            }`}>
              Menu <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block">
              <Link to="/about" className="block px-4 py-2 text-[#051c40] hover:bg-gray-100 hover:text-[#ffc451]">About Us</Link>
              <a href="#contact" className="block px-4 py-2 text-[#051c40] hover:bg-gray-100 hover:text-[#ffc451]">Contact</a>
              <Link to="/careers" className="block px-4 py-2 text-[#051c40] hover:bg-gray-100 hover:text-[#ffc451]">Careers</Link>
            </div>
          </div>
          <Link to="/blog" className={`hover:text-[#ffc451] transition-colors duration-300 ${
            scrolled ? 'text-[#051c40]' : 'text-white'
          }`}>Blog</Link>
        </nav>
        
        
        <div className="hidden md:flex items-center">
          <button className="bg-[#ffc451] hover:bg-[#e0ab44] text-[#051c40] font-medium py-2 px-6 rounded-full transition-colors duration-300">
            Get Quotes
          </button>
        </div>
        
        
        <button 
          className={`md:hidden ${scrolled ? 'text-[#051c40]' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4 text-[#051c40]">
          <Link to="/" className="hover:text-[#ffc451] transition-colors duration-300">Home</Link>
            <Link to="/services" className="hover:text-[#ffc451] transition-colors duration-300">Services</Link>
            <Link to="/portfolio" className="hover:text-[#ffc451] transition-colors duration-300">Portfolio</Link>
            <Link to="#testimonials" className="hover:text-[#ffc451] transition-colors duration-300">Testimonials</Link>
            <Link to="#team" className="hover:text-[#ffc451] transition-colors duration-300">Team</Link>
            <a href="#news" className="hover:text-[#ffc451] transition-colors duration-300">News</a>
            <Link to="/about" className="hover:text-[#ffc451] transition-colors duration-300">About Us</Link>
            <a href="#contact" className="hover:text-[#ffc451] transition-colors duration-300">Contact</a>
            <Link to="/careers" className="hover:text-[#ffc451] transition-colors duration-300">Careers</Link>
            <button className="bg-[#ffc451] hover:bg-[#e0ab44] text-[#051c40] font-medium py-2 px-6 rounded-full w-full transition-colors duration-300">
              Get Quotes
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;