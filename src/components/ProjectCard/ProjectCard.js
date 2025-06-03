import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={project.image}
          alt={project.name}
          className={styles.projectImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.projectName}>{project.name}</h3>
        <Link to={`/projects/${project.id}`} className={styles.viewButton}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
