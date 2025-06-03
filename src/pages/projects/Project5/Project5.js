import { useState } from "react";
import styles from "./Project5.module.css";

const Project5 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = [
    {
      image: "/assets/project5/1.png",
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
        <h1 className={styles.projectTitle}>Smart Surveillance Robot</h1>

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
        <div>
          <h2>Project Details in GitHub Repository:</h2>
          <a href="https://github.com/zeyad-hisham-cyper/Smart-Surveillance-Robot">
            GitHub
          </a>
        </div>

        <iframe
          src="https://drive.google.com/file/d/1l2mDNZwmt0ML968mRwjJC5Syk5LYikcN/preview"
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

export default Project5;
