import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sliderData = [
  {
    id: 1,
    name: 'Dr. Kendo',
    gender: 'Mathematics',
    year: '2019',
    modelText:
      'Specialized in advanced mathematics and calculus, Dr. Kendo has been inspiring students with innovative teaching methods for over 8 years.',
    img: 'https://i.ibb.co/41F2rSp/kendo.png',
    slogan: 'Math Expert',
  },
  {
    id: 2,
    name: 'Ms. Angel',
    gender: 'Science',
    year: '2016',
    modelText:
      'Chemistry and Physics specialist Ms. Angel brings complex scientific concepts to life through engaging experiments and real-world applications.',
    img: 'https://i.ibb.co/27z9cwG/angel.png',
    slogan: 'Science Pro',
  },
   {
    id: 3,
    name: 'Prof. Tony',
    gender: 'English',
    year: '2020',
    modelText:
      'Literature and language expert Prof. Tony combines creative writing techniques with grammar fundamentals to develop excellent communication skills.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    slogan: 'Language Master',
  }
  ,
   {
    id: 3,
    name: 'Prof. Tony',
    gender: 'English',
    year: '2020',
    modelText:
      'Literature and language expert Prof. Tony combines creative writing techniques with grammar fundamentals to develop excellent communication skills.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    slogan: 'Language Master',
  },
   {
    id: 3,
    name: 'Prof. Tony',
    gender: 'English',
    year: '2020',
    modelText:
      'Literature and language expert Prof. Tony combines creative writing techniques with grammar fundamentals to develop excellent communication skills.',
    img: './images/tony.png',
    slogan: 'Language Master',
  }
];

