import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#007bff', color: 'white' }}>
      <span style={{ fontWeight: 'bold', marginRight: '20px' }}>SkillUp</span>
      <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Home</Link>
      <Link to="/courses" style={{ color: 'white', marginRight: '15px' }}>Courses</Link>
      <Link to="/contact" style={{ color: 'white', marginRight: '15px' }}>Contact</Link>
      <Link to="/login" style={{ color: 'white' }}>Login</Link>
    </nav>
  );
};

export default Navbar;
