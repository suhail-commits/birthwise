import React, { useState } from 'react';
import { Heart, Send, Settings, FileText } from 'lucide-react';
import '../styles/ChatbotSection.css';

const ChatbotSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{id: number, text: string, isUser: boolean}>>([]);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const newMessage = {
      id: Date.now(),
      text: message,
      isUser: true
    };

    setMessages(prev => [...prev, newMessage]);
    
    // Expand to full mode and mark as interacted
    if (!hasInteracted) {
      setIsExpanded(true);
      setHasInteracted(true);
      
      // Add AI response after a short delay
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          text: "Hi there! I'm your BirthWise AI assistant. How can I help with your pregnancy journey today?",
          isUser: false
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    } else {
      // Add AI response for subsequent messages
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          text: "Hello! I'm your BirthWise AI assistant, designed to support you throughout your pregnancy journey. I can help with:",
          isUser: false
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }

    setMessage('');
  };

  const handleInputFocus = () => {
    if (!hasInteracted) {
      setIsExpanded(true);
    }
  };

  return (
    <div className={`chatbot-container ${isExpanded ? 'expanded' : 'compact'}`}>
      {!isExpanded ? (
        // Compact Mode
        <div className="chatbot-compact">
          <div className="heart-icon">
            <Heart className="heart" fill="currentColor" />
          </div>
          
          <form onSubmit={handleSubmit} className="compact-form">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={handleInputFocus}
              placeholder="Share your pregnancy journey..."
              className="compact-input"
            />
            <button type="submit" className="compact-submit">
              Submit
            </button>
          </form>
          
          <div className="trust-banner">
            TRUSTED BY LEADING HEALTHCARE PROVIDERS
          </div>
        </div>
      ) : (
        // Expanded Mode
        <div className="chatbot-expanded">
          <div className="chat-header">
            <div className="header-left">
              <Heart className="header-heart" fill="currentColor" />
              <span className="assistant-title">BirthWise AI Assistant</span>
            </div>
            <div className="header-right">
              <Settings className="header-icon" />
              <FileText className="header-icon" />
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.isUser ? 'user-message' : 'ai-message'}`}>
                {!msg.isUser && (
                  <div className="ai-avatar">
                    <Heart className="avatar-heart" fill="currentColor" />
                  </div>
                )}
                <div className="message-content">
                  {msg.text}
                </div>
                {msg.isUser && (
                  <div className="user-avatar">
                    hi
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="chat-input-area">
            <div className="input-tools">
              <FileText className="tool-icon" />
              <Settings className="tool-icon" />
            </div>
            
            <form onSubmit={handleSubmit} className="expanded-form">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message BirthWise AI..."
                className="expanded-input"
              />
              <button type="submit" className="expanded-submit">
                <Send className="send-icon" />
              </button>
            </form>
          </div>

          <div className="trust-banner-expanded">
            TRUSTED BY LEADING HEALTHCARE PROVIDERS
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotSection;