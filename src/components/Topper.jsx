import React, { useRef, useState, useEffect } from 'react';

function Topper() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // Check for dark mode
  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    // Trigger entrance animations
    const timer = setTimeout(() => setIsVisible(true), 200);
    
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // Enhanced student data with better mobile-friendly images
  const toppers = [
    {
      name: 'Emma Thompson',
      score: '98%',
      subject: 'Mathematics',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=600&q=80',
      bg: 'bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/30 dark:to-rose-800/40',
      darkBorder: 'dark:border-rose-800/30',
      accent: 'rose',
    },
    {
      name: 'Michael Chen',
      score: '96%',
      subject: 'Physics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=600&q=80',
      bg: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/40',
      darkBorder: 'dark:border-blue-800/30',
      tag: 'POPULAR',
      accent: 'blue',
    },
    {
      name: 'James Rodriguez',
      score: '97%',
      subject: 'Chemistry',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=600&q=80',
      bg: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/40',
      darkBorder: 'dark:border-green-800/30',
      accent: 'green',
    },
    {
      name: 'Sophia Williams',
      score: '95%',
      subject: 'Biology',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=600&q=80',
      bg: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/40',
      darkBorder: 'dark:border-purple-800/30',
      accent: 'purple',
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.querySelector('div').offsetWidth + 32; // card width + gap
      
      let newIndex = direction === 'left' ? activeIndex - 1 : activeIndex + 1;
      
      // Handle boundaries with looping
      if (newIndex < 0) newIndex = toppers.length - 1;
      if (newIndex > toppers.length - 1) newIndex = 0;
      
      setActiveIndex(newIndex);
      
      // Enhanced smooth slide with custom timing
      container.style.scrollBehavior = 'smooth';
      container.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const goToSlide = (index) => {
    if (scrollRef.current) {
      setActiveIndex(index);
      const cardWidth = scrollRef.current.querySelector('div').offsetWidth + 32;
      
      // Enhanced slide animation
      const container = scrollRef.current;
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    if (scrollRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
      scrollRef.current.style.cursor = 'grabbing';
      scrollRef.current.style.scrollBehavior = 'auto';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (scrollRef.current) {
      setIsDragging(false);
      scrollRef.current.style.cursor = 'grab';
      scrollRef.current.style.scrollBehavior = 'smooth';
      
      // Snap to nearest card
      const container = scrollRef.current;
      const cardWidth = container.querySelector('div').offsetWidth + 32;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(newIndex, 0), toppers.length - 1));
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    if (scrollRef.current) {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
      scrollRef.current.style.scrollBehavior = 'auto';
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    if (scrollRef.current) {
      setIsDragging(false);
      scrollRef.current.style.scrollBehavior = 'smooth';
      
      // Snap to nearest card
      const container = scrollRef.current;
      const cardWidth = container.querySelector('div').offsetWidth + 32;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(newIndex, 0), toppers.length - 1));
    }
  };

  // Handle scroll events to update active index
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current && !isDragging) {
        const container = scrollRef.current;
        const cardWidth = container.querySelector('div')?.offsetWidth + 32 || 352;
        const newIndex = Math.round(container.scrollLeft / cardWidth);
        setActiveIndex(Math.min(Math.max(newIndex, 0), toppers.length - 1));
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [isDragging, toppers.length]);

  // Auto-slide functionality
  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (scrollRef.current && !isDragging) {
        const nextIndex = (activeIndex + 1) % toppers.length;
        goToSlide(nextIndex);
      }
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(autoSlide);
  }, [activeIndex, toppers.length, isDragging]);

  return (
    <div className="relative px-4 sm:px-6 md:px-20 py-16 md:py-24 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-500">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary animated bubbles */}
        <div className="absolute top-20 left-4 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-800/50 dark:to-purple-800/50 rounded-full animate-pulse transition-colors duration-300"></div>
        <div className="absolute bottom-20 left-1/4 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800/50 dark:to-pink-800/50 rounded-full animate-bounce transition-colors duration-300" style={{animationDuration: "4s"}}></div>
        <div className="absolute top-1/3 right-4 sm:right-10 w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-300 to-blue-300 dark:from-indigo-700/50 dark:to-blue-700/50 rotate-45 animate-spin transition-colors duration-300" style={{animationDuration: "12s"}}></div>
        <div className="absolute bottom-10 right-1/4 w-8 h-8 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-200 to-indigo-200 dark:from-purple-800/50 dark:to-indigo-800/50 rounded-full animate-ping transition-colors duration-300" style={{animationDuration: "5s", opacity: "0.7"}}></div>
        
        {/* Secondary floating elements */}
        <div className="absolute top-1/2 left-5 w-4 h-4 sm:w-8 sm:h-8 bg-yellow-200 dark:bg-yellow-700/50 rounded-full animate-floatSlow transition-colors duration-300" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/4 right-1/3 w-3 h-3 sm:w-6 sm:h-6 bg-green-200 dark:bg-green-700/50 rounded-full animate-floatSlow transition-colors duration-300" style={{animationDelay: "2s"}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 sm:w-10 sm:h-10 bg-orange-200 dark:bg-orange-700/50 rounded-full animate-floatSlow transition-colors duration-300" style={{animationDelay: "1.5s"}}></div>
      </div>

      <div className="relative z-10">
        {/* Header Section with Enhanced Animations */}
        <div className={`text-center mb-5 md:mb-16 max-w-4xl mx-auto p-4 sm:p-8 ${isVisible ? 'animate-fadeInCustom' : 'opacity-0'}`}>
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900/40 dark:to-orange-800/30 text-orange-600 dark:text-orange-300 font-semibold rounded-full text-sm mb-6 shadow-lg border border-orange-200 dark:border-orange-800/30 transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-scaleInCustom' : 'opacity-0'}`} style={{animationDelay: '200ms'}}>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span>Our Tuition Toppers</span>
          </div>
          
          {/* Main Heading */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} style={{animationDelay: '400ms'}}>
            <span className="text-gray-900 dark:text-gray-100 transition-colors duration-300">Meet Our </span>
            <span className="relative text-indigo-600 dark:text-indigo-400 transition-colors duration-300 inline-block">
              Star Students
              {/* Animated star icon */}
              <svg className="absolute -top-4 -right-6 sm:-top-6 sm:-right-8 w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 dark:text-yellow-300 transition-colors duration-300 animate-wiggle" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
          </h2>
          
          {/* Animated underline */}
          <div className={`h-1 w-16 sm:w-20 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 rounded-full mx-auto my-6 transition-colors duration-300 ${isVisible ? 'animate-scaleInCustom' : 'opacity-0 scale-x-0'}`} style={{animationDelay: '600ms'}}></div>
          
          {/* Description */}
          <p className={`text-gray-600 dark:text-gray-400 mt-6 text-base sm:text-lg leading-relaxed transition-colors duration-300 ${isVisible ? 'animate-fadeInCustom' : 'opacity-0'}`} style={{animationDelay: '800ms'}}>
            Excellence in academics and beyond —
            <span className="text-indigo-600 dark:text-indigo-400 font-medium transition-colors duration-300"> our students shine </span>
            in every field.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto px-2 sm:px-4 mt-8 md:mt-12">
          {/* Decorative background elements */}
          <div className="absolute -top-6 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-indigo-50 dark:bg-indigo-900/30 rounded-full opacity-70 blur-xl transition-colors duration-300"></div>
          <div className="absolute -bottom-10 right-8 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-purple-50 dark:bg-purple-900/30 rounded-full opacity-60 blur-xl transition-colors duration-300"></div>

          {/* Main container */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-900/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 border border-white/20 dark:border-gray-700/30 shadow-xl transition-colors duration-300">
            
            {/* Cards container */}
            <div
              className="flex overflow-x-scroll gap-4 sm:gap-6 md:gap-8 pb-6 md:pb-8 pt-2 md:pt-4 px-2 md:px-4 scrollbar-hide select-none"
              ref={scrollRef}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {toppers.map((topper, index) => (
                <div
                  key={index}
                  className={`min-w-[280px] sm:min-w-[320px] md:min-w-[350px] ${topper.bg} rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 flex-shrink-0 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-white/50 ${topper.darkBorder} relative group ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}
                  style={{
                    animationDelay: `${800 + index * 150}ms`,
                  }}
                >
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 border-t-2 border-l-2 border-white/70 dark:border-gray-600/40 rounded-tl-xl transition-colors duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 border-b-2 border-r-2 border-white/70 dark:border-gray-600/40 rounded-br-xl transition-colors duration-300"></div>
                  
                  {/* Enhanced glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-pink-400/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  {/* Popular tag */}
                  {topper.tag && (
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-red-500 to-pink-500 dark:from-red-600 dark:to-pink-600 text-white text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full z-10 animate-pulse shadow-lg">
                      {topper.tag}
                    </div>
                  )}
                  
                  {/* Image Container - Mobile Responsive with Enhanced Slide Effects */}
                  <div className="relative mb-4 overflow-hidden rounded-lg sm:rounded-xl group-hover:scale-[1.02] transition-transform duration-500">
                    {/* Mobile: smaller height, Desktop: larger height */}
                    <div className="w-full h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden rounded-lg sm:rounded-xl shadow-lg relative">
                      <img
                        src={topper.image}
                        alt={topper.name}
                        className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 ${
                          activeIndex === index 
                            ? 'animate-slideInImage' 
                            : 'opacity-90 scale-95'
                        }`}
                        loading="lazy"
                        style={{
                          transform: activeIndex === index 
                            ? 'scale(1) rotate(0deg)' 
                            : 'scale(0.95) rotate(-1deg)',
                          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease-in-out',
                        }}
                      />
                      
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Subject badge - appears on hover */}
                      <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        {topper.subject}
                      </div>
                      
                      {/* Dark mode overlay */}
                      <div className={`absolute inset-0 bg-gray-900 rounded-lg sm:rounded-xl transition-opacity duration-300 ${isDarkMode ? 'opacity-20' : 'opacity-0'}`}></div>
                    </div>
                  </div>
                  
                  {/* Student name */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 text-center group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors duration-300 leading-tight">{topper.name}</h3>
                  
                  {/* Score display below name */}
                  <div className="text-center mt-2">
                    <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 text-white text-sm sm:text-base font-semibold rounded-full shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {topper.score}
                    </span>
                  </div>
                  
                  {/* Animated indicator line */}
                  <div className="w-8 h-1 bg-indigo-400/50 dark:bg-indigo-500/50 rounded-full mx-auto mt-3 group-hover:w-16 transition-all duration-500"></div>
                </div>
              ))}
            </div>

            {/* Enhanced Navigation Buttons - Mobile Friendly with Slide Indicators */}
            <button
              onClick={() => scroll('left')}
              className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-4 md:-left-6 p-2 sm:p-3 md:p-4 bg-white/95 dark:bg-gray-800/95 shadow-lg rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 z-20 hover:scale-110 backdrop-blur-sm group/btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover/btn:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {/* Slide direction indicator */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none">
                Previous
              </div>
            </button>

            <button
              onClick={() => scroll('right')}
              className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-4 md:-right-6 p-2 sm:p-3 md:p-4 bg-white/95 dark:bg-gray-800/95 shadow-lg rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 z-20 hover:scale-110 backdrop-blur-sm group/btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover/btn:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              {/* Slide direction indicator */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none">
                Next
              </div>
            </button>


          </div>

          

        </div>

        {/* Stats Section */}
        <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-12 md:mt-16 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} style={{animationDelay: '1400ms'}}>
          {[
            { number: '500+', label: 'Success Stories' },
            { number: '95%', label: 'Pass Rate' },
            { number: '4.9★', label: 'Student Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
      </div>
      
      {/* Enhanced Dark mode transition effect */}
      <div 
        className={`fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 pointer-events-none transition-all duration-1000 z-50 ${
          isDarkMode ? 'opacity-0 scale-0' : 'opacity-0 scale-0'
        }`}
        style={{
          clipPath: isDarkMode 
            ? 'circle(150% at center)' 
            : 'circle(0% at center)',
          transition: 'clip-path 1.2s ease-in-out, opacity 1.2s ease-in-out'
        }}
      ></div>
    </div>
  );
}

export default Topper;
