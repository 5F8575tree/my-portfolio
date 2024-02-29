import styles from "../styles/gitHub.module.css";

const GitHub = () => {
  return (
    <div className={styles.gitHub}>
      <a href="https://github.com/5F8575tree">
        <img className={styles.gitHub__image} src="/gitHub.png" />
      </a>
    </div>
  );
};

export default GitHub;
