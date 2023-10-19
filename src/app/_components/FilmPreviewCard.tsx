import { FunctionComponent } from "react";
import Link from 'next/link'
import { Film } from "@/src/swapi/types";

import styles from "./FilmPreview.module.css";

export const FilmPreviewCard: FunctionComponent<{ data: Film, id: number }> = ({ data, id }) => {
  const { title, episode_id, director, release_date } = data;

  return <li >
    <Link className={styles.card} href={`/film/${id}`}>
      <div>
        <p className={styles.title}>Ep.{episode_id} {title}</p>
        <p>Director: {director}</p>
        <p>Released: {release_date}</p>
      </div>
      <div className={styles.number}>
        {id}
      </div>
    </Link>
  </li>
}