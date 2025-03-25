import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

// Blog post data - you would fetch this from an API in a real application
const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing IT Infrastructure Management",
    excerpt: "Explore how artificial intelligence is transforming the way companies manage and optimize their IT infrastructure for better performance and reduced costs.",
    category: "Artificial Intelligence",
    author: "Sarah Johnson",
    date: "March 15, 2025",
    readTime: "5 min read",
    image: "/api/placeholder/600/400",
    tags: ["AI", "Infrastructure", "IT Management"]
  },
  {
    id: 2,
    title: "The Future of Cloud Computing: Trends to Watch in 2026",
    excerpt: "From hybrid cloud solutions to serverless architectures, discover the emerging cloud computing trends that will shape the IT landscape in the coming year.",
    category: "Cloud Computing",
    author: "Michael Chen",
    date: "March 10, 2025",
    readTime: "7 min read",
    image: "/api/placeholder/600/400",
    tags: ["Cloud", "Future Tech", "Serverless"]
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for Remote Workforce",
    excerpt: "With remote work becoming the new normal, learn essential cybersecurity measures to protect your company's data and systems from emerging threats.",
    category: "Cybersecurity",
    author: "Alex Rivera",
    date: "March 5, 2025",
    readTime: "6 min read",
    image: "/api/placeholder/600/400",
    tags: ["Cybersecurity", "Remote Work", "Data Protection"]
  },
  {
    id: 4,
    title: "How Custom ERPs Are Transforming Business Operations",
    excerpt: "Custom Enterprise Resource Planning systems are helping businesses streamline operations and gain competitive advantages. Here's what you need to know.",
    category: "ERP Solutions",
    author: "Jessica Wu",
    date: "February 28, 2025",
    readTime: "8 min read",
    image: "/api/placeholder/600/400",
    tags: ["ERP", "Business Operations", "Digital Transformation"]
  },
  {
    id: 5,
    title: "The Rise of Progressive Web Apps in 2025",
    excerpt: "Progressive Web Apps are changing how businesses connect with users online. Learn how PWAs combine the best of web and mobile apps.",
    category: "Web Development",
    author: "David Park",
    date: "February 20, 2025",
    readTime: "6 min read",
    image: "/api/placeholder/600/400",
    tags: ["PWA", "Web Development", "Mobile"]
  },
  {
    id: 6,
    title: "Implementing Zero Trust Security Models",
    excerpt: "Zero Trust security models have become essential for modern businesses. Discover how to implement this approach to protect your digital assets.",
    category: "Cybersecurity",
    author: "Lisa Thompson",
    date: "February 15, 2025",
    readTime: "9 min read",
    image: "/api/placeholder/600/400",
    tags: ["Zero Trust", "Security", "Cybersecurity"]
  },
  {
    id: 7,
    title: "Quantum Computing: Preparing Your Business for the Next Leap",
    excerpt: "Quantum computing is on the horizon. Learn how forward-thinking companies are preparing for this revolutionary technology.",
    category: "Artificial Intelligence",
    author: "Robert Chang",
    date: "February 8, 2025",
    readTime: "10 min read",
    image: "/api/placeholder/600/400",
    tags: ["Quantum Computing", "Innovation", "Future Tech"]
  },
  {
    id: 8,
    title: "Cross-Platform Mobile Development Strategies",
    excerpt: "Discover the latest strategies and frameworks for efficient cross-platform mobile app development that saves time and resources.",
    category: "Mobile Apps",
    author: "Emma Rodriguez",
    date: "February 1, 2025",
    readTime: "7 min read",
    image: "/api/placeholder/600/400",
    tags: ["Mobile Development", "Cross-Platform", "React Native"]
  }
];

// Category filter options
const categories = ["All", "Artificial Intelligence", "Cloud Computing", "Cybersecurity", "ERP Solutions", "Web Development", "Mobile Apps"];

