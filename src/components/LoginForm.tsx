import React, { useState } from 'react';
import Button from './ui/Button';
import '../styles/AuthForms.css';

interface LoginFormProps {
  toggleAuthMode: () => void;
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ toggleAuthMode, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
    onLogin(); // Simulate successful login
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
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
          placeholder="Enter your password"
        />
      </div>
      
      <div className="form-actions">
        <Button type="submit" variant="primary">
          Login
        </Button>
      </div>
      
      <p className="auth-switch">
        Don't have an account?{' '}
        <button type="button" onClick={toggleAuthMode} className="switch-button">
          Sign up
        </button>
      </p>
    </form>
  );
};

export default LoginForm;