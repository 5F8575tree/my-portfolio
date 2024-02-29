"use client";

import styles from "./page.module.css";

import Grid from "./components/Grid";
import Name from "./components/Name";
import Navbar from "./components/Navbar";

import { DisplayProvider } from "./context/DisplayContext";
import { ThemeProvider } from "./context/ThemeContext";

export default function Home() {
  return (
    <main className={styles.main}>
      <ThemeProvider>
        <DisplayProvider>
          <Name />
          <Navbar />
          <Grid />
        </DisplayProvider>
      </ThemeProvider>
    </main>
  );
}
