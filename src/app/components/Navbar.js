import { useContext } from "react";
import { DisplayContext } from "../context/DisplayContext";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const { isDisplayed, toggleDisplay } = useContext(DisplayContext);

  return (
    <div className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li
          className={`${styles.navbar__item} ${isDisplayed === "all" ? styles.active : ""}`}
          onClick={() => toggleDisplay("all")}
        >
          all
        </li>
        <li
          className={`${styles.navbar__item} ${isDisplayed === "projects" ? styles.active : ""}`}
          onClick={() => toggleDisplay("projects")}
        >
          projects
        </li>
        <li
          className={`${styles.navbar__item} ${isDisplayed === "about" ? styles.active : ""}`}
          onClick={() => toggleDisplay("about")}
        >
          about
        </li>
        <li
          className={`${styles.navbar__item} ${isDisplayed === "contact" ? styles.active : ""}`}
          onClick={() => toggleDisplay("contact")}
        >
          contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
