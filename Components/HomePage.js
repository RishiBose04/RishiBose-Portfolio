import styles from '../styles/Home.module.css';
import Link from 'next/link';
import HomeProject from './HomeProject';
import Skills from './Skills';
import Education from './Education';
import { projects } from '../Constants/projects';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { userinfo, ctaTexts, headings } from '../Constants/userinfo';

const HomePage = ({ currentTheme }) => {
    return (
        <div>

            {/* 🔥 Hero Section with Loop Video Background */}
            <div 
                className={styles.homeheading} 
                style={{ backgroundColor: currentTheme.secondary }}
            >
                <video
                    className={styles.homeVideoBG}
                    src="/showreel.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                <h1 className={styles.heading}>{userinfo.greeting.title}</h1>
                <h2 
                    className={styles.subheading} 
                    style={{ color: currentTheme.subtext }}
                >
                    {userinfo.greeting.subtitle}
                </h2>
            </div>

            {/* 🔨 Work / Projects Section */}
            <div className={styles.homeWorkSection} id="work">
                <h1 className={styles.workheading} data-aos="fade-up">
                    {headings.workHomePage}
                </h1>

                {projects.slice(0, 3).map((project, key) => (
                    <div key={key} data-aos="fade-up">
                        <HomeProject 
                            currentTheme={currentTheme}
                            project={project}
                            id={key}
                        />
                    </div>
                ))}

                <div style={{ textAlign: 'center', paddingBottom: '2rem' }}>
                    <Link
                        href="/work"
                        className={styles.cta3}
                        style={{ 
                            backgroundColor: currentTheme.accent, 
                            color: currentTheme.contrastText 
                        }}
                    >
                        {ctaTexts.workCTA} <span>&gt;</span>
                    </Link>
                </div>
            </div>
             <div className={styles.youtubeSection}>
                <h1 
                    className={styles.workheading} 
                    data-aos="fade-up"
                    style={{ color: currentTheme.text }}
                >
                    Featured Showcase
                </h1>
                <p 
                    className={styles.youtubeSectionSubtext}
                    style={{ color: currentTheme.subtext }}
                    data-aos="fade-up"
                >
                    Watch my latest game development journey and projects in action
                </p>

                <div className={styles.youtubeWrapper} data-aos="fade-up">
                    <iframe
                        className={styles.youtubeEmbed}
                        src="https://www.youtube.com/embed/2QqyEly5Jqg"
                        title="Featured Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>


            {/* ⭐ Skills Section */}
            <div 
                id="skills" 
                className={styles.homeSkillSection} 
                style={{ backgroundColor: currentTheme.secondary }}
            >
                <Skills currentTheme={currentTheme} />
            </div>

            {/* 🎓 Education Section */}
            {userinfo.education.visible && (
                <Education currentTheme={currentTheme} />
            )}

            {/* 👤 About Section */}
            <div 
                id="about" 
                className={styles.homeAboutSection} 
                style={{ backgroundColor: currentTheme.secondary }}
            >
                <h1 className={styles.workheading} data-aos="fade-up">
                    {headings.about}
                </h1>

                <p 
                    className={styles.aboutText} 
                    style={{ color: currentTheme.subtext }} 
                    data-aos="fade-up"
                >
                    {userinfo.about.content}
                </p>

                <div 
                    data-aos="fade-up"
                    style={{ 
                        textAlign: 'center',
                        padding: '1rem 0',
                        margin: '1rem 0',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Link
                        href={userinfo.about.resume}
                        target="_blank"
                        className={styles.cta4}
                        style={{ 
                            background: 'transparent', 
                            border: `2px solid ${currentTheme.subtext}`,
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {ctaTexts.resumeCTA}
                        <span style={{ marginLeft: '8px' }}>
                            <FontAwesomeIcon width="15px" height="15px" icon={faExternalLinkAlt} />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