function Teachers() {
  const [current, setCurrent] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [slideDirection, setSlideDirection] = useState(0); // -1 for left, 1 for right, 0 for no animation
  const [pillsStartIndex, setPillsStartIndex] = useState(0); // Track which pills to show
  const pillsToShow = 3; // Number of pills to show at once

  // Handle pill click with slide direction
  const handlePillClick = (index) => {
    setSlideDirection(index > current ? 1 : index < current ? -1 : 0);
    setCurrent(index);
  };

  // Navigation functions for pills arrows
  const scrollPillsLeft = () => {
    if (pillsStartIndex > 0) {
      setPillsStartIndex(pillsStartIndex - 1);
      setSlideDirection(-1);
    }
  };

  const scrollPillsRight = () => {
    if (pillsStartIndex < sliderData.length - pillsToShow) {
      setPillsStartIndex(pillsStartIndex + 1);
      setSlideDirection(1);
    }
  };

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

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="w-full min-h-screen flex flex-col relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 rounded-full blur-xl"
        />
        
        <motion.div 
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600 rounded-full blur-lg opacity-40"
        />
        
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-yellow-600 dark:to-orange-600 rounded-lg blur-md opacity-50"
        />
        
        <motion.div 
          animate={{ 
            scale: [1, 0.8, 1.2, 1],
            opacity: [0.2, 0.5, 0.3, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-10 right-1/4 w-24 h-24 bg-gradient-to-r from-teal-400 to-blue-400 dark:from-teal-600 dark:to-blue-600 rounded-full blur-2xl"
        />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className={`absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/5 dark:bg-black/10 backdrop-blur-[1px]" />

      {/* Header Section */}
      <div className="relative z-10 pt-5 pb-5">
        <div className={`text-center mb-12 md:mb-16 max-w-4xl mx-auto p-4 sm:p-8 ${isVisible ? 'animate-fadeInCustom' : 'opacity-0'}`}>
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-50 dark:from-indigo-900/40 dark:to-purple-800/30 text-indigo-600 dark:text-indigo-300 font-semibold rounded-full text-sm mb-6 shadow-lg border border-indigo-200 dark:border-indigo-800/30 transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-scaleInCustom' : 'opacity-0'}`} style={{animationDelay: '200ms'}}>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
            <span>Our Expert Teachers</span>
          </div>
          
          {/* Main Heading */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} style={{animationDelay: '400ms'}}>
            <span className="text-gray-900 dark:text-gray-100 transition-colors duration-300">Meet Our </span>
            <span className="relative text-indigo-600 dark:text-indigo-400 transition-colors duration-300 inline-block">
              Star Teachers
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
            Excellence in teaching and mentoring —
            <span className="text-indigo-600 dark:text-indigo-400 font-medium transition-colors duration-300"> our teachers inspire </span>
            the next generation.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row text-white flex-1">
        {/* Left Section */}
        <motion.div 
          variants={itemVariants}
          className="w-full md:w-1/2 flex flex-col items-center justify-center gap-8 p-8 z-10 relative"
        >
          {/* Navigation Pills with Slide Animation and Arrow Controls */}
<motion.div
  className="relative flex items-center gap-3 mb-6 w-full max-w-xl"
  variants={itemVariants}
  // drag handlers removed to disable cursor sliding effect
>
  {/* Left Arrow for Pills */}
  <motion.button
    onClick={scrollPillsLeft}
    disabled={pillsStartIndex === 0}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`flex-shrink-0 p-2 rounded-full backdrop-blur-sm border transition-colors duration-300 ${
      pillsStartIndex === 0
        ? 'bg-gray-200/50 dark:bg-gray-800/50 text-gray-400 dark:text-gray-600 border-gray-300 dark:border-gray-700 cursor-not-allowed'
        : 'bg-white/20 dark:bg-black/30 text-gray-800 dark:text-white border-white/30 dark:border-gray-600 hover:bg-white/30 dark:hover:bg-black/40 shadow-lg'
    }`}
    aria-label="Scroll pills left"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </motion.button>

  {/* Pills Container */}
  <div className="flex-1 overflow-hidden p-3 relative">
    <motion.div
      className="flex gap-3"
      animate={{ x: -pillsStartIndex * 134 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{
        width: `${Math.min(sliderData.length, pillsToShow) * 134}px`, // limit width to visible pills count
      }}
    >
      <AnimatePresence mode="wait">
        {sliderData.map((profile, index) => (
          <motion.button
            key={`${profile.id}-${index}`}
            onClick={() => handlePillClick(index)}
            whileHover={{ scale: 1.07, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{
              opacity: 0,
              x: slideDirection === 1 ? 100 : slideDirection === -1 ? -100 : 0,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: slideDirection === 1 ? -100 : slideDirection === -1 ? 100 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: index * 0.08,
            }}
            className={`relative flex-shrink-0 px-5 py-2 font-semibold rounded-full shadow-lg transition-all duration-400 backdrop-blur-sm border whitespace-nowrap text-sm ${
              index === current
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-300 shadow-purple-600/50'
                : 'bg-white/25 dark:bg-black/25 text-gray-900 dark:text-gray-200 border-white/30 dark:border-gray-600 hover:bg-white/40 dark:hover:bg-black/40'
            }`}
            style={{ width: 130 }} // fix width to avoid extra space
          >
            <motion.span
              initial={{
                x: slideDirection === 1 ? 30 : slideDirection === -1 ? -30 : 0,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
                delay: 0.15,
              }}
            >
              {profile.name}
            </motion.span>
          </motion.button>
        ))}
      </AnimatePresence>
    </motion.div>
  </div>

  {/* Right Arrow for Pills */}
  <motion.button
    onClick={scrollPillsRight}
    disabled={pillsStartIndex >= sliderData.length - pillsToShow}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`flex-shrink-0 p-2 rounded-full backdrop-blur-sm border transition-colors duration-300 ${
      pillsStartIndex >= sliderData.length - pillsToShow
        ? 'bg-gray-200/50 dark:bg-gray-800/50 text-gray-400 dark:text-gray-600 border-gray-300 dark:border-gray-700 cursor-not-allowed'
        : 'bg-white/20 dark:bg-black/30 text-gray-800 dark:text-white border-white/30 dark:border-gray-600 hover:bg-white/30 dark:hover:bg-black/40 shadow-lg'
    }`}
    aria-label="Scroll pills right"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </motion.button>
</motion.div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="text-left max-w-lg backdrop-blur-sm bg-white/10 dark:bg-black/20 p-8 rounded-2xl border border-white/20 dark:border-gray-700 shadow-2xl"
            >
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl tracking-[0.2em] uppercase font-bold mb-4"
                style={{
                  background: 'linear-gradient(to right, #9333ea, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: '#9333ea' // Fallback color
                }}
              >
                {sliderData[current].gender}
              </motion.p>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-6xl md:text-7xl font-black mb-6 leading-tight"
                style={{
                  color: isDarkMode ? '#ffffff' : '#111827'
                }}
              >
                {sliderData[current].year}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
              >
                {sliderData[current].modelText}
              </motion.p>
              
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="group relative uppercase font-bold text-lg text-gray-900 dark:text-white mb-8 overflow-hidden"
              >
                <span className="relative z-10">View Profile</span>
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-xl text-gray-800 dark:text-gray-200"
              >
                Teacher: <span 
                  className="font-bold"
                  style={{
                    background: 'linear-gradient(to right, #9333ea, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: '#9333ea' // Fallback color
                  }}
                >
                  {sliderData[current].name}
                </span>
              </motion.p>
            </motion.div>
          </AnimatePresence>
          
        </motion.div>

        {/* Right Section */}
        <motion.div 
          variants={itemVariants}
          className="w-full md:w-1/2 relative flex justify-center items-center overflow-hidden z-10"
        >
          {/* Image Container */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={sliderData[current].img}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                src={sliderData[current].img}
                alt={sliderData[current].name}
                className="h-[75vh] max-h-[600px] object-contain drop-shadow-2xl"
              />
            </AnimatePresence>
            
            {/* Glow Effect */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 -z-10"
            />
          </div>

          {/* Background Text */}
          <AnimatePresence mode="wait">
            <motion.h1 
              key={sliderData[current].slogan}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="absolute text-7xl md:text-8xl lg:text-9xl font-black text-black/10 dark:text-white/10 mix-blend-overlay -z-10 px-6 text-center select-none"
            >
              {sliderData[current].slogan}
            </motion.h1>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {sliderData.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handlePillClick(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === current ? 'w-8 bg-gradient-to-r from-purple-600 to-pink-600' : 'w-2 bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Teachers;
