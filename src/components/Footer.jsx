import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
   <>
    <footer className="w-full bg-gradient-to-r from-white via-pink-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 border-t border-gray-200 dark:border-gray-700 py-10 mt-12">

        {/* Enhanced Bubble Animation Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Primary animated bubbles */}
        <div className="absolute top-20 left-4 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-800/50 dark:to-purple-800/50 rounded-full animate-pulse transition-colors duration-300"></div>
        <div className="absolute bottom-20 left-1/4 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800/50 dark:to-pink-800/50 rounded-full animate-bounce transition-colors duration-300" style={{animationDuration: "4s"}}></div>
        <div className="absolute top-1/3 right-4 sm:right-10 w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-300 to-blue-300 dark:from-indigo-700/50 dark:to-blue-700/50 rotate-45 animate-spin transition-colors duration-300" style={{animationDuration: "12s"}}></div>
        <div className="absolute bottom-10 right-1/4 w-8 h-8 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-200 to-indigo-200 dark:from-purple-800/50 dark:to-indigo-800/50 rounded-full animate-ping transition-colors duration-300" style={{animationDuration: "5s", opacity: "0.7"}}></div>
        {/* Secondary floating elements */}
        <div className="absolute top-1/2 left-5 w-4 h-4 sm:w-8 sm:h-8 bg-yellow-200 dark:bg-yellow-700/50 rounded-full animate-floatSlow transition-colors duration-300" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/4 right-1/3 w-3 h-3 sm:w-6 sm:h-6 bg-green-200 dark:bg-green-700/50 rounded-full animate-floatSlow transition-colors duration-300" style={{animationDelay: "2s"}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 sm:w-10 sm:h-10 bg-orange-200 dark:bg-orange-700/50 rounded-full animate-floatSlow transition-colors duration-300" style={{animationDelay: "1.5s"}}></div>
        {/* Glassmorphism overlay */}
        <div className="absolute backdrop-blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Brand */}
        <div className="flex flex-col space-y-2">
          <span className="font-bold text-indigo-600 dark:text-indigo-300 text-2xl">EduExcel</span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">Learning Hub</span>
          <span className="text-gray-400 dark:text-gray-500 text-xs mt-2">Empowering students for a brighter future.</span>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-indigo-700 dark:text-indigo-300 font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Home</Link></li>
            <li><Link to="/courses" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Courses</Link></li>
            <li><Link to="/teachers" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Teachers</Link></li>
            <li><Link to="/timetable" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Timetable</Link></li>
            <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Contact</Link></li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <h4 className="text-indigo-700 dark:text-indigo-300 font-semibold mb-2">Resources</h4>
          <ul className="space-y-1">
            <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">GitHub</a></li>
            <li><a href="https://www.eduexcel.com/blog" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Blog</a></li>
            <li><a href="https://www.eduexcel.com/faq" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">FAQ</a></li>
            <li><a href="https://www.eduexcel.com/support" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Support</a></li>
          </ul>
        </div>
        {/* Contact & Social */}
        <div>
          <h4 className="text-indigo-700 dark:text-indigo-300 font-semibold mb-2">Contact</h4>
          <ul className="space-y-1">
            <li>
              <a href="mailto:info@eduexcel.com" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                info@eduexcel.com
              </a>
            </li>
            <li>
              <span className="text-gray-600 dark:text-gray-300">+91 98765 43210</span>
            </li>
            <li className="flex space-x-3 mt-2">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.006 3.676 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.128 22 17.006 22 12"></path></svg>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 8.99 4.07 7.13 1.64 4.16c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.89 3.54-.7-.02-1.36-.21-1.94-.53v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.72 8.72 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z"></path></svg>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.72z"></path></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-8 text-center text-gray-500 dark:text-gray-400 text-xs">
        © {new Date().getFullYear()} EduExcel. All rights reserved. | <Link to="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400 underline">Privacy Policy</Link> | <Link to="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 underline">Terms of Service</Link>
      </div>
    </footer>
   </>
  )
}

export default Footer