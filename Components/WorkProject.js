import styles from '../styles/Work.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { HStack, Tag, TagLabel, Tooltip, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

const WorkProject = ({ currentTheme, project, id }) => {
  const toast = useToast();
  const [index, setIndex] = useState(0);

  const showGitToast = () => {
    toast({
      description: 'Sorry, this project has a private repository!',
      status: 'info',
      isClosable: true,
    });
  };

  const showProjToast = () => {
    toast({
      description: 'Sorry, this project has not been deployed yet!',
      status: 'info',
      isClosable: true,
    });
  };

  const ahead = () => {
    setIndex(prev => (prev === project.photo.length - 1 ? 0 : prev + 1));
  };

  const back = () => {
    setIndex(prev => (prev === 0 ? project.photo.length - 1 : prev - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: ahead,
    onSwipedRight: back,
  });

  return (
    <div
      className={styles.parentofparentcard}
      style={{
        justifyContent: id % 2 === 0 ? 'flex-start' : 'flex-end',
      }}
    >
      <article
        className={styles.parentcard}
        style={{
          borderColor: currentTheme.footerColor,
          boxShadow: currentTheme.boxShadow,
          backgroundColor: currentTheme.body,
        }}
      >
        <header className={styles.cardtitle}>
          <h2 className={styles.projtitle}>{project.name}</h2>
          <HStack spacing={2}>
            {project.tech.map(tech => (
              <Tag
                key={tech}
                size="sm"
                borderRadius="full"
                variant="subtle"
                colorScheme={currentTheme.name === 'light' ? 'cyan' : 'purple'}
              >
                <TagLabel>{tech}</TagLabel>
              </Tag>
            ))}
          </HStack>
        </header>

        <div className={styles.imageandsocials}>
          <div
            className={styles.card}
            {...handlers}
            style={{ borderColor: currentTheme.footerColor }}
          >
            <Image
              src={project.photo[index]}
              alt={`${project.name} screenshot ${index + 1}`}
              height={300}
              width={500}
              className={styles.projectImage}
            />
            <button
              onClick={back}
              className={styles.carouselArrowLeft}
              aria-label="Previous screenshot"
            >
              &lt;
            </button>
            <button
              onClick={ahead}
              className={styles.carouselArrowRight}
              aria-label="Next screenshot"
            >
              &gt;
            </button>
          </div>

          <div className={styles.socialColumn}>
            <Tooltip label="Github link" placement="right">
              <button
                className={styles.socialIcon}
                style={{
                  color: currentTheme.subtext,
                  borderColor: currentTheme.subtext,
                }}
                onClick={
                  project.githubLink !== '' ? undefined : showGitToast
                }
              >
                {project.githubLink !== '' ? (
                  <Link href={project.githubLink} target="_blank">
                    <FontAwesomeIcon icon={faGithubAlt} />
                  </Link>
                ) : (
                  <FontAwesomeIcon icon={faGithubAlt} />
                )}
              </button>
            </Tooltip>

            <Tooltip label="Project link" placement="right">
              <button
                className={styles.socialIcon}
                style={{
                  color: currentTheme.subtext,
                  borderColor: currentTheme.subtext,
                }}
                onClick={
                  project.projectLink !== '' ? undefined : showProjToast
                }
              >
                {project.projectLink !== '' ? (
                  <Link href={project.projectLink} target="_blank">
                    <FontAwesomeIcon icon={faTelegramPlane} />
                  </Link>
                ) : (
                  <FontAwesomeIcon icon={faTelegramPlane} />
                )}
              </button>
            </Tooltip>
          </div>
        </div>

        <section className={styles.cardbottom}>
          <p className={styles.projdescription}>{project.description}</p>
        </section>
      </article>
    </div>
  );
};

export default WorkProject;
