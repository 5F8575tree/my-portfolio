import styles from "../styles/project.module.css";

const Project = ({ title, intro, link }) => {
  return (
    <div className={styles.project}>
      <div className={styles.content}>
        <div className={styles.project__headers}>
          <h2 className={styles.project__header}>project:</h2>
          <h3 className={styles.project__title}>{title}</h3>
        </div>
        <p className={styles.project__intro}>{intro}</p>
        <a href={link} target="_blank" className={styles.project__link}>
          <p className={styles.project__link_text}>link to project</p>
          {/* <svg className={styles.project__link_svg}></svg> */}
        </a>
      </div>
    </div>
  );
};

export default Project;