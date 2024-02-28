import Intro from "./Intro";
import ThemeSwitch from "./ThemeSwitch";
import LanguageSwitch from "./LanguageSwitch";

import styles from "../styles/grid.module.css";

const Grid = () => {
  return (
    <div className={styles.grid}>
      <Intro />
      <ThemeSwitch />
      <LanguageSwitch />
    </div>
  );
};

export default Grid;
