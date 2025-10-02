import React, { useState, useEffect } from 'react'
import { FaUser, FaChevronDown, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { getUserRole } from "../utils/auth";  // adjust path based on file location


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const role = getUserRole();

  // Initialize theme based on user preference or system preference
  useEffect(() => {
    console.log(role)
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setDarkMode(false);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      if (prefersDark) document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode with animation
  const toggleDarkMode = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (darkMode) {
      // Switch to light mode
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.documentElement.style.colorScheme = 'light';
    } else {
      // Switch to dark mode
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.style.colorScheme = 'dark';
    }

    setTimeout(() => {
      setDarkMode(!darkMode);
      setIsAnimating(false);
    }, 300);


  };
  const handleLogout = () => {
    sessionStorage.removeItem("authToken"); // clear token
    window.location.href = "/"; // redirect with react-router
  };
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
      {/* Subtle top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>

      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#6366F1 1px, transparent 1px), linear-gradient(to right, #6366F1 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Brand name with logo */}
          <div className="flex-shrink-0 2xl:ml-10 xl:ml-0 lg:ml-0 md:ml-0 sm:ml-0 flex items-center">
            {/* Logo shape with glass effect */}
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-white dark:bg-gray-800 opacity-20 backdrop-filter backdrop-blur-sm"></div>
              <span className="relative z-10 text-lg">S</span>
              {/* Animated sparkle effect */}
              <div className="absolute top-1 right-1 w-1 h-1 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-gray-800 dark:text-gray-100 font-bold text-xl transition duration-300 ease-in-out ml-3">
              Sunrise <span className="text-indigo-600 dark:text-indigo-400">Academy</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 block leading-none font-normal">Where future Rise</span>
            </span>
          </div>

          {/* Middle - Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className="text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ease-in-out relative group hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
              Home
              <span className="absolute bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/courses" className="text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ease-in-out relative group hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
              Courses
              <span className="absolute bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/teachers" className="text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ease-in-out relative group hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
              Teachers
              <span className="absolute bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/resources" className="text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ease-in-out relative group flex items-center hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
              Resources
              <FaChevronDown className="ml-1 text-xs text-gray-500 dark:text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300" />
              <span className="absolute bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ease-in-out relative group hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
              Contact
              <span className="absolute bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
             {role == "Admin" && (
        <Link to="/" className="text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ease-in-out relative group hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
              Admin
              <span className="absolute bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>  // ✅ Only visible for Admin
      )}
          </div>

          {/* Right side - Theme toggle, Login button and Profile icon */}
          <div className="flex items-center space-x-4 2xl:mr-8 xl:mr-0 lg:mr-0 md:mr-0 sm:mr-0">
            {/* Notification indicator */}
            <div className="hidden md:block relative">
              <div className="w-1 h-1 bg-red-500 absolute -top-0.5 right-0 rounded-full"></div>
              <div className="w-1 h-1 bg-red-500 absolute -top-0.5 right-0 rounded-full animate-ping opacity-75"></div>
            </div>

            {/* Dark/Light Mode Toggle Button - Enhanced Version */}
            <button
              onClick={toggleDarkMode}
              className="relative w-10 h-10 rounded-full overflow-hidden focus:outline-none transition-all duration-500 ease-in-out bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              disabled={isAnimating}
            >
              <div className="relative z-10 transition-all duration-500">
                {darkMode ? (
                  <FaSun className={`h-5 w-5 text-yellow-400 ${isAnimating ? 'animate-rotateIcon' : ''}`} />
                ) : (
                  <FaMoon className={`h-5 w-5 text-indigo-600 ${isAnimating ? 'animate-rotateIcon' : ''}`} />
                )}
              </div>
              <div
                className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full transform transition-transform duration-500 ${darkMode ? 'scale-0' : 'scale-100'}`}
              ></div>
              <div
                className={`absolute inset-0 bg-gray-700 rounded-full transform transition-transform duration-500 ${darkMode ? 'scale-100' : 'scale-0'}`}
              ></div>

              {/* Animated rays for sun icon */}
              <div className={`absolute inset-0 ${darkMode ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 45}deg) translateY(-8px)`,
                      transformOrigin: 'center center',
                      opacity: darkMode ? 1 : 0,
                      transition: 'opacity 0.5s ease'
                    }}
                  ></div>
                ))}
              </div>

              {/* Animated stars for moon icon */}
              <div className={`absolute inset-0 ${darkMode ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: `${30 + i * 15}%`,
                      left: `${40 + i * 10}%`,
                      opacity: darkMode ? 0 : 1,
                      transition: 'opacity 0.5s ease'
                    }}
                  ></div>
                ))}
              </div>
            </button>

            {/* Get Started Button with Enhanced Effects */}

            {sessionStorage.getItem("authToken") ? (
              <Link to="/logout">
                <button onClick={handleLogout} className="bg-gradient-to-r from-gray-800 to-gray-400 dark:from-black dark:to-gray-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-105 relative overflow-hidden group shadow-lg">
                  <span className="relative z-10 flex items-center">
                    Logout
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-105 relative overflow-hidden group shadow-lg">
                  <span className="relative z-10 flex items-center">
                    Login
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
              </Link>
            )}


            {/* Profile Icon with Glass Effect */}
            {/* <button className="bg-gray-100 dark:bg-gray-700 bg-opacity-80 backdrop-filter backdrop-blur-sm p-2 rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none transition duration-300 ease-in-out hidden md:block shadow-sm">
              <FaUser className="h-5 w-5" />
            </button>
             */}


          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition duration-300 ease-in-out"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6 transition-all duration-300" />
              ) : (
                <FaBars className="h-6 w-6 transition-all duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu with blur effect */}
        <div
          className={`${isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
            } md:hidden overflow-hidden transition-all duration-500 ease-in-out transform`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg m-2
                        shadow-lg border border-gray-200 dark:border-gray-700
                        animate-fadeIn motion-safe:animate-slideIn">

            {/* Subtle diagonal pattern in mobile menu */}
            <div className="absolute inset-0 opacity-5 pointer-events-none rounded-lg overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #6366F1 0, #6366F1 1px, transparent 0, transparent 50%)',
                backgroundSize: '10px 10px'
              }}></div>
            </div>

            {/* Menu items with staggered animation */}
            <Link to="/"
              className="group relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-base font-medium
            transition duration-300 ease-in-out
            animate-fadeIn motion-safe:animate-slideInFromLeft flex justify-between items-center"
              style={{ animationDelay: "0ms" }}>
              <span>Home</span>
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>

            <Link to="/courses"
              className="group relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-base font-medium
            transition duration-300 ease-in-out
            animate-fadeIn motion-safe:animate-slideInFromLeft flex justify-between items-center"
              style={{ animationDelay: "75ms" }}>
              <span>Courses</span>
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>

            <Link to="/teachers"
              className="group relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-base font-medium
            transition duration-300 ease-in-out
            animate-fadeIn motion-safe:animate-slideInFromLeft flex justify-between items-center"
              style={{ animationDelay: "150ms" }}>
              <span>Teachers</span>
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>

            <Link to="/resources"
              className="group relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-base font-medium
            transition duration-300 ease-in-out
            animate-fadeIn motion-safe:animate-slideInFromLeft flex justify-between items-center"
              style={{ animationDelay: "225ms" }}>
              <span>Resources</span>
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>

            <Link to="/contact"
              className="group relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-base font-medium
            transition duration-300 ease-in-out
            animate-fadeIn motion-safe:animate-slideInFromLeft flex justify-between items-center"
              style={{ animationDelay: "275ms" }}>
              <span>Contact</span>
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>


            {/* Enhanced Dark/Light Mode Toggle in Mobile Menu */}
            <div className="flex items-center justify-between px-3 py-2 animate-fadeIn" style={{ animationDelay: "325ms" }}>
              <span className="text-gray-700 dark:text-gray-300 text-base font-medium">
                {darkMode ? 'Dark Mode' : 'Light Mode'}
              </span>
              <button
                onClick={toggleDarkMode}
                className="relative w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full px-1 transition-colors duration-300 focus:outline-none"
                disabled={isAnimating}
              >
                {/* Track */}
                <span
                  className={`absolute inset-0 rounded-full transition-colors duration-300 ${darkMode ? 'bg-indigo-900' : 'bg-gray-300'
                    }`}
                ></span>

                {/* Thumb with icon */}
                <span
                  className={`absolute w-5 h-5 bg-white dark:bg-indigo-400 rounded-full shadow-md flex items-center justify-center transform transition-transform duration-300 ${darkMode ? 'translate-x-7' : 'translate-x-1'
                    }`}
                >
                  {darkMode ?
                    <FaMoon className="text-xs text-indigo-900" /> :
                    <FaSun className="text-xs text-yellow-500" />
                  }
                </span>

                {/* Sun icon background */}
                <span
                  className={`absolute right-1.5 text-yellow-400 transition-opacity duration-300 ${darkMode ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <FaSun className="h-3 w-3" />
                </span>

                {/* Moon icon background */}
                <span
                  className={`absolute left-1.5 text-indigo-900 transition-opacity duration-300 ${darkMode ? 'opacity-0' : 'opacity-100'
                    }`}
                >
                  <FaMoon className="h-3 w-3" />
                </span>
              </button>
            </div>

            {/* Mobile-only buttons with enhanced effects */}
            <div className="pt-4 pb-2 border-t border-gray-200 dark:border-gray-700 animate-fadeIn" style={{ animationDelay: "350ms" }}>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition duration-300 ease-in-out shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center">
                  Login
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
