import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Filter, X, Upload, Send, ChevronRight, Briefcase, Mail, Phone, User, FileText } from 'lucide-react';
import emailjs from '@emailjs/browser';
import LandingPage from './LandingPage';

const JobSearchPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const formRef = useRef();
  const fileInputRef = useRef();
  
  const categories = [
    { name: 'All', color: 'text-[#06224C]' },
    { name: 'Design', color: 'text-[#06224C]' },
    { name: 'Development', color: 'text-[#06224C]' },
    { name: 'Marketing', color: 'text-[#06224C]' },
    { name: 'Customer Support', color: 'text-[#06224C]' },
    { name: 'Management', color: 'text-[#06224C]' },
    { name: 'Sales', color: 'text-[#06224C]' }
  ];
  
  const allJobs = [
    {
      id: 1,
      title: 'Lead Generation Specialist - Microservices',
      location: 'Madrid',
      type: 'Fulltime',
      company: 'DHL',
      logo: 'https://via.placeholder.com/50/FFCC00/000000?text=DHL',
      postedDays: 1,
      category: 'Marketing',
      description: 'As a Lead Generation Specialist, you will be responsible for identifying and cultivating potential customers for our microservices solutions. You will work closely with the sales team to develop effective strategies for generating new business opportunities.',
      requirements: ['2+ years of experience in lead generation', 'Knowledge of B2B sales processes', 'Excellent communication skills', 'CRM experience']
    },
    {
      id: 2,
      title: 'Graphic Designer for Marketing',
      location: 'Boston',
      type: 'Remote',
      company: 'Viber',
      logo: 'https://via.placeholder.com/50/7360F2/FFFFFF?text=Viber',
      postedDays: 2,
      category: 'Design',
      description: 'We are looking for a talented Graphic Designer to create engaging and effective marketing materials. You will be working with our marketing team to design visual content for digital and print media.',
      requirements: ['3+ years of experience in graphic design', 'Proficiency in Adobe Creative Suite', 'Strong portfolio of marketing designs', 'Ability to work with brand guidelines']
    },
    {
      id: 3,
      title: 'Head of Digital Marketing - New NDA Project',
      location: 'Washington',
      type: 'Remote',
      company: 'Slack',
      logo: 'https://via.placeholder.com/50/4A154B/FFFFFF?text=Slack',
      postedDays: 2,
      category: 'Marketing',
      description: 'As the Head of Digital Marketing, you will lead our digital marketing initiatives for a new confidential project. You will develop and implement comprehensive digital marketing strategies to drive growth and engagement.',
      requirements: ['7+ years of digital marketing experience', 'Proven track record in leadership roles', 'Experience with marketing analytics and tools', 'Strategic thinking and creative problem-solving skills']
    },
    {
      id: 4,
      title: 'Frontend Developer',
      location: 'New York',
      type: 'Remote',
      company: 'Spotify',
      logo: 'https://via.placeholder.com/50/1DB954/FFFFFF?text=Spot',
      postedDays: 3,
      category: 'Development',
      description: 'We are seeking a skilled Frontend Developer to build and maintain user interfaces for our web applications. You will collaborate with designers and backend developers to create responsive and interactive web experiences.',
      requirements: ['3+ years of experience with React', 'Strong knowledge of HTML, CSS, and JavaScript', 'Experience with responsive design', 'Understanding of web performance optimization']
    },
    {
      id: 5,
      title: 'Customer Success Manager',
      location: 'London',
      type: 'Fulltime',
      company: 'Amazon',
      logo: 'https://via.placeholder.com/50/FF9900/FFFFFF?text=Amzn',
      postedDays: 1,
      category: 'Customer Support',
      description: 'As a Customer Success Manager, you will be responsible for building and maintaining relationships with key customers. You will ensure customer satisfaction, address concerns, and identify opportunities for growth.',
      requirements: ['3+ years in customer success or account management', 'Strong communication and interpersonal skills', 'Problem-solving abilities', 'Experience with CRM systems']
    },
    {
      id: 6,
      title: 'Sales Representative',
      location: 'Berlin',
      type: 'Fulltime',
      company: 'Microsoft',
      logo: 'https://via.placeholder.com/50/00A4EF/FFFFFF?text=MS',
      postedDays: 4,
      category: 'Sales',
      description: 'We are looking for an enthusiastic Sales Representative to promote our products and services. You will be responsible for reaching out to potential clients, understanding their needs, and ensuring a smooth sales process.',
      requirements: ['2+ years of sales experience', 'Strong negotiation skills', 'Goal-oriented mindset', 'Ability to build relationships with clients']
    },
    {
      id: 7,
      title: 'Project Manager',
      location: 'Tokyo',
      type: 'Remote',
      company: 'Google',
      logo: 'https://via.placeholder.com/50/4285F4/FFFFFF?text=G',
      postedDays: 2,
      category: 'Management',
      description: 'As a Project Manager, you will plan, execute, and close projects on time and within budget. You will coordinate team members, manage resources, and ensure project goals are met.',
      requirements: ['5+ years of project management experience', 'PMP certification preferred', 'Experience with Agile methodologies', 'Strong leadership and communication skills']
    }
  ];
  

  // Filter jobs when category changes
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredJobs(allJobs);
    } else {
      setFilteredJobs(allJobs.filter(job => job.category === activeCategory));
    }
  }, [activeCategory]);

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.get('fullName').trim()) errors.fullName = 'Name is required';
    if (!formData.get('email').trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.get('email'))) errors.email = 'Email is invalid';
    if (!formData.get('phone').trim()) errors.phone = 'Phone number is required';
    else if (!/^\d{10,}$/.test(formData.get('phone').replace(/[-()\s]/g, ''))) errors.phone = 'Valid phone number is required';
    // if (!fileInputRef.current.files[0]) errors.resume = 'Resume is required';
    return errors;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors({});
    
    if (!selectedJob) return;
    
    const formData = new FormData(formRef.current);
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Compile all information into a comprehensive message
    const fullName = formData.get('fullName').trim();
    const email = formData.get('email').trim();
    const phone = formData.get('phone').trim();
    const coverLetter = formData.get('coverLetter').trim() || "No cover letter provided";
    const resumeFileName = fileInputRef.current?.files[0]?.name || "No resume attached";
    
    // Create a formatted message with all the details
    const formattedMessage = `
JOB APPLICATION DETAILS:
-----------------------
Job Title: ${selectedJob.title}
Company: ${selectedJob.company}
Location: ${selectedJob.location}
Job Type: ${selectedJob.type}
Category: ${selectedJob.category}

APPLICANT INFORMATION:
---------------------
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Resume: ${resumeFileName}

COVER LETTER:
------------
${coverLetter}
`;

    // Create hidden input fields for EmailJS template
    const nameInput = document.createElement('input');
    nameInput.type = 'hidden';
    nameInput.name = 'name';
    nameInput.value = fullName;
    formRef.current.appendChild(nameInput);
    
    const messageInput = document.createElement('input');
    messageInput.type = 'hidden';
    messageInput.name = 'message';
    messageInput.value = formattedMessage;
    formRef.current.appendChild(messageInput);
    
    // Current time for the time field
    const timeInput = document.createElement('input');
    timeInput.type = 'hidden';
    timeInput.name = 'time';
    timeInput.value = new Date().toLocaleString();
    formRef.current.appendChild(timeInput);

    emailjs.sendForm(
      'service_j2sx1qp',
      'template_np5g3tk',
      formRef.current,
      '5UHR6bRTt6UjF-5di'
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Clean up the added hidden fields
      formRef.current.removeChild(nameInput);
      formRef.current.removeChild(messageInput);
      formRef.current.removeChild(timeInput);
      
      setTimeout(() => {
        setSelectedJob(null);
        setSubmitSuccess(false);
      }, 3000);
    }, (error) => {
      console.error('Failed to send email:', error.text);
      setIsSubmitting(false);
      alert('Failed to send application. Please try again.');
      
      // Clean up the added hidden fields
      formRef.current.removeChild(nameInput);
      formRef.current.removeChild(messageInput);
      formRef.current.removeChild(timeInput);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="absolute top-0 h-[40vh] left-0 right-0 z-0 bg-gradient-to-b from-[#051c40] to-[#072a5e] overflow-hidden">
              <div className="absolute w-full h-full">
                {Array.from({ length: 20 }).map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-1 h-20 bg-blue-400 opacity-10"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      height: [20, 100, 20],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
                {Array.from({ length: 15 }).map((_, index) => (
                  <motion.div
                    key={`circle-${index}`}
                    className="absolute w-2 h-2 rounded-full bg-[#ffc451] opacity-20"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 6,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: Math.random() * 3,
                    }}
                  />
                ))}
              </div>
              <div className='text-white font-bold h-full flex items-center justify-center'>
                <h2 className='mt-16 text-2xl'>Carrers</h2>
              </div>
      </div>
      <div className="max-w-6xl mx-auto mt-60">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Find a job you'll love <span className="text-indigo-600">—</span>
            </h1>
            <p className="text-gray-600 mt-2">
              We have about <span className="text-indigo-600 font-medium">6780+</span> jobs here.
            </p>
          </div>
          
          
        </div>
        
        <AnimatePresence>
          {showFilters && (
            <motion.div 
              className="mb-6 bg-white p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-medium mb-3 text-[#06224C]">Additional Filters</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#06224C] focus:border-[#06224C]">
                    <option>Any Location</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                    <option>On-site</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#06224C] focus:border-[#06224C]">
                    <option>Any Type</option>
                    <option>Fulltime</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#06224C] focus:border-[#06224C]">
                    <option>Any Experience</option>
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Posted</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#06224C] focus:border-[#06224C]">
                    <option>Any Time</option>
                    <option>Last 24 hours</option>
                    <option>Last week</option>
                    <option>Last month</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="flex overflow-x-auto space-x-8 border-b border-gray-200 mb-8 pb-1">
          {categories.map((category) => (
            <motion.button
              key={category.name}
              className={`pb-3 relative ${category.color} ${
                activeCategory === category.name ? 'font-medium' : 'text-opacity-70 hover:text-opacity-100'
              } whitespace-nowrap`}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ y: -2 }}
            >
              {category.name !== 'All' && <span className={`mr-1 ${category.color}`}>•</span>}
              {category.name}
              {activeCategory === category.name && (
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-gray-800"
                  layoutId="categoryUnderline"
                />
              )}
            </motion.button>
          ))}
        </div>
        
        {filteredJobs.length === 0 ? (
          <motion.div 
            className="bg-white rounded-lg p-8 text-center shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-xl font-medium text-gray-800 mb-2">No jobs found</h3>
            <p className="text-gray-600">There are no jobs matching your selected category. Try changing your filters.</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(6, 34, 76, 0.1)' }}
                  layout
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="flex items-start justify-between">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex-1">{job.title}</h2>
                    <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-[#06224C] rounded-full">{job.category}</span>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <MapPin size={18} className="text-gray-500 mr-2" />
                    <span className="text-gray-600">{job.location}</span>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <Clock size={18} className="text-gray-500 mr-2" />
                    <span className="text-gray-600">{job.type}</span>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4 mt-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-md bg-[#06224C] flex items-center justify-center overflow-hidden mr-3">
                        <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-medium">{job.company}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{job.postedDays} day{job.postedDays > 1 ? 's' : ''} ago</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
        
        {filteredJobs.length > 0 && filteredJobs.length < allJobs.length && (
          <div className="mt-8 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 border border-[#06224C] text-[#06224C] rounded-md font-medium hover:bg-[#06224C] hover:text-white transition-colors"
              onClick={() => setActiveCategory('All')}
            >
              View all jobs <ChevronRight size={18} className="ml-2" />
            </motion.button>
          </div>
        )}
      </div>
      
      {/* Application Form Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !isSubmitting && !submitSuccess && setSelectedJob(null)}
          >
            <motion.div 
              className="bg-white rounded-lg w-full max-w-3xl max-h-screen overflow-y-auto"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={e => e.stopPropagation()}
            >
              {submitSuccess ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
                  <p className="text-gray-600 mb-6">Thank you for applying to {selectedJob.title} at {selectedJob.company}. We will review your application and get back to you soon.</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-[#06224C] text-white rounded-md font-medium"
                    onClick={() => {
                      setSelectedJob(null);
                      setSubmitSuccess(false);
                    }}
                  >
                    Close
                  </motion.button>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center border-b border-gray-200 p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-md bg-[#06224C] flex items-center justify-center overflow-hidden mr-4">
                        <img src={selectedJob.logo} alt={selectedJob.company} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{selectedJob.title}</h3>
                        <p className="text-gray-600">{selectedJob.company} • {selectedJob.location}</p>
                      </div>
                    </div>
                    
                    <button 
                      className="text-gray-500 hover:text-gray-700 p-2"
                      onClick={() => !isSubmitting && setSelectedJob(null)}
                      disabled={isSubmitting}
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <div className="p-6 border-b border-gray-200">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Job Description</h4>
                    <p className="text-gray-600 mb-4">{selectedJob.description}</p>
                    
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Requirements</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="mb-1">{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-4">Apply for this position</h4>
                    
                    <form ref={formRef} onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullName">
                            <User size={16} className="inline mr-1" /> Full Name
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className={`w-full p-3 border ${formErrors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-[#06224C] focus:border-[#06224C]`}
                            placeholder="Your full name"
                            disabled={isSubmitting}
                          />
                          {formErrors.fullName && <p className="mt-1 text-sm text-red-500">{formErrors.fullName}</p>}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                            <Mail size={16} className="inline mr-1" /> Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className={`w-full p-3 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-[#06224C] focus:border-[#06224C]`}
                            placeholder="your.email@example.com"
                            disabled={isSubmitting}
                          />
                          {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                            <Phone size={16} className="inline mr-1" /> Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className={`w-full p-3 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-[#06224C] focus:border-[#06224C]`}
                            placeholder="Your phone number"
                            disabled={isSubmitting}
                          />
                          {formErrors.phone && <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="resume">
                            <FileText size={16} className="inline mr-1" /> Resume/CV
                          </label>
                          <div className={`w-full p-3 border ${formErrors.resume ? 'border-red-500' : 'border-gray-300'} rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors`}>
                            <input
                              type="file"
                              id="resume"
                              name="resume"
                              ref={fileInputRef}
                              className="hidden"
                              accept=".pdf,.doc,.docx"
                              disabled={isSubmitting}
                              onChange={(e) => {
                                const fileName = e.target.files[0]?.name;
                                if (fileName) {
                                  e.target.nextElementSibling.textContent = fileName;
                                }
                              }}
                            />
                            <label htmlFor="resume" className="flex items-center justify-center cursor-pointer">
                              <Upload size={18} className="mr-2 text-gray-500" />
                              <span className="text-gray-500 truncate">Upload Resume/CV</span>
                            </label>
                          </div>
                          {formErrors.resume && <p className="mt-1 text-sm text-red-500">{formErrors.resume}</p>}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="coverLetter">
                          <Briefcase size={16} className="inline mr-1" /> Cover Letter
                        </label>
                        <textarea
                          id="coverLetter"
                          name="coverLetter"
                          rows="6"
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#06224C] focus:border-[#06224C]"
                          placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                          disabled={isSubmitting}
                        ></textarea>
                      </div>
                      
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium mr-3 hover:bg-gray-50 transition-colors"
                          onClick={() => !isSubmitting && setSelectedJob(null)}
                          disabled={isSubmitting}
                        >
                          Cancel
                        </button>
                        
                        <motion.button
                          type="submit"
                          className="px-6 py-3 bg-[#06224C] text-white rounded-md font-medium flex items-center disabled:opacity-70"
                          whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                          whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit Application <Send size={18} className="ml-2" />
                            </>
                          )}
                        </motion.button>
                      </div>
                    </form>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobSearchPage;