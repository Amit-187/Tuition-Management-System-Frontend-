// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Teachers from './components/Teachers';
import Topper from './components/Topper';
import Login from './components/Login';
import Timetable from './components/Timetable';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Homework from './components/Homework';
import TimetableWrapper from './components/TimetableWrapper';

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar inside Router */}
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Topper />
            <Teachers />
            <TimetableWrapper />
            <Footer />
            
            
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
