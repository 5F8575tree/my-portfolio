import styles from "../styles/grid.module.css";

import Intro from "./Intro";
import ThemeSwitch from "./ThemeSwitch";
import LanguageSwitch from "./LanguageSwitch";
import LinkedIn from "./LinkedIn";
import Project from "./Project";
import GitHub from "./GitHub";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

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
        number="1"
      />
      <LinkedIn />
      <GitHub />
      <Project
        title="Shopify API app"
        intro="This web application utilises the various Shopify APIs and allows a developer to circumvent GraphQL queries to work on a store using their own access key."
        link="https://github.com/5F8575tree/shopify-objects-frontend/tree/master"
        number="2"
      />
      <AboutMe />
      <Skills />
    </div>
  );
};

export default Grid;
