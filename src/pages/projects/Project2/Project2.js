import { useState } from "react";
import styles from "./Project2.module.css";

const Project2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = [
    {
      image: "/assets/project2/1.png",
      title: "",
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
        <h1 className={styles.projectTitle}>Maze Solving Robot</h1>

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

        {/*<div className={styles.projectDescription}>
            <h2>Project Details</h2>
          <p>STM32-based home automation system with cloud connectivity...</p>
        </div>*/}
        <iframe
          src="https://drive.google.com/file/d/1wE9kl0Wj6V25uUhJQ3Lq0i-wMrYxU-sx/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
        <iframe
          src="https://drive.google.com/file/d/13Tgd20AIiOrxGssFXt8WfiDEnrbv7pB9/preview"
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

export default Project2;
