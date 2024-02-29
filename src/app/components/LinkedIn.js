import styles from "../styles/linkedIn.module.css";

const LinkedIn = () => {
  return (
    <div className={styles.linkedIn}>
      <a href="https://www.linkedin.com/in/markjrawlins/">
        <img className={styles.linkedIn__image} src="/linkedIn.png" />
      </a>
    </div>
  );
};

export default LinkedIn;
