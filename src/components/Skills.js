import React from 'react';
import styles from '../styles/Skills.module.css'; 

const Skills = () => {
  const skillSet = [
    { name: 'HTML', level: '80%' },
    { name: 'CSS', level: '70%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'React', level: '75%' },
    { name: 'Photoshop', level: '65%' },
    { name: 'Adobe XD', level: '60%' },
    { name: 'Node.js', level: '70%' },
    { name: 'WordPress', level: '90%' },
  ];

  return (
    <div className={styles.skills}>
      <div className={styles.skillsContent}>
        <h2>Skills</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</p>
        <div className={styles.skillsList}>
          <div className={styles.focusArea}>
            <h3>MY FOCUS</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>Web Design</li>
              <li>Mobile App Design</li>
            </ul>
          </div>
          <div className={styles.skillBars}>
            {skillSet.map((skill) => (
              <div key={skill.name} className={styles.skill}>
                <span className={styles.skillName}>{skill.name}</span>
                <div className={styles.skillBar}>
                  <div className={styles.skillLevel} style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
