import { useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import styles from "./Project1.module.css";

const Project1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryImages = [
    {
      image: "/assets/project1/1.png",
      title: "Flow Graph",
    },
    {
      image: "/assets/project1/2.png",
      title: "Output",
    },
    {
      image: "/assets/project1/3.png",
      title: "Schematic",
    },
    {
      image: "/assets/project1/4.png",
      title: "Circuit",
    },
    {
      image: "/assets/project1/5.png",
      title: "Circuit",
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
        <h1 className={styles.projectTitle}>AF Function Generator</h1>

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
          src="https://drive.google.com/file/d/1S-VjuHV5yTurC9ryoR4Gl0pu3evArxrU/preview"
          width="940"
          height="480"
          allow="autoplay"
          className={styles.videoEmbed}
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

export default Project1;
