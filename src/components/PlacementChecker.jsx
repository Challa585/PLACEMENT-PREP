import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/PlacementChecker.module.css';


function PlacementChecker() {
  const [branch, setBranch] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [skills, setSkills] = useState([]);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSkillChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSkills((prevSkills) => [...prevSkills, value]);
    } else {
      setSkills((prevSkills) => prevSkills.filter((skill) => skill !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let message = '';
    let className = '';

    const cgpaValue = parseFloat(cgpa);

    if (cgpaValue >= 8) {
      message = 'High chance! Keep polishing skills.';
      className = styles.highChance;
    } else if (cgpaValue >= 7) {
      message = 'Good chance, focus on weak areas.';
      className = styles.goodChance;
    } else {
      message = 'Needs improvement. Check our resources.';
      className = styles.needsImprovement;
    }

    setResult({ message, className });
    setShowResult(true);

    
    setTimeout(() => {
      document.querySelector(`.${styles.resultMessage}`).style.opacity = 1;
    }, 50);
  };

  return (
    <section className={styles.placementChecker} id="home">
      <h2 className={styles.title}>Check Your Placement Readiness</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="branch">Select your branch:</label>
          <select
            id="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          >
            <option value="">-- Select Branch --</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="ME">ME</option>
            <option value="CE">CE</option>
            <option value="IT">IT</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cgpa">Current CGPA:</label>
          <input
            type="number"
            id="cgpa"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            step="0.1"
            min="0"
            max="10"
            required
            placeholder="e.g., 8.5"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Skills Known:</label>
          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                value="JavaScript"
                checked={skills.includes('JavaScript')}
                onChange={handleSkillChange}
              />
              JavaScript
            </label>
            <label>
              <input
                type="checkbox"
                value="Python"
                checked={skills.includes('Python')}
                onChange={handleSkillChange}
              />
              Python
            </label>
            <label>
              <input
                type="checkbox"
                value="DSA"
                checked={skills.includes('DSA')}
                onChange={handleSkillChange}
              />
              DSA (Data Structures & Algorithms)
            </label>
            <label>
              <input
                type="checkbox"
                value="ReactJS"
                checked={skills.includes('ReactJS')}
                onChange={handleSkillChange}
              />
              ReactJS
            </label>
            <label>
              <input
                type="checkbox"
                value="SQL"
                checked={skills.includes('SQL')}
                onChange={handleSkillChange}
              />
              SQL
            </label>
            <label>
              <input
                type="checkbox"
                value="NodeJS"
                checked={skills.includes('NodeJS')}
                onChange={handleSkillChange}
              />
              NodeJS
            </label>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>Check Readiness</button>
      </form>

      {showResult && (
        <div className={`${styles.resultContainer} ${result.className}`}>
          <p className={styles.resultMessage}>{result.message}</p>
        </div>
      )}
    </section>
  );
}


PlacementChecker.propTypes = {

};

export default PlacementChecker;