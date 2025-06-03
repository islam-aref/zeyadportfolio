import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}></div>

      <div className={styles.contentBox}>
        <div className={styles.textContent}>
          <h1 className={styles.heroHeadline}>Discover my projects</h1>
          <p className={styles.heroSubscript}>
            Electronics and Communication Engineer with strong foundations in
            embedded systems, microcontrollers, and PCB design. Passionate about
            developing scalable, real-time hardware solutions and control
            systems for robotics, automation, and smart devices. I've filled
            various positions during the last two years as a leader, researcher,
            and freelancer.
          </p>
          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryButton}>
              View Projects
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
