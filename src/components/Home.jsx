import React, { useEffect, useState } from 'react';
import { FaHandshake, FaGraduationCap, FaStar } from 'react-icons/fa';

function HeroSection() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
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
    setTimeout(() => setIsVisible(true), 100);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8 relative overflow-hidden transition-colors duration-500">

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated background orbs */}
        <div className="absolute top-20 left-10 w-12 h-12 bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-800 dark:to-purple-800 rounded-full animate-pulse transition-colors duration-300"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-full animate-bounce transition-colors duration-300" style={{animationDuration: "4s"}}></div>
        <div className="absolute top-1/3 right-10 w-8 h-8 bg-gradient-to-r from-indigo-300 to-blue-300 dark:from-indigo-700 dark:to-blue-700 rotate-45 animate-spin transition-colors duration-300" style={{animationDuration: "12s"}}></div>
        <div className="absolute bottom-10 right-1/4 w-14 h-14 bg-gradient-to-r from-purple-200 to-indigo-200 dark:from-purple-800 dark:to-indigo-800 rounded-full animate-ping transition-colors duration-300" style={{animationDuration: "5s", opacity: "0.7"}}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/2 left-5 w-6 h-6 bg-yellow-200 dark:bg-yellow-700 rounded-full animate-floatSlow transition-colors duration-300" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-green-200 dark:bg-green-700 rounded-full animate-floatSlow transition-colors duration-300" style={{animationDelay: "2s"}}></div>
      </div>
      
      {/* Left Section with enhanced animations */}
      <div className={`max-w-xl z-10 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
        {/* Badge with animation */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 border border-indigo-200 dark:border-indigo-700 mb-6 ${isVisible ? 'animate-scaleInCustom' : 'opacity-0'} transition-all duration-300 hover:scale-105 hover:shadow-lg`} style={{animationDelay: '200ms'}}>
          <FaGraduationCap className="text-indigo-600 dark:text-indigo-400 animate-wiggle" />
          <span className="text-indigo-700 dark:text-indigo-300 font-semibold text-sm">
            Help you be the best versions
          </span>
        </div>

        {/* Main heading with staggered animation */}
        <h1 className={`text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6 transition-colors duration-300 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} style={{animationDelay: '400ms'}}>
          <span className="inline-block">Clarity from</span>
          <span className="relative inline-block group">
            <span className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300 hover:scale-105 inline-block transform">
              doubts, success
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 rounded-full"></span>
          </span>
          <br />
          <span className="inline-block">from effort.</span>
        </h1>

        {/* Description with delayed animation */}
        <p className={`text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 transition-colors duration-300 ${isVisible ? 'animate-fadeInCustom' : 'opacity-0'}`} style={{animationDelay: '600ms'}}>
          We get it that most of you are tired of getting academic mentors that only teach about the theory, 
          <span className="font-semibold text-indigo-600 dark:text-indigo-400"> tbh we are the same!</span>
        </p>
        
        

        {/* CTA Button with enhanced animation */}
        <div className={`${isVisible ? 'animate-scaleInCustom' : 'opacity-0'}`} style={{animationDelay: '1000ms'}}>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
            <FaHandshake className="group-hover:rotate-12 transition-transform duration-300" />
            <span>Connect with us</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </button>
        </div>
      </div>
      
      {/* Right Section - Enhanced Image Card */}
      <div className={`relative mt-12 md:mt-0 z-10 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`} style={{animationDelay: '400ms'}}>
        {/* Main Card with enhanced animations */}
        <div className="relative w-80 h-96 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden transform hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-3xl border border-indigo-100 dark:border-indigo-800 group">
          
          {/* Animated border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-3xl blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
          
          {/* Decorative elements with animations */}
          <div className="absolute top-6 left-6 w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600 rounded-full transition-colors duration-300 animate-pulse"></div>
          <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 rounded-full transition-colors duration-300 animate-bounce" style={{animationDelay: "0.5s"}}></div>
          <div className="absolute bottom-6 left-6 w-3 h-3 bg-gradient-to-r from-pink-400 to-red-400 dark:from-pink-600 dark:to-red-600 rounded-full transition-colors duration-300 animate-pulse" style={{animationDelay: "1s"}}></div>
          <div className="absolute bottom-6 right-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-indigo-400 dark:from-blue-600 dark:to-indigo-600 rounded-full transition-colors duration-300 animate-bounce" style={{animationDelay: "1.5s"}}></div>
          
          {/* Animated bubbles inside card */}
          <div className="absolute top-1/4 left-4 w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-ping transition-colors duration-300" style={{animationDuration: "2s"}}></div>
          <div className="absolute top-1/3 right-4 w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full animate-ping transition-colors duration-300" style={{animationDuration: "2.5s"}}></div>
          <div className="absolute bottom-1/4 left-6 w-2 h-2 bg-pink-500 dark:bg-pink-400 rounded-full animate-ping transition-colors duration-300" style={{animationDuration: "1.8s"}}></div>
          
          {/* Main image with enhanced hover effects */}
          <div className="relative h-full w-full p-4">
            <div className="h-full w-full rounded-2xl overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="Professional Tutor"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay with info card */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                      <FaStar className="text-white text-sm" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Expert Tutor</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">5.0 ⭐ (200+ reviews)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Dark mode overlay */}
              <div className={`absolute inset-0 bg-gray-900 rounded-2xl transition-opacity duration-300 ${isDarkMode ? 'opacity-20' : 'opacity-0'}`}></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced floating decorative elements */}
        <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-800 dark:to-purple-800 rounded-full animate-floatSlow opacity-80 transition-colors duration-300"></div>
        <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-full animate-floatSlow opacity-80 transition-colors duration-300" style={{animationDelay: "1s"}}></div>
        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-pink-200 to-red-200 dark:from-pink-800 dark:to-red-800 rounded-full animate-floatSlow opacity-80 transition-colors duration-300" style={{animationDelay: "1.5s"}}></div>
        <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-800 dark:to-indigo-800 rounded-full animate-floatSlow opacity-80 transition-colors duration-300" style={{animationDelay: "0.5s"}}></div>
        
        {/* Additional animated elements */}
        <div className="absolute top-1/4 -left-12 w-8 h-8 bg-gradient-to-r from-yellow-200 to-orange-200 dark:from-yellow-700 dark:to-orange-700 rounded-full animate-pulse transition-colors duration-300"></div>
        <div className="absolute bottom-1/4 -right-12 w-8 h-8 bg-gradient-to-r from-green-200 to-teal-200 dark:from-green-700 dark:to-teal-700 rounded-full animate-pulse transition-colors duration-300" style={{animationDelay: "1s"}}></div>
        
        {/* Connecting lines with animation */}
        <div className="absolute top-1/3 -left-20 w-16 h-0.5 bg-gradient-to-r from-indigo-300 to-transparent dark:from-indigo-600 transition-colors duration-300 animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-20 w-16 h-0.5 bg-gradient-to-l from-purple-300 to-transparent dark:from-purple-600 transition-colors duration-300 animate-pulse"></div>
        
        {/* Dot patterns with staggered animation */}
        <div className="absolute -top-8 left-1/4 flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-1.5 h-1.5 bg-indigo-400 dark:bg-indigo-600 rounded-full transition-colors duration-300 animate-bounce"
              style={{animationDelay: `${i * 0.2}s`}}
            ></div>
          ))}
        </div>
        <div className="absolute -bottom-8 right-1/4 flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-1.5 h-1.5 bg-purple-400 dark:bg-purple-600 rounded-full transition-colors duration-300 animate-bounce"
              style={{animationDelay: `${i * 0.2 + 1}s`}}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Theme transition animation */}
      <div 
        className={`fixed inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 pointer-events-none transition-all duration-1000 z-50 ${
          isDarkMode ? 'opacity-0 scale-0' : 'opacity-0 scale-0'
        }`}
        style={{
          clipPath: isDarkMode 
            ? 'circle(100% at center)' 
            : 'circle(0% at center)',
          transition: 'clip-path 1s ease-in-out, opacity 1s ease-in-out'
        }}
      ></div>
      </div>
      );
}

export default HeroSection;
