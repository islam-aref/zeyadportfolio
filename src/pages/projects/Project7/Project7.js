import { useState } from "react";
import styles from "./Project7.module.css";

const Project7 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = [
    {
      image: "/assets/project7/1.png",
      title: "Schema",
    },
  ];

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.projectPage}>
      <main className={styles.mainContent}>
        <h1 className={styles.projectTitle}>Stop Watch</h1>

        <div className={styles.gallery}>
          {galleryImages.map((item, index) => (
            <div key={index} className={styles.galleryCard}>
              <h3 className={styles.imageTitle}>{item.title}</h3>
              <div
                className={styles.galleryItem}
                onClick={() => handleImageClick(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.galleryImage}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.projectDescription}>
          <h2>Project Details in GitHub Repository:</h2>
          <a href="https://github.com/zeyad-hisham-cyper/MT-Embedded-Diploma-Projects/tree/main/Microcontroller_Inrfacing_1(stop_watch)">
            GitHub
          </a>
        </div>

        <iframe
          src="https://drive.google.com/file/d/1MklkeZvWYFuUuwcXtoIrk98gh0Y0u4QH/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <h3>{selectedImage.title}</h3>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Project7;
