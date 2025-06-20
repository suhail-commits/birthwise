import React, { useState, useRef } from 'react';
import { Heart, Send, Settings, FileText, X } from 'lucide-react';
import '../styles/ChatbotSection.css';

const ChatbotSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{id: number, text: string, isUser: boolean}>>([]);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    soundEffects: false
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Simulate file upload
      const fileMessage = {
        id: Date.now(),
        text: `📎 Uploaded: ${file.name}`,
        isUser: true
      };
      setMessages(prev => [...prev, fileMessage]);
      
      // AI response to file upload
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          text: "I've received your file. Let me analyze it and provide you with relevant information about your pregnancy journey.",
          isUser: false
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const closeModal = () => {
    setShowSettings(false);
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
              <FileText 
                className="tool-icon" 
                onClick={handleFileClick}
                title="Upload file"
              />
              <Settings 
                className="tool-icon" 
                onClick={handleSettingsClick}
                title="Settings"
              />
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
                className="file-input"
                accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
              />
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

      {/* Settings Modal */}
      {showSettings && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Settings</h2>
              <button className="modal-close" onClick={closeModal}>
                <X size={20} />
              </button>
            </div>

            <div className="settings-section">
              <h3>Preferences</h3>
              
              <div className="setting-item">
                <span className="setting-label">Enable Notifications</span>
                <div 
                  className={`setting-toggle ${settings.notifications ? 'active' : ''}`}
                  onClick={() => toggleSetting('notifications')}
                />
              </div>

              <div className="setting-item">
                <span className="setting-label">Dark Mode</span>
                <div 
                  className={`setting-toggle ${settings.darkMode ? 'active' : ''}`}
                  onClick={() => toggleSetting('darkMode')}
                />
              </div>

              <div className="setting-item">
                <span className="setting-label">Auto-save Conversations</span>
                <div 
                  className={`setting-toggle ${settings.autoSave ? 'active' : ''}`}
                  onClick={() => toggleSetting('autoSave')}
                />
              </div>

              <div className="setting-item">
                <span className="setting-label">Sound Effects</span>
                <div 
                  className={`setting-toggle ${settings.soundEffects ? 'active' : ''}`}
                  onClick={() => toggleSetting('soundEffects')}
                />
              </div>
            </div>

            <div className="settings-section">
              <h3>Data Management</h3>
              
              <div className="setting-item">
                <span className="setting-label">Export Chat History</span>
                <button className="file-button" onClick={() => alert('Chat history exported!')}>
                  Export
                </button>
              </div>

              <div className="setting-item">
                <span className="setting-label">Clear All Data</span>
                <button 
                  className="file-button" 
                  style={{backgroundColor: '#dc3545'}}
                  onClick={() => {
                    if (confirm('Are you sure you want to clear all data?')) {
                      setMessages([]);
                      alert('All data cleared!');
                      closeModal();
                    }
                  }}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotSection;