import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Film, Planet, Species, Vehicle } from "@/src/swapi/types";

import styles from "./page.module.css";
import { UrlDataList } from "@/app/_components/UrlDataList";
import { CharacterList } from "@/app/_components/CharacterList";
import { PlanetList } from "@/app/_components/PlanetList";

const getFilm = async (id: number): Promise<Film> => {
  const response = await fetch(`https://swapi.dev/api/films/${id}`);
  return response.json();
};

interface FilmPageProps {
  params: { id: number };
}

const FilmPage: FunctionComponent<FilmPageProps> = async ({ params }) => {
  const data = await getFilm(params.id);

  return (
    <main className={styles.main}>
      <p className={styles.opening}>{data.opening_crawl}</p>

      <h2 className={styles.title}>
        Ep.{data.episode_id} {data.title}
      </h2>
      <div className={styles.meta}>
        <p>Director: {data.director}</p>
        <p>Producer: {data.producer}</p>
        <p>Released: {data.release_date}</p>
      </div>

      <div className={styles.listGrid}>
        <div id="Characters">
          <CharacterList urls={data.characters} />
        </div>
        <div id="PlanetsAndSpecies">
          <PlanetList urls={data.planets} />

          <UrlDataList<Species>
            title="Species"
            urlList={data.species}
            render={(species) => <>{species.name}</>}
          />
        </div>
        <div id="Gear">
          <UrlDataList<Planet>
            title="Starships"
            urlList={data.starships}
            render={(ship) => <>{ship.name}</>}
          />

          <UrlDataList<Vehicle>
            title="Vehicles"
            urlList={data.vehicles}
            render={(vehicle) => <>{vehicle.name}</>}
          />
        </div>
      </div>

      <Link href="/">Home</Link>
    </main>
  );
};

export default FilmPage;
