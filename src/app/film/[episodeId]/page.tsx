import React, {FunctionComponent } from "react";
import Link from "next/link";
import {Character, Film, Planet, Species, Vehicle} from "@/src/swapiTypes";

import styles from "./page.module.css";
import {UrlDataList} from "@/app/film/[episodeId]/UrlDataList";

const getFilm = async (episodeId: number): Promise<Film> => {
  const response = await fetch(`https://swapi.dev/api/films/${episodeId}`);
  return response.json();
}

interface FilmPageProps {
  params: { episodeId: number }
}

const FilmPage: FunctionComponent<FilmPageProps> = async ({ params }) => {
  const data = await getFilm(params.episodeId);

  return (
    <main className={styles.main}>
      <p className={styles.opening}>{data.opening_crawl}</p>

      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.meta}>
        <p>Director: {data.director}</p>
        <p>Producer: {data.producer}</p>
        <p>Released: {data.release_date}</p>
      </div>

      <div className={styles.listGrid}>
        <div id="Characters">
          <UrlDataList<Character> title="Characters" urlList={data.characters} render={(character => (
            <>{character.name} ({character.birth_year}) - {character.gender}</>
          ))} />
        </div>
        <div id="PlanetsAndSpecies">
          <UrlDataList<Planet> title="Planets" urlList={data.planets} render={(planet => (
            <>{planet.name} ({planet.climate}, water: {planet.surface_water ? "Yes" : "No"})</>
          ))} />

          <UrlDataList<Species> title="Species" urlList={data.species} render={(species => (
            <>{species.name}</>
          ))} />
        </div>
        <div id="Gear">
          <UrlDataList<Planet> title="Starships" urlList={data.starships} render={(ship => (
            <>{ship.name}</>
          ))} />

          <UrlDataList<Vehicle> title="Vehicles" urlList={data.vehicles} render={(vehicle => (
            <>{vehicle.name}</>
          ))} />
        </div>

      </div>

      <Link href="/">Home</Link>
    </main>
  )
}

export default FilmPage
