import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Zeyad Hisham Portfolio</div>

      {/* Mobile Hamburger Menu */}
      <button
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.menuIcon}></span>
      </button>

      {/* Desktop & Mobile Navigation */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
