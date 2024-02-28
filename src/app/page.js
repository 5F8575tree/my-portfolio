"use client";

import styles from "./page.module.css";
import Name from "./components/Name";
import Navbar from "./components/Navbar";
import { DisplayProvider } from "./context/DisplayContext";

export default function Home() {
  return (
    <main className={styles.main}>
      <DisplayProvider>
        <Name />
        <Navbar />
      </DisplayProvider>
    </main>
  );
}