// Popup component for showing full blog post
const BlogPostPopup = ({ post, isOpen, onClose }) => {
  // Close popup when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    
    // Prevent body scroll when popup is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              onClick={onClose}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-gray-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            
            {/* Blog post content */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
                <div className="bg-[#ffc451] text-[#06224C] text-xs font-bold px-3 py-1 rounded-full self-start mb-3">
                  {post.category}
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-[#06224C] mb-4">
                  {post.title}
                </h2>
                
                <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <p className="text-gray-600 mb-4">
                    This is the full content of the blog post that would normally be fetched from an API. The content preserves all the styling and information from the original card.
                  </p>
                  <p className="text-gray-600">
                    The post covers important aspects of {post.category} and provides valuable insights for professionals in the tech industry.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto flex items-center">
                  <div className="w-10 h-10 bg-[#06224C] rounded-full mr-3 flex items-center justify-center text-white font-medium">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-[#06224C]">{post.author}</p>
                    <p className="text-sm text-gray-500">Author</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const BlogCard = ({ post, index, onReadMore }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col border border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.3 }}
          className="h-48"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute top-4 left-4 bg-[#ffc451] text-[#06224C] text-xs font-bold px-3 py-1 rounded-full">
          {post.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        
        <motion.h3 
          className="text-xl font-bold mb-2 line-clamp-2"
          animate={{ 
            color: isHovered ? "#ffc451" : "#06224C"
          }}
          transition={{ duration: 0.2 }}
        >
          {post.title}
        </motion.h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#06224C] rounded-full mr-2 flex items-center justify-center text-white font-medium">
              {post.author.charAt(0)}
            </div>
            <span className="text-sm text-gray-700">{post.author}</span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#ffc451] font-medium flex items-center"
            onClick={() => onReadMore(post)}
          >
            Read More
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts.slice(0, 4));
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const handleReadMore = (post) => {
    setSelectedPost(post);
    setIsPopupOpen(true);
  };
  
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  
  // Filter posts based on category, search term, and whether to show all posts
  useEffect(() => {
    let filtered = blogPosts;
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Only show the first 4 posts unless showAllPosts is true
    if (!showAllPosts && !searchTerm && selectedCategory === "All") {
      filtered = filtered.slice(0, 4);
    }
    
    setFilteredPosts(filtered);
  }, [selectedCategory, searchTerm, showAllPosts]);

  // Animation variants for the line under "Latest Blog Posts"
  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "4rem", 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="w-full bg-gray-50 py-12 sm:py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#ffc451] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#06224C] opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-extrabold text-[#06224C] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Latest Blog Posts
          </motion.h2>
          
          {/* Animated line under heading */}
          <motion.div 
            className="h-1 bg-[#ffc451] mx-auto mb-4"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          ></motion.div>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Stay up to date with the latest trends and insights in technology and IT services.
          </motion.p>
        </motion.div>
        
        {/* Search and filter controls */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Category filter - Scrollable on mobile */}
          <motion.div 
            className="w-full overflow-x-auto pb-2 hide-scrollbar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex gap-2 min-w-max px-1">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0 ${
                    selectedCategory === category 
                      ? 'bg-[#06224C] text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Search box */}
          <motion.div 
            className="relative w-full md:w-64"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`w-full pl-10 pr-4 py-2 rounded-full border transition-all focus:outline-none ${
                isSearchFocused 
                  ? 'border-[#ffc451] shadow-md' 
                  : 'border-gray-300'
              }`}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
          </motion.div>
        </div>
        
        {/* Blog posts grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredPosts.map((post, index) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                index={index} 
                onReadMore={handleReadMore}
              />
            ))}
          </div>
        ) : (
          <motion.div 
            className="text-center py-8 sm:py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 sm:h-16 w-12 sm:w-16 mx-auto text-gray-300 mb-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <h3 className="text-xl font-semibold text-[#06224C] mb-2">No posts found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </motion.div>
        )}
        
        {/* View all blogs button */}
        {!showAllPosts && filteredPosts.length > 0 && filteredPosts.length < blogPosts.length && (
          <motion.div 
            className="flex justify-center mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.button
              onClick={() => setShowAllPosts(true)}
              className="px-5 sm:px-6 py-2 sm:py-3 bg-[#06224C] text-white rounded-full font-medium flex items-center group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View All Blog Posts
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 group-hover:text-[#ffc451]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </motion.button>
          </motion.div>
        )}
        
        {/* Blog category insights section */}
        <motion.div 
          className="mt-12 sm:mt-20 bg-white rounded-xl p-4 sm:p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#06224C]">Popular Blog Categories</h3>
              <div className="h-1 bg-[#ffc451] w-16 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">Discover our most read categories and expand your knowledge in these trending tech areas.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-2 sm:mt-4">
              {categories.filter(cat => cat !== "All").slice(0, 4).map((category, index) => {
                const categoryPostCount = blogPosts.filter(post => post.category === category).length;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 sm:p-6 flex flex-col items-center text-center hover:bg-gray-100 cursor-pointer transition-all border border-gray-100"
                    whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.05)" }}
                    onClick={() => {
                      setSelectedCategory(category);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ffc451] bg-opacity-20 flex items-center justify-center mb-3 sm:mb-4">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 sm:h-6 sm:w-6 text-[#06224C]" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" 
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-base sm:text-lg mb-1 text-[#06224C]">{category}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm">{categoryPostCount} Articles</p>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="mt-6 sm:mt-8 flex flex-col md:flex-row items-center justify-between bg-[#06224C] bg-opacity-5 p-4 sm:p-6 rounded-lg border border-[#06224C] border-opacity-10">
              <div className="md:w-2/3 mb-4 md:mb-0 text-center md:text-left">
                <h4 className="text-base sm:text-lg font-semibold mb-2 text-white">Want to contribute?</h4>
                <p className="text-white text-sm sm:text-base">Share your tech expertise with our readers. We're always looking for industry experts to write insightful articles.</p>
              </div>
              <motion.button
                className="px-4 sm:px-5 py-2 bg-[#ffc451] text-[#06224C] rounded-lg font-medium flex items-center hover:bg-[#ffc451] hover:bg-opacity-90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Contributor
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Blog post popup */}
      {selectedPost && (
        <BlogPostPopup 
          post={selectedPost} 
          isOpen={isPopupOpen} 
          onClose={closePopup}
        />
      )}
    </div>
  );
};

// Add CSS for hiding scrollbar but allowing scroll functionality
const GlobalStyle = `
  /* Hide scrollbar for Chrome, Safari and Opera */
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

// You would need to add this style to your global CSS
// or you can use a styled-components approach

export default BlogSection;