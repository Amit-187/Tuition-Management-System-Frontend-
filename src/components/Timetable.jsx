import React, { useState, useEffect } from 'react';

const classData = [
  {
    classNum: 1,
    timetable: [
      { period: '8:00 - 9:00', subject: 'Math' },
      { period: '9:00 - 10:00', subject: 'Drawing' },
      { period: '10:00 - 10:30', subject: 'Break' },
      { period: '10:30 - 11:30', subject: 'English' },
      { period: '11:30 - 12:30', subject: 'Story Time' },
    ],
  },
  {
    classNum: 2,
    timetable: [
      { period: '8:00 - 9:00', subject: 'Science' },
      { period: '9:00 - 10:00', subject: 'Math' },
      { period: '10:00 - 10:30', subject: 'Break' },
      { period: '10:30 - 11:30', subject: 'English' },
      { period: '11:30 - 12:30', subject: 'Art' },
    ],
  },
  {
    classNum: 3,
    timetable: [
      { period: '8:00 - 9:00', subject: 'English' },
      { period: '9:00 - 10:00', subject: 'Math' },
      { period: '10:00 - 10:30', subject: 'Break' },
      { period: '10:30 - 11:30', subject: 'Science' },
      { period: '11:30 - 12:30', subject: 'Computer' },
    ],
  },
  {
    classNum: 4,
    timetable: [
      { period: '8:00 - 9:00', subject: 'Math' },
      { period: '9:00 - 10:00', subject: 'Hindi' },
      { period: '10:00 - 10:30', subject: 'Break' },
      { period: '10:30 - 11:30', subject: 'Science' },
      { period: '11:30 - 12:30', subject: 'English' },
    ],
  },
  {
    classNum: 5,
    timetable: [
      { period: '8:00 - 9:00', subject: 'Social Studies' },
      { period: '9:00 - 10:00', subject: 'Math' },
      { period: '10:00 - 10:30', subject: 'Break' },
      { period: '10:30 - 11:30', subject: 'English' },
      { period: '11:30 - 12:30', subject: 'Science' },
    ],
  },
  {
    classNum: 6,
    timetable: [
      { period: '8:00 - 9:00', subject: 'Math' },
      { period: '9:00 - 10:00', subject: 'Science' },
      { period: '10:00 - 10:30', subject: 'Break' },
      { period: '10:30 - 11:30', subject: 'Social Studies' },
      { period: '11:30 - 12:30', subject: 'English' },
    ],
  },
  {
    classNum: 7,
    timetable: [
      { period: '8:00 - 9:00', subject: 'English' },
      { period: '9:00 - 10:00', subject: 'Math' },
      { period: '10:00 - 10:30', subject: 'Break' },
      { period: '10:30 - 11:30', subject: 'Science' },
      { period: '11:30 - 12:30', subject: 'Computer' },
    ],
  },
  {
    classNum: 8,
    timetable: [
      { period: '8:00 - 9:00', subject: 'Science' },
      { period: '9:00 - 10:00', subject: 'Math' },
      { period: '10:00 - 10:30', subject: 'Break' },
      { period: '10:30 - 11:30', subject: 'English' },
      { period: '11:30 - 12:30', subject: 'Social Studies' },
    ],
  },
  {
    classNum: 9,
    timetable: [
      { period: '8:00 - 9:00', subject: 'Math' },
      { period: '9:00 - 10:00', subject: 'Science' },
      { period: '10:00 - 10:30', subject: 'Break' },
      { period: '10:30 - 11:30', subject: 'English' },
      { period: '11:30 - 12:30', subject: 'Hindi' },
    ],
  },
  {
    classNum: 10,
    timetable: [
      { period: '8:00 - 9:00', subject: 'English' },
      { period: '9:00 - 10:00', subject: 'Math' },
      { period: '10:00 - 10:30', subject: 'Break' },
      { period: '10:30 - 11:30', subject: 'Science' },
      { period: '11:30 - 12:30', subject: 'Social Studies' },
    ],
  },
  {
    classNum: 11,
    timetable: [
      { period: '8:00 - 9:00', subject: 'Physics' },
      { period: '9:00 - 10:00', subject: 'Chemistry' },
      { period: '10:00 - 10:30', subject: 'Break' },
      { period: '10:30 - 11:30', subject: 'Math/Biology' },
      { period: '11:30 - 12:30', subject: 'English' },
    ],
  },
  {
    classNum: 12,
    timetable: [
      { period: '8:00 - 9:00', subject: 'Math/Biology' },
      { period: '9:00 - 10:00', subject: 'Physics' },
      { period: '10:00 - 10:30', subject: 'Break' },
      { period: '10:30 - 11:30', subject: 'Chemistry' },
      { period: '11:30 - 12:30', subject: 'English' },
    ],
  },
];

