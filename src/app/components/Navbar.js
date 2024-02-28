import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>all</li>
        <li className={styles.navbar__item}>projects</li>
        <li className={styles.navbar__item}>about</li>
        <li className={styles.navbar__item}>contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
