import React, { useState, useEffect } from "react";
import Timetable from './Timetable'; // import your existing Timetable component
import Homework from './Homework'; // import your existing Timetable component
import '../App.css'; // import blur & overlay styles

function TimetableWrapper() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  
  const handleLogin = () => {
    // replace with real auth
    if (localStorage.authToken) {
      setIsAuthenticated(true);
    }
    console.log("Hey");
  };

  return (
    <div className="relative">
      {/* Overlay when not authenticated */}
      {!isAuthenticated && (
        <div className="overlay">
          <p>Login to get the content</p>
          <button
            onClick={handleLogin}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </div>
      )}

      {/* Timetable component blurred if not authenticated */}
      <div className={isAuthenticated ? '' : 'blur'}>
        <Timetable />
        <Homework />
      </div>
    </div>
  );
}

export default TimetableWrapper;
