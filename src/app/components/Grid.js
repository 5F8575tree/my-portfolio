import Intro from "./Intro";
import ThemeSwitch from "./ThemeSwitch";
import LanguageSwitch from "./LanguageSwitch";

import styles from "../styles/grid.module.css";
import Project from "./Project";

const Grid = () => {
  return (
    <div className={styles.grid}>
      <Intro />
      <ThemeSwitch />
      <LanguageSwitch />
      <Project
        title="OUTBLAST company website"
        intro="OUTBLAST are a digital marketing company that needed a website with high performance, yet could be edited from WordPress."
        link="www.outblast.com"
      />
    </div>
  );
};

export default Grid;
