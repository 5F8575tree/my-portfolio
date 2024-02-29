import styles from "../styles/languageSwitch.module.css";

const LanguageSwitch = () => {
  return (
    <div className={styles.languageSwitch}>
      <div className={styles.controls}>
        <img src="/britain.svg" />
        <img src="/japan.svg" />
      </div>
      <div className={styles.toggleSwitch}>
        <input id="languageToggle" type="checkbox" />
        <label htmlFor="languageToggle" className={styles.slider}></label>
      </div>
    </div>
  );
};

export default LanguageSwitch;
