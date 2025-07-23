// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import PlacementChecker from './components/placementChecker';
import ResourceList from './components/ResourceList';
import CountdownTimer from './components/CountdownTimer';
import DarkModeToggle from './components/DarkModeToggle';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <div className="container">
          <DarkModeToggle />
          <MainContent />
          <PlacementChecker />
          <ResourceList />
          <CountdownTimer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
