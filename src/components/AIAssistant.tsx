import React, { useState } from 'react';
import '../styles/AIAssistant.css';

const AIAssistant: React.FC = () => {
  const [message, setMessage] = useState('');
  
  return (
    <div className="ai-container">
      <div className="heart-container">
        <div className="heart"></div>
      </div>
      
      <div className="chat-interface">
        <div className="input-container">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your pregnancy journey..."
            className="chat-input"
          />
          <button className="submit-button">Submit</button>
        </div>
        
        <div className="response-area">
          <h3 className="assistant-title">BirthWise AI Assistant</h3>
          <div className="response-content">
            Based on your pregnancy journey, here are some personalized recommendations...
          </div>
        </div>
        
        <div className="trust-banner">
          TRUSTED BY LEADING HEALTHCARE PROVIDERS
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;