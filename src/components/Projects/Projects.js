import styles from "./Projects.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: "Project1",
      name: "AF Function Generator",
      image: "/assets/thumbnail1.png",
    },
    {
      id: "Project2",
      name: "Maze Solving Robot",
      image: "/assets/thumbnail2.png",
    },
    {
      id: "Project3",
      name: "Robix",
      image: "/assets/thumbnail3.png",
    },
    {
      id: "Project4",
      name: "SailFish",
      image: "/assets/thumbnail4.png",
    },
    {
      id: "Project5",
      name: "Smart Surveillance Robot",
      image: "/assets/thumbnail5.png",
    },
    {
      id: "Project6",
      name: "Door Lock",
      image: "/assets/thumbnail6.png",
    },
    {
      id: "Project7",
      name: "Stopwatch",
      image: "/assets/thumbnail7.png",
    },
  ];

  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.sectionTitle}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
