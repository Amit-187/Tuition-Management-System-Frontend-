import React from 'react'

function Contact() {
  return (

   <>

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


    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-500 px-4">
      <div className="w-full max-w-lg bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 mt-12 mb-12">
        <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-6 text-center">Contact Us</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
          We'd love to hear from you! Fill out the form below and we'll get back to you soon.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
              id="message"
              name="message"
              rows={5}
              placeholder="Type your message here..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>

    </>
  )
}

export default Contact