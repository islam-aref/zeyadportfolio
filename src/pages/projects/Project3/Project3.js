import { useState } from "react";

import styles from "./Project3.module.css";

const Project3 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = [
    {
      image: "/assets/project3/Mobile Manipulator.jpg",
      title: "Mobile Manipulator",
    },
    {
      image: "/assets/project3/Robix Sessions(1).jpg",
      title: "Robix Sessions",
    },
    {
      image: "/assets/project3/Robix Sessions.jpg",
      title: "Robix Sessions",
    },
    {
      image: "/assets/project3/Robot Challenge First Place.jpg",
      title: "Robot Challenge First Place.jpg",
    },
    {
      image: "/assets/project3/Stem Graduation Project.jpg",
      title: "Stem Graduation Project.jpg",
    },
    {
      image:
        "/assets/project3/Testing the Computer Vision of the Mobile Manipulator.jpg",
      title: "Testing the Computer Vision of the Mobile Manipulator.jpg",
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
        <h1 className={styles.projectTitle}>ROBIX</h1>

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

export default Project3;
