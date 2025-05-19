import React, { useState } from 'react';
import Button from './ui/Button';
import '../styles/AuthForms.css';

interface SignupFormProps {
  toggleAuthMode: () => void;
  onLogin: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ toggleAuthMode, onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt with:', { name, email, password });
    onLogin(); // Simulate successful signup and login
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your full name"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Create a password"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="Confirm your password"
        />
      </div>
      
      <div className="form-actions">
        <Button type="submit" variant="primary">
          Sign Up
        </Button>
      </div>
      
      <p className="auth-switch">
        Already have an account?{' '}
        <button type="button" onClick={toggleAuthMode} className="switch-button">
          Login
        </button>
      </p>
    </form>
  );
};

export default SignupForm;