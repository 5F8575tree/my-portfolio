import styles from "../styles/aboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.content}>
        <div className={styles.content__headers}>
          <h2 className={styles.content__header}>about me</h2>
          <img className={styles.content__image} src="/mjrawlins.jpg" />
        </div>
        <p className={styles.content__paragraph}>
          Outside of software development I am a busy father-of-two. I like to
          hunt bugs with my children, go fishing, or eat ice cream. When alone I
          enjoy reading, looking at art, cycling, or playing sports.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
