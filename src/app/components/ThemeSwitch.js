import styles from "../styles/themeSwitch.module.css";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.themeSwitch}>
      <div className={styles.controls}>
        <img src="/sun.svg" />
        <img src="/moon.svg" />
      </div>
      <div className={styles.toggleSwitch}>
        <input
          id="themeToggle"
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
        <label htmlFor="themeToggle" className={styles.slider}></label>
      </div>
    </div>
  );
};

export default ThemeSwitch;
