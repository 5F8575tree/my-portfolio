import styles from "../styles/themeSwitch.module.css";

const ThemeSwitch = () => {
  return (
    <div className={styles.themeSwitch}>
      <div className={styles.controls}>
        <img src="/sun.svg" />
        <img src="/moon.svg" />
      </div>
      <div className={styles.toggleSwitch}>
        <input id="themeToggle" type="checkbox" />
        <label htmlFor="themeToggle" className={styles.slider}></label>
      </div>
    </div>
  );
};

export default ThemeSwitch;
