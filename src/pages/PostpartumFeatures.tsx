import React from 'react';
import { Baby, Heart, Moon, Utensils } from 'lucide-react';
import '../styles/Features.css';

const PostpartumFeatures: React.FC = () => {
  return (
    <div className="features-page">
      <h1 className="features-title">Postpartum Care Features</h1>
      
      <div className="features-grid">
        <div className="feature-card">
          <Baby className="feature-icon" />
          <h3>Baby Development</h3>
          <p>Track your baby's growth, milestones, and developmental progress.</p>
        </div>
        
        <div className="feature-card">
          <Heart className="feature-icon" />
          <h3>Recovery Tracking</h3>
          <p>Monitor your postpartum recovery and emotional well-being.</p>
        </div>
        
        <div className="feature-card">
          <Moon className="feature-icon" />
          <h3>Sleep Patterns</h3>
          <p>Track baby's sleep schedule and get personalized sleep recommendations.</p>
        </div>
        
        <div className="feature-card">
          <Utensils className="feature-icon" />
          <h3>Nutrition Guide</h3>
          <p>Personalized nutrition advice for breastfeeding and postpartum recovery.</p>
        </div>
      </div>
    </div>
  );
};

export default PostpartumFeatures;