import React from 'react';
import { Baby, Users, Stethoscope, MessageSquare } from 'lucide-react';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="badge">AI PREGNANCY ASSISTANT</div>
        <h1 className="hero-title">
          Your Personal
          <span className="highlight"> Pregnancy Guide</span>
        </h1>
        <p className="hero-subtitle">
          BirthWise is your AI-powered companion throughout your pregnancy journey,
          providing personalized support for expectant parents and healthcare professionals.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">GET STARTED</button>
          <button className="btn-secondary">KEY FEATURES</button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <h2 className="features-title">Features That Support Your Journey</h2>
        <div className="features-grid">
          <div className="feature-card">
            <Baby className="feature-icon" />
            <h3>Pregnancy Tracking</h3>
            <p>Monitor your pregnancy milestones with personalized insights and recommendations.</p>
          </div>
          <div className="feature-card">
            <MessageSquare className="feature-icon" />
            <h3>AI Consultation</h3>
            <p>Get instant answers to your pregnancy-related questions from our AI assistant.</p>
          </div>
          <div className="feature-card">
            <Users className="feature-icon" />
            <h3>Community Support</h3>
            <p>Connect with other expectant parents and share experiences in a safe space.</p>
          </div>
          <div className="feature-card">
            <Stethoscope className="feature-icon" />
            <h3>Professional Network</h3>
            <p>Access a network of verified healthcare providers and pregnancy specialists.</p>
          </div>
        </div>
      </section>

      {/* AI Chat Preview */}
      <section className="chat-preview-section">
        <div className="chat-container">
          <div className="chat-header">Ask BirthWise AI</div>
          <div className="chat-input">
            <input type="text" placeholder="Type your pregnancy-related question..." />
            <button className="send-button">→</button>
          </div>
        </div>
        <div className="trusted-by">
          <p>TRUSTED BY LEADING HEALTHCARE PROVIDERS</p>
          <div className="logo-strip">
            {/* Add partner logos here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;