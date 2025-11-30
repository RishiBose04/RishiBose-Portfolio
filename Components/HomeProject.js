import styles from '../styles/Home.module.css';
import Link from 'next/link';

const HomeProject = ({ currentTheme, project, id }) => {
  const thumb = project.photo?.[0]; // first image as thumbnail

  return (
    <article
      className={styles.projectmain}
      style={{
        borderColor: currentTheme.accent,
        borderRadius: id % 2 === 0 ? '32px 8px 24px 8px' : '8px 32px 8px 24px',
        backgroundColor: currentTheme.body,
        boxShadow: currentTheme.boxShadow,
      }}
    >
      <div className={styles.projectContent}>
        {thumb && (
          <div className={styles.projectThumbWrapper}>
            <img
              src={thumb.src ?? thumb}
              alt={project.name}
              className={styles.projectThumb}
            />
          </div>
        )}

        <h2 className={styles.projectTitle}>{project.name}</h2>

        <p
          className={styles.projectSubTitle}
          style={{ color: currentTheme.subtext }}
        >
          {project.description}
        </p>

        <Link
          href={project.projectLink}
          target="_blank"
          className={styles.cta2}
          style={{
            color: currentTheme.tertiary,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontSize: '13px',
          }}
        >
          View project&nbsp;&gt;
        </Link>
      </div>
    </article>
  );
};

export default HomeProject;
