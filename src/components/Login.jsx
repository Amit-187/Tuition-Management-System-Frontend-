import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';

// Mock Navbar component since it's not provided
const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Brand
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Login = () => {
  const [studentUserName, setStudentUserName] = useState('');
  const [studentPassword, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [message, setMessage] = useState('');

  // Detect dark mode and listen for changes
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
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsLoading(true);

     

    // Simulate API call
 
      const loginData = {
      studentUserName,
      studentPassword,
      role : "string"
    };
    console.log(loginData)
      setIsLoading(false);
    

     try {
      const response = await fetch('https://localhost:7087/api/Login', { // replace with your API URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      const data = await response.json();

      if (response.ok) {
        // Save token to sessionStorage or state
        sessionStorage.setItem('authToken', data.authToken);
        console.log('Token:', sessionStorage.authToken);
        window.location.href = "/";
        setMessage(data.message);
        // Redirect or show dashboard
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Something went wrong!');
    }
    
  };


  return (
    <>
      
      {/* Animated background gradient */}
      <div className={`min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 relative overflow-hidden transition-colors duration-500`}>

        {/* Enhanced floating background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-indigo-200/60 to-purple-200/60 dark:from-indigo-800/60 dark:to-purple-800/60 rounded-full animate-pulse blur-sm transition-colors duration-300"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-100/50 to-pink-100/50 dark:from-purple-900/50 dark:to-pink-900/50 rounded-full animate-bounce blur-sm transition-colors duration-300" style={{ animationDuration: "4s" }}></div>
          <div className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-to-r from-indigo-300/40 to-blue-300/40 dark:from-indigo-700/40 dark:to-blue-700/40 rotate-45 animate-spin blur-sm transition-colors duration-300" style={{ animationDuration: "12s" }}></div>
          <div className="absolute bottom-10 right-1/4 w-18 h-18 bg-gradient-to-r from-purple-200/30 to-indigo-200/30 dark:from-purple-800/30 dark:to-indigo-800/30 rounded-full animate-ping blur-sm transition-colors duration-300" style={{ animationDuration: "5s" }}></div>

          {/* Additional geometric shapes */}
          <div className="absolute top-1/2 left-5 w-8 h-8 bg-yellow-200/40 dark:bg-yellow-700/40 rounded-full animate-pulse blur-sm transition-colors duration-300" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-green-200/40 dark:bg-green-700/40 rounded-full animate-pulse blur-sm transition-colors duration-300" style={{ animationDelay: "2s" }}></div>

          {/* Mesh gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-gray-800/20 animate-pulse transition-colors duration-300" style={{ animationDuration: "8s" }}></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-md mx-auto">

            {/* Login card with glassmorphism effect */}
            <div className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 p-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">

              {/* Header with gradient text */}
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent mb-2">
                  Welcome Back
                </h2>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Login in to your account</p>
                  <br /> {message && <p className='text-red-600'>{message}</p>}
              
              </div>

              {/* Form */}
              <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">

                {/* Email field with floating label effect */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className={`h-5 w-5 transition-colors duration-300 ${
                      focusedField === 'studentUserName' ? 'text-indigo-600' : 'text-gray-400 dark:text-gray-500'
                    }`} />
                  </div>
                  <input
                    type="text"
                    id="studentUserName"
                    value={studentUserName}
                    onChange={(e) => setStudentUserName(e.target.value)}
                    onFocus={() => setFocusedField('studentUserName')}
                    onBlur={() => setFocusedField('')}
                    className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-gray-800/60 border-2 border-gray-200/50 dark:border-gray-700/50 rounded-2xl 
                             focus:outline-none focus:border-indigo-500 focus:bg-white/80 dark:focus:bg-gray-900/80
                             transition-all duration-300 text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500
                             hover:border-gray-300/70 dark:hover:border-gray-600/70 hover:bg-white/60 dark:hover:bg-gray-800/70"
                    placeholder="Enter your Tuition Id"
                    required
                    autoComplete="username"
                  />
                  <label
                    htmlFor="studentUserName"
                    className={`absolute left-12 transition-all duration-300 pointer-events-none
                      ${studentUserName || focusedField === 'studentUserName'
                        ? '-top-2 text-xs text-indigo-600 bg-white dark:bg-gray-900 px-2 rounded'
                        : 'top-4 text-gray-500 dark:text-gray-400'}`}
                  >
                    {studentUserName || focusedField === 'studentUserName' ? 'Tuition Id' : ''}
                  </label>
                </div>

                {/* Password field with show/hide toggle */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className={`h-5 w-5 transition-colors duration-300 ${
                      focusedField === 'studentPassword' ? 'text-indigo-600' : 'text-gray-400 dark:text-gray-500'
                    }`} />
                  </div>
                  <input
                    type={showPassword ? 'password' : 'text'}
                    id="studentPassword"
                    value={studentPassword}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('studentPassword')}
                    onBlur={() => setFocusedField('')}
                    className="w-full pl-12 pr-12 py-4 bg-white/50 dark:bg-gray-800/60 border-2 border-gray-200/50 dark:border-gray-700/50 rounded-2xl 
                             focus:outline-none focus:border-indigo-500 focus:bg-white/80 dark:focus:bg-gray-900/80
                             transition-all duration-300 text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500
                             hover:border-gray-300/70 dark:hover:border-gray-600/70 hover:bg-white/60 dark:hover:bg-gray-800/70"
                    placeholder="Enter your password"
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                  <label
                    htmlFor="password"
                    className={`absolute left-12 transition-all duration-300 pointer-events-none
                      ${studentPassword || focusedField === 'studentPassword'
                        ? '-top-2 text-xs text-indigo-600 bg-white dark:bg-gray-900 px-2 rounded'
                        : 'top-4 text-gray-500 dark:text-gray-400'}`}
                  >
                    {studentPassword || focusedField === 'studentPassword' ? 'studentPassword' : ''}
                  </label>
                </div>

                {/* Forgot password link */}
                <div className="text-right">
                  <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300 font-medium">
                    Forgot password?
                  </a>
                </div>

                {/* Submit button with loading animation */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full relative group bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-2xl
                           transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                           focus:outline-none focus:ring-4 focus:ring-indigo-300/50
                           disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
                           overflow-hidden"
                >
                  {/* Button background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative flex items-center justify-center space-x-2">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Login in...</span>
                      </>
                    ) : (
                      <>
                        <span>Login</span>
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </div>
                </button>
              </form>
                   
             
             
            </div>
          </div>
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
    </>
  );
};

export default Login;