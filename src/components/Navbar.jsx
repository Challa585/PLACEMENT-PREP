import React from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>PlacementPrep</div>
      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#practice">Practice</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className={styles.profileIcon}>
        <i className="fas fa-user-circle"></i> {/* Using Font Awesome for icon */}
      </div>
    </nav>
  );
}

export default Navbar;