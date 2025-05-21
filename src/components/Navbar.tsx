import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sprout } from 'lucide-react';
import '../styles/Navbar.css';

interface NavbarProps {
  currentSection: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`navbar ${currentSection > 0 ? 'scrolled' : ''}`}>
      <div className="navbar-brand">
        <Sprout className="logo" size={24} />
        <span className="brand-text">BirthWise</span>
      </div>
      <div className="navbar-links">
        <button onClick={handleHomeClick} className="nav-link">Home</button>
      </div>
    </nav>
  );
};

export default Navbar;