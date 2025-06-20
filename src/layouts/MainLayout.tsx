import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';
import BirthwiseSection from '../components/BirthwiseSection';
import ChatbotSection from '../components/ChatbotSection';
import { useLocation } from 'react-router-dom';
import '../styles/MainLayout.css';

const MainLayout: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showSignup, setShowSignup] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const newSection = Math.floor(scrollPosition / windowHeight);
      setCurrentSection(newSection);

      if (newSection >= 2) {
        setShowLogin(true);
      } else {
        setShowLogin(false);
        setShowSignup(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const toggleAuthMode = () => {
    setShowSignup(!showSignup);
  };

  if (isAuthenticated) {
    return (
      <div className="layout-container">
        <Navbar currentSection={0} />
        <HomePage />
      </div>
    );
  }

  return (
    <div className="layout-container" ref={containerRef}>
      <Navbar currentSection={currentSection} />
      
      <main className="main-content">
        <section className="section birthwise-section">
          <BirthwiseSection />
        </section>
        
        <section className="section chatbot-section">
          <ChatbotSection />
        </section>
        
        <section className="section auth-section">
          <AuthPage 
            isSignup={showSignup} 
            toggleAuthMode={toggleAuthMode}
            onLogin={handleLogin}
          />
        </section>
      </main>
      
      <div className="scroll-indicators">
        <div className={`indicator ${currentSection === 0 ? 'active' : ''}`} />
        <div className={`indicator ${currentSection === 1 ? 'active' : ''}`} />
        <div className={`indicator ${currentSection === 2 ? 'active' : ''}`} />
      </div>
    </div>
  );
};

export default MainLayout;