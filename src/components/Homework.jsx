import React, { useState, useEffect } from 'react'

const classes = Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`);

// Example homework data (replace with API or props as needed)
const homeworkData = {
  "Class 1": [
    { subject: "Math", task: "Practice numbers 1-20", due: "2025-08-10" },
    { subject: "English", task: "Read page 5-7", due: "2025-08-11" }
  ],
  "Class 2": [
    { subject: "Science", task: "Draw parts of a plant", due: "2025-08-10" },
    { subject: "Math", task: "Addition worksheet", due: "2025-08-11" }
  ],
  "Class 3": [
    { subject: "English", task: "Write a short story", due: "2025-08-12" },
    { subject: "EVS", task: "Collect leaves", due: "2025-08-13" }
  ],
  "Class 4": [
    { subject: "Math", task: "Multiplication tables 2-5", due: "2025-08-12" },
    { subject: "Science", task: "Draw the solar system", due: "2025-08-13" }
  ],
  "Class 5": [
    { subject: "English", task: "Read chapter 3", due: "2025-08-14" },
    { subject: "Math", task: "Fractions worksheet", due: "2025-08-15" }
  ],
  "Class 6": [
    { subject: "Science", task: "Experiment on magnets", due: "2025-08-14" },
    { subject: "Math", task: "Solve Ex 2.1", due: "2025-08-15" }
  ],
  "Class 7": [
    { subject: "English", task: "Essay on 'My Hobby'", due: "2025-08-16" },
    { subject: "Math", task: "Practice algebra", due: "2025-08-17" }
  ],
  "Class 8": [
    { subject: "Science", task: "Make a model of cell", due: "2025-08-16" },
    { subject: "Social", task: "Map work: States of India", due: "2025-08-17" }
  ],
  "Class 9": [
    { subject: "Math", task: "Quadratic equations worksheet", due: "2025-08-18" },
    { subject: "English", task: "Read 'The Road Not Taken'", due: "2025-08-19" }
  ],
  "Class 10": [
    { subject: "Science", task: "Notes on chemical reactions", due: "2025-08-18" },
    { subject: "Math", task: "Trigonometry Ex 4.2", due: "2025-08-19" }
  ],
  "Class 11": [
    { subject: "Physics", task: "Numericals on motion", due: "2025-08-20" },
    { subject: "Math", task: "Limits and Derivatives", due: "2025-08-21" }
  ],
  "Class 12": [
    { subject: "Mathematics", task: "Solve integration problems from Ex 7.2", due: "2025-08-22" },
    { subject: "Physics", task: "Prepare notes on Electromagnetic Induction", due: "2025-08-23" },
    { subject: "English", task: "Write an essay on 'Global Warming'", due: "2025-08-24" }
  ]
};

function Homework() {
  const [selectedClass, setSelectedClass] = useState(classes[0]);
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Listen for theme changes
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

    // Entrance animation for content
    const timer = setTimeout(() => setIsVisible(true), 200);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className={`relative max-w-4xl mx-auto py-10 px-4 min-h-[80vh] rounded-2xl shadow-2xl overflow-hidden transition-colors duration-500
        ${isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900'
          : 'bg-gradient-to-br from-indigo-50 via-white to-pink-50'
        }
      `}>
        {/* Bubble Animation Background */}
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
          <div className="absolute inset-0 backdrop-blur-2xl" />
        </div>

        <h1 className={`text-3xl font-extrabold mb-8 text-center tracking-tight drop-shadow relative z-10 transition-all duration-700
          ${isDarkMode ? 'text-indigo-200' : 'text-indigo-700'}
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>📚 Student Homework</h1>
        <div className={`flex flex-wrap justify-center gap-2 mb-8 relative z-10 transition-all duration-700
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          {classes.map(cls => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`px-4 py-1.5 rounded-full border font-medium shadow-sm transition-all duration-300
                ${selectedClass === cls
                  ? 'bg-gradient-to-r from-indigo-500 to-pink-400 text-white scale-110 shadow-lg'
                  : isDarkMode
                    ? 'bg-gray-900 text-indigo-200 border-indigo-700 hover:bg-indigo-900 hover:scale-105'
                    : 'bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-50 hover:scale-105'
                }
              `}
              style={{ minWidth: 90 }}
            >
              {cls}
            </button>
          ))}
        </div>
        <div className={`rounded-2xl shadow-xl p-8 animate-fadeInUp relative z-10 transition-all duration-700
          ${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'}
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h2 className={`text-xl font-semibold mb-5 flex items-center gap-2
            ${isDarkMode ? 'text-indigo-300' : 'text-indigo-600'}
          `}>
            <span className="inline-block animate-bounce">📝</span>
            {selectedClass} Homework
          </h2>
          {homeworkData[selectedClass] ? (
            <ul className="space-y-4">
              {homeworkData[selectedClass].map((hw, idx) => (
                <li
                  key={idx}
                  className={`border-b last:border-b-0 pb-3 flex items-start gap-3 group transition-all duration-300 hover:bg-indigo-50/60 dark:hover:bg-indigo-900/40 rounded-lg px-2 animate-fadeIn`}
                  style={{ animationDelay: `${idx * 80 + 100}ms` }}
                >
                  <div className={`mt-1 group-hover:scale-110 transition-transform
                    ${isDarkMode ? 'text-indigo-300' : 'text-indigo-400'}
                  `}>📖</div>
                  <div>
                    <span className={`font-bold ${isDarkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>{hw.subject}:</span> {hw.task}
                    <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">Due: <span className="font-semibold">{hw.due}</span></span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-400 dark:text-gray-500 text-center py-8 animate-pulse">No homework assigned for this class.</div>
          )}
        </div>
      </div>
    </>
  )
}

export default Homework