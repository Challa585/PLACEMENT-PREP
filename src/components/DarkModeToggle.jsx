// src/components/DarkModeToggle.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/DarkModeToggle.module.css';

function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button className={styles.toggleButton} onClick={toggleDarkMode}>
      {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}

export default DarkModeToggle;
