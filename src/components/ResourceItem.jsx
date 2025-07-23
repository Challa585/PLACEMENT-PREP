import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ResourceItem.module.css';

function ResourceItem({ resource }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderStars = (difficulty) => {
    return '★'.repeat(difficulty) + '☆'.repeat(5 - difficulty);
  };

  return (
    <div className={styles.resourceItem}>
      <div className={styles.header} onClick={toggleExpand}>
        <h3>{resource.title}</h3>
        <span className={styles.toggleIcon}>{isExpanded ? '▲' : '▼'}</span>
      </div>
      <div className={styles.details}>
        <p><strong>Type:</strong> {resource.type}</p>
        <p><strong>Difficulty:</strong> {renderStars(resource.difficulty)}</p>
      </div>
      {isExpanded && (
        <div className={styles.content}>
          <p>{resource.content}</p>
        </div>
      )}
    </div>
  );
}

ResourceItem.propTypes = {
  resource: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    difficulty: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResourceItem;