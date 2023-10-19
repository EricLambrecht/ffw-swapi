import styles from './page.module.css'
import { FilmOverview } from "@/app/FilmOverview";
import React, {FunctionComponent } from "react";

const Home: FunctionComponent = () => {
  return (
    <main className={styles.main}>
      <h1>Star Wars App</h1>
      <FilmOverview/>
    </main>
  )
}

export default Home
