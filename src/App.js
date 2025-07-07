import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseDetail from './pages/CourseDetail';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;




