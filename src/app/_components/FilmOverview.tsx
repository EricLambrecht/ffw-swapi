import { FilmPreview } from "@/app/_components/FilmPreview";
import { getFilms } from "@/src/swapi/getFilms";

import styles from "./FilmOverview.module.css"

export const FilmOverview = async () => {
  const data = await getFilms();

  return (
    <ul className={styles.list}>
      {data.results.map((film, i) => (
        <FilmPreview key={film.url} data={film} id={i+1} />
      ))}
    </ul>
  )
}