function Timetable() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Slider state
  const [sliderIndex, setSliderIndex] = useState(0);
  const visibleCards = 5;
  const maxSliderIndex = Math.max(0, classData.length - visibleCards);

  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const handlePrev = () => setSliderIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setSliderIndex((prev) => Math.min(prev + 1, maxSliderIndex));

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setDragOffset(dragStart - e.clientX);
  };
  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) handleNext();
      else handlePrev();
    }
    setDragOffset(0);
  };
  const handleMouseLeave = () => {
    if (isDragging) handleMouseUp();
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    setDragOffset(0);
  };
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setDragOffset(dragStart - e.touches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) handleNext();
      else handlePrev();
    }
    setDragOffset(0);
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

    // Entrance animation
    const timer = setTimeout(() => setIsVisible(true), 200);

    // Global mouse drag listeners
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();
    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }
    return () => {
      observer.disconnect();
      clearTimeout(timer);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, dragStart, dragOffset]);

  return (
    <div className="w-full min-h-screen flex flex-col relative overflow-hidden bg-transparent transition-colors duration-500">

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

      {/* Header Section */}
      <div className="relative z-10 pt-5 pb-5">
        <div className={`text-center mb-12 md:mb-16 max-w-4xl mx-auto p-4 sm:p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-50 dark:from-indigo-900/40 dark:to-purple-800/30 text-indigo-600 dark:text-indigo-300 font-semibold rounded-full text-sm mb-6 shadow-lg border border-indigo-200 dark:border-indigo-800/30 transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '200ms' }}>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
            <span>School Timetable</span>
          </div>
          {/* Main Heading */}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
            <span className="text-gray-900 dark:text-gray-100 transition-colors duration-300">View Your </span>
            <span className="relative text-indigo-600 dark:text-indigo-400 transition-colors duration-300 inline-block">
              Class Timetable
              {/* Animated clock icon */}
              <svg className="absolute -top-4 -right-6 sm:-top-6 sm:-right-8 w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 dark:text-yellow-300 transition-colors duration-300 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 8V6a1 1 0 10-2 0v5a1 1 0 00.293.707l3 3a1 1 0 101.414-1.414l-2.707-2.707z" />
              </svg>
            </span>
          </h2>
          {/* Animated underline */}
          <div className={`h-1 w-16 sm:w-20 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 rounded-full mx-auto my-6 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '600ms' }}></div>
          {/* Description */}
          <p className={`text-gray-600 dark:text-gray-400 mt-6 text-base sm:text-lg leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '800ms' }}>
            Find your daily schedule for every class —
            <span className="text-indigo-600 dark:text-indigo-400 font-medium transition-colors duration-300"> organized, clear, and easy to follow.</span>
          </p>
        </div>
      </div>

      {/* Centered Slider Container */}
      <div className="relative z-10 flex justify-center items-center px-4 py-12">
        <div className="flex items-center justify-center max-w-6xl w-full relative z-10">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={sliderIndex === 0}
            className="hidden sm:flex items-center justify-center p-3 rounded-full bg-white dark:bg-gray-800 shadow-2xl border border-indigo-200 dark:border-gray-700 mr-4 flex-shrink-0 transition-all duration-300 hover:scale-125 hover:shadow-indigo-300/50 dark:hover:shadow-indigo-900/50 hover:bg-indigo-50 dark:hover:bg-indigo-900 disabled:opacity-40 disabled:cursor-not-allowed animate-bounce"
            aria-label="Previous classes"
            style={{ boxShadow: "0 4px 24px 0 rgba(99,102,241,0.15)" }}
          >
            <svg className="w-7 h-7 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slider Container */}
          <div
            className="flex-1 overflow-y-hidden scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }}
            onMouseDown={typeof window !== "undefined" && window.innerWidth >= 640 ? handleMouseDown : undefined}
            onMouseMove={typeof window !== "undefined" && window.innerWidth >= 640 ? handleMouseMove : undefined}
            onMouseUp={typeof window !== "undefined" && window.innerWidth >= 640 ? handleMouseUp : undefined}
            onMouseLeave={typeof window !== "undefined" && window.innerWidth >= 640 ? handleMouseLeave : undefined}
            onTouchStart={typeof window !== "undefined" && window.innerWidth < 640 ? handleTouchStart : undefined}
            onTouchMove={typeof window !== "undefined" && window.innerWidth < 640 ? handleTouchMove : undefined}
            onTouchEnd={typeof window !== "undefined" && window.innerWidth < 640 ? handleTouchEnd : undefined}
          >
            <div
              className="flex flex-row gap-8 flex-nowrap px-2 py-2"
              style={{
                minWidth: '100%',
                userSelect: 'none',
                touchAction: 'pan-x',
                transform:
                  typeof window !== "undefined" && window.innerWidth >= 640
                    ? `translateX(calc(-${sliderIndex * 220}px + ${isDragging ? -dragOffset : 0}px))`
                    : undefined,
                transition:
                  typeof window !== "undefined" && window.innerWidth >= 640
                    ? isDragging
                      ? 'none'
                      : 'transform 0.5s cubic-bezier(0.4,0,0.2,1)'
                    : undefined,
              }}
            >
              {classData.map((cls, idx) => (
                <div
                  key={cls.classNum}
                  className={`
                    min-w-[75vw] max-w-[320px] sm:min-w-[200px] sm:max-w-[220px] h-56
                    bg-gradient-to-br from-white via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900
                    rounded-3xl shadow-2xl flex flex-col items-center justify-center cursor-pointer
                    transition-all duration-300 border-2 group flex-shrink-0
                    hover:scale-105 hover:shadow-indigo-200/70 dark:hover:shadow-indigo-900/70
                    ${selectedClass?.classNum === cls.classNum
                      ? 'border-4 border-transparent bg-clip-padding relative z-20'
                      : 'border-gray-200 dark:border-gray-700'}
                  `}
                  style={{
                    boxShadow: selectedClass?.classNum === cls.classNum
                      ? "0 0 0 4px #a5b4fc, 0 8px 32px 0 rgba(99,102,241,0.15)"
                      : undefined,
                    background: selectedClass?.classNum === cls.classNum
                      ? "linear-gradient(135deg, #a5b4fc 0%, #f0abfc 100%)"
                      : undefined,
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onClick={() => setSelectedClass(cls)}
                  onDragStart={e => e.preventDefault()}
                  // 3D tilt effect on hover (desktop only, not while dragging)
                  onMouseMove={e => {
                    if (
                      window.innerWidth < 640 ||
                      isDragging // Don't tilt while dragging
                    )
                      return;
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * 8;
                    const rotateY = ((x - centerX) / centerX) * 8;
                    card.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
                  }}
                  onMouseLeave={e => {
                    if (window.innerWidth < 640) return;
                    e.currentTarget.style.transform = '';
                  }}
                >
                  {/* Animated glowing border for selected */}
                  {selectedClass?.classNum === cls.classNum && (
                    <span className="absolute inset-0 rounded-3xl pointer-events-none animate-pulse"
                      style={{
                        boxShadow: "0 0 32px 8px #a5b4fc, 0 0 0 8px #f0abfc44",
                        zIndex: 1,
                        opacity: 0.7,
                      }}
                    />
                  )}
                  <span className="text-7xl font-extrabold text-indigo-600 dark:text-indigo-300 group-hover:text-purple-600 transition-colors duration-300 select-none drop-shadow-lg">
                    {cls.classNum}
                  </span>
                  <span className="mt-3 text-xl font-bold text-gray-700 dark:text-gray-200 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300 select-none tracking-wide uppercase">
                    Class
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={sliderIndex >= maxSliderIndex}
            className="hidden sm:flex items-center justify-center p-3 rounded-full bg-white dark:bg-gray-800 shadow-2xl border border-indigo-200 dark:border-gray-700 ml-4 flex-shrink-0 transition-all duration-300 hover:scale-125 hover:shadow-indigo-300/50 dark:hover:shadow-indigo-900/50 hover:bg-indigo-50 dark:hover:bg-indigo-900 disabled:opacity-40 disabled:cursor-not-allowed animate-bounce"
            aria-label="Next classes"
            style={{ boxShadow: "0 4px 24px 0 rgba(168,85,247,0.15)" }}
          >
            <svg className="w-7 h-7 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Class indicators */}
      <div className="relative z-10 flex justify-center mt-4 mb-8">
        <div className="flex space-x-2">
          {Array.from({ length: Math.ceil(classData.length / visibleCards) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSliderIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(sliderIndex / visibleCards) === idx ||
                (sliderIndex >= idx * visibleCards && sliderIndex < (idx + 1) * visibleCards)
                  ? 'bg-indigo-500 scale-125'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-indigo-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Timetable Modal */}
      {selectedClass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-lg w-full mx-4 p-8 animate-in slide-in-from-bottom-4 duration-500">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold transition-colors duration-200 w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50 dark:hover:bg-red-900/20"
              onClick={() => setSelectedClass(null)}
              aria-label="Close timetable"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-200 mb-6 text-center">
              Class {selectedClass.classNum} Timetable
            </h3>
            <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
                  <tr>
                    <th className="py-3 px-4 text-left text-indigo-600 dark:text-indigo-300 font-semibold">Period</th>
                    <th className="py-3 px-4 text-left text-indigo-600 dark:text-indigo-300 font-semibold">Subject</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedClass.timetable.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`transition-colors duration-200 ${
                        row.subject === 'Break'
                          ? 'bg-yellow-50 dark:bg-yellow-900/10'
                          : 'hover:bg-indigo-50 dark:hover:bg-indigo-900/10'
                      } ${idx !== selectedClass.timetable.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}
                    >
                      <td className="py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">{row.period}</td>
                      <td className={`py-3 px-4 ${row.subject === 'Break' ? 'text-yellow-600 dark:text-yellow-400 font-semibold' : 'text-gray-600 dark:text-gray-400'}`}>
                        {row.subject}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Timetable;