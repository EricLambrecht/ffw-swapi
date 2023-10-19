import { FunctionComponent } from "react";
import Link from 'next/link'
import { Film } from "@/src/swapiTypes";

import styles from "./FilmPreview.module.css";

export const FilmPreview: FunctionComponent<{ data: Film }> = ({ data }) => {
  const { title, episode_id, director, release_date } = data;

  return <li >
    <Link className={styles.card} href={`/film/${episode_id}`}>
      <p className={styles.title}>{title}</p>
      <p>Director: {director}</p>
      <p>Released: {release_date}</p>
    </Link>
  </li>
}