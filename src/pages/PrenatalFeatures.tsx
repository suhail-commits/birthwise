import React from 'react';
import { Baby, Heart, Calendar, Activity } from 'lucide-react';
import '../styles/Features.css';

const PrenatalFeatures: React.FC = () => {
  return (
    <div className="features-page">
      <h1 className="features-title">Prenatal Care Features</h1>
      
      <div className="features-grid">
        <div className="feature-card">
          <Baby className="feature-icon" />
          <h3>Pregnancy Tracking</h3>
          <p>Track your baby's development week by week with detailed insights and milestones.</p>
        </div>
        
        <div className="feature-card">
          <Heart className="feature-icon" />
          <h3>Health Monitoring</h3>
          <p>Monitor vital signs, symptoms, and overall well-being throughout your pregnancy.</p>
        </div>
        
        <div className="feature-card">
          <Calendar className="feature-icon" />
          <h3>Appointment Management</h3>
          <p>Keep track of doctor visits, tests, and important pregnancy-related appointments.</p>
        </div>
        
        <div className="feature-card">
          <Activity className="feature-icon" />
          <h3>Exercise Guidelines</h3>
          <p>Safe exercise recommendations tailored to your pregnancy stage.</p>
        </div>
      </div>
    </div>
  );
};

export default PrenatalFeatures;