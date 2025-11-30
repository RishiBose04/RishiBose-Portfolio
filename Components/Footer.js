import styles from '../styles/NavbarFooter.module.css';
import { userinfo } from '../Constants/userinfo';
import Link from 'next/link';
import MeAvatar from '../styles/projects/me.jpeg';

const Footer = ({ currentTheme }) => {
  return (
    <footer
      className={styles.footermain}
      style={{
        backgroundColor: currentTheme.footerColor,
        color: currentTheme.subtext,
      }}
    >
      <div className={styles.footertable}>
        {/* Brand / tagline */}
        <div className={styles.footerBrand}>
  <Link href="/">
    <div className={styles.footerLogoRow}>
      <img
        src={MeAvatar.src ?? MeAvatar}
        alt={userinfo.logoText}
        className={styles.footerAvatar}
      />
      <h2 className={styles.footerlogo}>{userinfo.logoText}</h2>
    </div>
  </Link>
  <p className={styles.footerTagline}>
    Game Developer & Software Engineer 
  </p>
</div>

        {/* Socials */}
        <ul>
          <li className={styles.listHeading}>Socials</li>
          {userinfo.socials &&
            userinfo.socials.map((social, key) => (
              <li key={key}>
                <Link href={social.link} target="_blank">
                  {social.type}
                </Link>
              </li>
            ))}
          <li>
            <Link href={`mailto:${userinfo.contact.email ?? ''}`}>Mail</Link>
          </li>
        </ul>

        {/* Pages */}
        <ul>
          <li className={styles.listHeading}>Pages</li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <hr
        style={{
          height: '1px',
          backgroundColor: currentTheme.subtext,
          border: 'none',
          opacity: 0.35,
        }}
      />

      <p className={styles.footercontent}>
        Customized by {userinfo.logoText}
      </p>
    </footer>
  );
};

export default Footer;
