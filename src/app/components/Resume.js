import styles from "../styles/resume.module.css";

const Resume = () => {
  const handleResumeClick = async () => {};

  return (
    <div className={styles.resume} onClick={handleResumeClick}>
      <h2 className={styles.text}>
        download
        <br /> resume
      </h2>
    </div>
  );
};

export default Resume;
