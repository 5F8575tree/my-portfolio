import styles from "../styles/grid.module.css";

import AboutMe from "./AboutMe";
import EmailMe from "./EmailMe";
import GitHub from "./GitHub";
import Intro from "./Intro";
import LanguageSwitch from "./LanguageSwitch";
import LinkedIn from "./LinkedIn";
import Project from "./Project";
import Resume from "./Resume";
import Skills from "./Skills";
import ThemeSwitch from "./ThemeSwitch";

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
      <Project
        title="Book app"
        intro="This React app allows the user to search for books and store them into categories."
        link="https://my-reads-mjr.netlify.app"
        number="3"
      />
      <EmailMe />
      <Resume />
    </div>
  );
};

export default Grid;
