import React from 'react';
import styles from '../styles/MainContent.module.css';
import studentSuccessImage from '../assets/student-success.jpg'; 

function MainContent() {
  return (
    <section className={styles.mainContent}>
      <div className={styles.imageSection}>
        <img src={studentSuccessImage} alt="Student Success" className={styles.studentImage} />
      </div>
      <div className={styles.loginFormSection}>
        <h2>Login / Sign Up</h2>
        <form className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className={styles.loginButton}>Login</button>
        </form>
      </div>
    </section>
  );
}

export default MainContent;