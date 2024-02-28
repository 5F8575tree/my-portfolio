import styles from "./page.module.css";
import Name from "./components/Name";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Name />
      <Navbar />
    </main>
  );
}
