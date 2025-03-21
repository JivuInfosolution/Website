import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

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
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="flex items-center">
          <span className={`text-3xl font-bold ${scrolled ? 'text-[#051c40]' : 'text-white'}`}>Jivu</span>
          <span className="bg-[#ffc451] text-[#051c40] px-2 py-1 ml-1 font-bold">Infosolution</span>
        </div>
        
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className={`hover:text-[#ffc451] transition-colors duration-300 ${
            scrolled ? 'text-[#051c40]' : 'text-white'
          }`}>Home</a>
          <a href="#services" className={`hover:text-[#ffc451] transition-colors duration-300 ${
            scrolled ? 'text-[#051c40]' : 'text-white'
          }`}>Services</a>
          <a href="#portfolio" className={`hover:text-[#ffc451] transition-colors duration-300 ${
            scrolled ? 'text-[#051c40]' : 'text-white'
          }`}>Portfolio</a>
          <a href="#testimonials" className={`hover:text-[#ffc451] transition-colors duration-300 ${
            scrolled ? 'text-[#051c40]' : 'text-white'
          }`}>Testimonials</a>
          <a href="#team" className={`hover:text-[#ffc451] transition-colors duration-300 ${
            scrolled ? 'text-[#051c40]' : 'text-white'
          }`}>Team</a>
          <div className="relative group">
            <button className={`flex items-center hover:text-[#ffc451] transition-colors duration-300 ${
              scrolled ? 'text-[#051c40]' : 'text-white'
            }`}>
              Menu <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block">
              <a href="#about" className="block px-4 py-2 text-[#051c40] hover:bg-gray-100 hover:text-[#ffc451]">About Us</a>
              <a href="#contact" className="block px-4 py-2 text-[#051c40] hover:bg-gray-100 hover:text-[#ffc451]">Contact</a>
              <a href="#careers" className="block px-4 py-2 text-[#051c40] hover:bg-gray-100 hover:text-[#ffc451]">Careers</a>
            </div>
          </div>
          <a href="#news" className={`hover:text-[#ffc451] transition-colors duration-300 ${
            scrolled ? 'text-[#051c40]' : 'text-white'
          }`}>News</a>
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
            <a href="#home" className="hover:text-[#ffc451] transition-colors duration-300">Home</a>
            <a href="#services" className="hover:text-[#ffc451] transition-colors duration-300">Services</a>
            <a href="#portfolio" className="hover:text-[#ffc451] transition-colors duration-300">Portfolio</a>
            <a href="#testimonials" className="hover:text-[#ffc451] transition-colors duration-300">Testimonials</a>
            <a href="#team" className="hover:text-[#ffc451] transition-colors duration-300">Team</a>
            <a href="#news" className="hover:text-[#ffc451] transition-colors duration-300">News</a>
            <a href="#about" className="hover:text-[#ffc451] transition-colors duration-300">About Us</a>
            <a href="#contact" className="hover:text-[#ffc451] transition-colors duration-300">Contact</a>
            <a href="#careers" className="hover:text-[#ffc451] transition-colors duration-300">Careers</a>
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