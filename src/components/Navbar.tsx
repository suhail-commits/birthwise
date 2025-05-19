import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';
import '../styles/Navbar.css';

interface NavbarProps {
  currentSection: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection }) => {
  return (
    <nav className={`navbar ${currentSection > 0 ? 'scrolled' : ''}`}>
      <div className="navbar-brand">
        <Sprout className="logo" size={24} />
        <span className="brand-text">BirthWise</span>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;