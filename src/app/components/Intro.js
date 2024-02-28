import styles from "../styles/intro.module.css";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.content}>
        <div className={styles.content__headers}>
          <h1>mark rawlins</h1>
          <h2>web developer</h2>
        </div>
        <div>
          <p className={styles.content__paragraph}>
            My name is Mark Rawlins. I’m a full-stack web developer living in
            Kamakura, Japan. I love styling things. Simple, robust, creative web
            designs built in Ruby, React, or PHP. I am interested in projects
            that make lives easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
