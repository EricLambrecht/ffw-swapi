import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Planet } from "@/src/swapi/types";

import styles from "./page.module.css";
import { FilmList } from "@/app/_components/FilmList";
import { CharacterList } from "@/app/_components/CharacterList";
import {getClimateEmoji} from "@/src/swapi/getClimateEmoji";

const getPlanet = async (id: number): Promise<Planet> => {
  const response = await fetch(`https://swapi.dev/api/planets/${id}`);
  return response.json();
};

interface PlanetPageProps {
  params: { id: number };
}

const PlanetPage: FunctionComponent<PlanetPageProps> = async ({ params }) => {
  const data = await getPlanet(params.id);

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>{data.name} {getClimateEmoji(data.climate)}</h2>
      <div className={styles.meta}>
        <p>Climate: {data.climate} ({getClimateEmoji(data.climate)})</p>
        <p>Water: {data.surface_water ? "Yes" : "No"}</p>
        <p>Gravity: {data.gravity}</p>
        <p>Population: {new Intl.NumberFormat().format(data.population)}</p>
      </div>

      <div className={styles.listGrid}>
        <div>
          <FilmList urls={data.films} />
        </div>
        <div>
          <CharacterList urls={data.residents} />
        </div>
      </div>

      <Link href="/">Home</Link>
    </main>
  );
};

export default PlanetPage;
