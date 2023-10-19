import { FilmPreviewCard } from "@/app/_components/FilmPreviewCard";
import { getFilms } from "@/src/swapi/getFilms";

import styles from "./FilmOverview.module.css";

export const FilmOverview = async () => {
  const data = await getFilms();

  return (
    <ul className={styles.list}>
      {data.results.map((film, i) => (
        <FilmPreviewCard key={film.url} data={film} id={i + 1} />
      ))}
    </ul>
  );
};
