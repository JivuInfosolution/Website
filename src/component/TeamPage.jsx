import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Jhone Bi',
      position: 'Application Manager',
      image: 'images/girl.png', 
      socials: ['twitter', 'facebook', 'linkedin', 'instagram']
    },
    {
      id: 2,
      name: 'Sani Awesome',
      position: 'Social Media',
      image: 'images/girl.png', 
      socials: ['twitter', 'facebook', 'linkedin', 'instagram']
    },
    {
      id: 3,
      name: 'Andrio Willi',
      position: 'Content Writer',
      image: 'images/girl.png', 
      socials: ['twitter', 'facebook', 'linkedin', 'instagram']
    },
    {
      id: 4,
      name: 'Afa Jonson',
      position: 'Business Manager',
      image: 'images/girl.png', 
      socials: ['twitter', 'facebook', 'linkedin', 'instagram']
    }
  ];

  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  
  const renderSocialIcon = (platform) => {
    switch (platform) {
      case 'twitter':
        return <Twitter size={18} />;
      case 'facebook':
        return <Facebook size={18} />;
      case 'linkedin':
        return <Linkedin size={18} />;
      case 'instagram':
        return <Instagram size={18} />;
      default:
        return null;
    }
  };

  
  const renderSocialIcons = (socials) => {
    return socials.map((platform, index) => (
      <motion.a
        key={index}
        href="#"
        whileHover={{ scale: 1.2 }}
        className="w-8 h-8 rounded-full bg-white flex items-center justify-center mx-1 text-gray-600 hover:text-blue-500 transition-colors duration-300"
      >
        {renderSocialIcon(platform)}
      </motion.a>
    ));
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="container mx-auto ">
        
        <div className="text-center mb-16 ">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-black-500 mb-2"
          >
            Team
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-[#ffc451] mx-auto mb-4"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl font-medium text-gray-600"
          >
            Experts in creativity, technology, and seamless execution.
          </motion.p>
        </div>

        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={item}
              className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover "
                  onError={(e) => {
                    e.target.src = "/api/placeholder/400/320";
                  }}
                />
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-[#ffc451] bg-opacity-20 flex items-end justify-center"
                >
                  <div className="flex pb-4">
                    {renderSocialIcons(member.socials)}
                  </div>
                </motion.div>
              </div>
              
              <div className="py-6 px-4 text-center">
                <h3 className="text-xl font-bold text-[#06224C] " >{member.name}</h3>
                <p className="text-gray-600 italic">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;