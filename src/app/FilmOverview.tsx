import { BatchResponse, Film } from "@/src/swapiTypes";
import { FilmPreview } from "@/app/FilmPreview";

import styles from "./FilmOverview.module.css"

const getFilms = async (): Promise<BatchResponse<Film>> => {
  const response = await fetch("https://swapi.dev/api/films/");
  return response.json();
}

export const FilmOverview = async () => {
  const data = await getFilms();

  return (
    <ul className={styles.list}>
      {data.results.map(film => (
        <FilmPreview key={film.url} data={film} />
      ))}
    </ul>
  )
}