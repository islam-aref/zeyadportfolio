import styles from "./Footer.module.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/zeyad-hisham-cyper"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="white"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.03c-3.338.726-4.042-1.415-4.042-1.415-.547-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.493.997.11-.774.42-1.305.76-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.236-3.222-.123-.303-.535-1.524.117-3.176 0 0 1.01-.323 3.3 1.23a11.46 11.46 0 0 1 6.005 0c2.29-1.553 3.3-1.23 3.3-1.23.653 1.653.24 2.873.117 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.805 5.623-5.475 5.92.432.372.823 1.105.823 2.227v3.304c0 .32.22.694.83.577C20.565 21.796 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/zeyad-hisham-a5127519b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="white"
            >
              <path d="M22.23 0H1.77C.792 0 0 .774 0 1.726v20.548C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.726V1.726C24 .774 23.208 0 22.23 0zM7.09 20.452H3.554V9H7.09v11.452zM5.322 7.6c-1.137 0-2.059-.916-2.059-2.046 0-1.131.922-2.047 2.059-2.047s2.059.916 2.059 2.047c0 1.13-.922 2.046-2.059 2.046zm15.13 12.853h-3.533v-5.86c0-1.398-.03-3.196-1.946-3.196-1.946 0-2.245 1.518-2.245 3.088v5.968H9.195V9H12.6v1.56h.048c.474-.898 1.633-1.843 3.364-1.843 3.595 0 4.258 2.367 4.258 5.448v6.287z" />
            </svg>
          </a>
        </div>
        <p>Phone Number: +20 100 806 6421</p>
        <p>ُEmail: zeyad20hisham@gmail.com</p>

        <button onClick={scrollToTop} className={styles.backToTop}>
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
