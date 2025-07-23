import React from 'react';
import ResourceItem from './ResourceItem';
import styles from '../styles/ResourceList.module.css'; // if component is in /components/


const mockResources = [
  {
    id: 1,
    title: 'Cracking the Coding Interview',
    type: 'article',
    difficulty: 5,
    content: 'An essential guide covering data structures, algorithms, and common interview questions. Focuses on problem-solving strategies and optimizing solutions. Includes numerous practice problems with detailed explanations.',
  },
  {
    id: 2,
    title: 'Complete JavaScript Course 2024',
    type: 'video',
    difficulty: 3,
    content: 'A comprehensive video course for mastering JavaScript from beginner to advanced. Covers ES6+, asynchronous JavaScript, DOM manipulation, and modern frameworks. Ideal for frontend and backend development.',
  },
  {
    id: 3,
    title: 'Python for Data Science',
    type: 'video',
    difficulty: 4,
    content: 'Learn Python with a focus on data science libraries like NumPy, Pandas, and Matplotlib. Includes practical examples for data analysis, visualization, and machine learning fundamentals.',
  },
  {
    id: 4,
    title: 'SQL Interview Questions',
    type: 'quiz',
    difficulty: 3,
    content: 'Practice your SQL skills with a set of challenging interview questions. Covers Joins, Subqueries, Window Functions, and database design principles. Test your knowledge with immediate feedback.',
  },
  {
    id: 5,
    title: 'React Hooks Deep Dive',
    type: 'article',
    difficulty: 4,
    content: 'An in-depth article exploring the useState, useEffect, useContext, and other advanced React Hooks. Learn best practices for state management and side effects in functional components.',
  },
  {
    id: 6,
    title: 'System Design Interview Prep',
    type: 'video',
    difficulty: 5,
    content: 'Prepare for system design interviews with this series covering scalable architectures, microservices, databases, and distributed systems. Essential for senior roles.',
  },
];

function ResourceList() {
  return (
    <section className={styles.resourceList} id="resources">
      <h2 className={styles.title}>Placement Resources</h2>
      <div className={styles.resourcesContainer}>
        {mockResources.map((resource) => (
          <ResourceItem key={resource.id} resource={resource} />
        ))}
      </div>
    </section>
  );
}

export default ResourceList;