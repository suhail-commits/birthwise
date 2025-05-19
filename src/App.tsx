import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;