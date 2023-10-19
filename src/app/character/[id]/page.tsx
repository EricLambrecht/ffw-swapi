import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Character, Planet, Vehicle } from "@/src/swapi/types";

import styles from "./page.module.css";
import { UrlDataList } from "@/app/_components/UrlDataList";
import { getItemByUrl } from "@/src/swapi/getItemByUrl";
import { FilmList } from "@/app/_components/FilmList";
import { urlToId } from "@/src/swapi/urlToId";

const getCharacter = async (id: number): Promise<Character> => {
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  return response.json();
};

interface CharacterPageProps {
  params: { id: number };
}

const CharacterPage: FunctionComponent<CharacterPageProps> = async ({
  params,
}) => {
  const data = await getCharacter(params.id);
  const homeworld = await getItemByUrl<Planet>(data.homeworld);

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>{data.name}</h2>
      <div className={styles.meta}>
        <p>Height: {data.height}</p>
        <p>Weight: {data.mass}</p>
        <p>Birth Year: {data.birth_year}</p>
        <p>
          Homeworld:{" "}
          <Link href={"/planet/" + urlToId(homeworld.url)}>
            {homeworld.name}
          </Link>
        </p>
      </div>

      <div className={styles.listGrid}>
        <div>
          <FilmList urls={data.films} />
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

export default CharacterPage;
