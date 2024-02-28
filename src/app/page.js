import styles from "./page.module.css";
import Name from "./components/Name";

export default function Home() {
  return (
    <main className={styles.main}>
      <Name />
    </main>
  );
}
