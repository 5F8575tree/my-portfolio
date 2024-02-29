import styles from "../styles/grid.module.css";

import AboutMe from "./AboutMe";
import EmailMe from "./EmailMe";
import GitHub from "./GitHub";
import Intro from "./Intro";
import LanguageSwitch from "./LanguageSwitch";
import LinkedIn from "./LinkedIn";
import Project from "./Project";
import Resume from "./Resume";
import ThemeSwitch from "./ThemeSwitch";
import Skills from "./Skills";

import { DisplayContext } from "../context/DisplayContext";
import { useContext } from "react";

const Grid = () => {
  const { isDisplayed } = useContext(DisplayContext);

  const getWrapperClass = () => {
    switch (isDisplayed) {
      case "about":
        return styles.gridAbout;
      case "projects":
        return styles.gridProject;
      case "contact":
        return styles.gridContact;
      default:
        return styles.grid;
    }
  };

  return (
    <div className={getWrapperClass()}>
      {isDisplayed === "all" && (
        <>
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
          <Project
            title="Landing page"
            intro="This landing page allows the user to search for a particular rental car and then customise their order."
            link="https://landing-page-mjr.netlify.app"
            number="4"
          />
        </>
      )}
      {isDisplayed === "about" && (
        <>
          <Intro />
          <ThemeSwitch />
          <Resume />
          <LanguageSwitch />
          <Skills />
          <AboutMe />
        </>
      )}
      {isDisplayed === "contact" && (
        <>
          <Intro />
          <ThemeSwitch />
          <LanguageSwitch />
          <EmailMe />
          <LinkedIn />
          <GitHub />
        </>
      )}
      {isDisplayed === "projects" && (
        <>
          <Project
            title="OUTBLAST company website"
            intro="OUTBLAST are a digital marketing company that needed a website with high performance, yet could be edited from WordPress."
            link="www.outblast.com"
            number="1"
          />
          <Project
            title="Shopify API app"
            intro="This web application utilises the various Shopify APIs and allows a developer to circumvent GraphQL queries to work on a store using their own access key."
            link="https://github.com/5F8575tree/shopify-objects-frontend/tree/master"
            number="2"
          />
          <Project
            title="Book app"
            intro="This React app allows the user to search for books and store them into categories."
            link="https://my-reads-mjr.netlify.app"
            number="3"
          />
          <Project
            title="Landing page"
            intro="This landing page allows the user to search for a particular rental car and then customise their order."
            link="https://landing-page-mjr.netlify.app"
            number="4"
          />
        </>
      )}
    </div>
  );
};

export default Grid;
