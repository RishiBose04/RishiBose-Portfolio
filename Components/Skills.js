import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { userinfo, ctaTexts, headings } from '../Constants/userinfo';

const Skills = ({ currentTheme }) => {
  const capabilities = userinfo.capabilities || [];

  return (
    <>
      <h1 className={styles.workheading} data-aos="fade-up">
        {headings.capabilities}
      </h1>

      <div
        className={styles.skillsElegant}
        style={{ color: currentTheme.subtext }}
      >
        {capabilities.map((value, index) => (
          <div
            key={index}
            className={styles.skillCard}
            style={{ borderColor: currentTheme.subtext }}
            data-aos="fade-up"
          >
            <h2
              className={styles.skillCardHeading}
              style={{ color: currentTheme.text }}
            >
              {value.category}
            </h2>

            <ul className={styles.skillCardList}>
              {value.skills?.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', padding: '1rem 0' }}>
        <Link
          href="/contact"
          className={styles.cta3}
          style={{
            background: 'transparent',
            border: `2px solid ${currentTheme.accent}`,
          }}
        >
          {ctaTexts.capabCTA} <span>&gt;</span>
        </Link>
      </div>
    </>
  );
};

export default Skills;
