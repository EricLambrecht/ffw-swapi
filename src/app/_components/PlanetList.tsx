import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Planet } from "@/src/swapi/types";
import { UrlDataList } from "@/app/_components/UrlDataList";
import { urlToId } from "@/src/swapi/urlToId";
import { getClimateEmoji } from "@/src/swapi/getClimateEmoji";

interface Props {
  urls: string[];
}

export const PlanetList: FunctionComponent<Props> = ({ urls }) => (
  <UrlDataList<Planet>
    title="Planets"
    urlList={urls}
    render={(planet) => (
      <Link href={"/planet/" + urlToId(planet.url)}>
        {planet.name} {getClimateEmoji(planet.climate)}
      </Link>
    )}
  />
);
