import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Film } from "@/src/swapi/types";
import { UrlDataList } from "@/app/_components/UrlDataList";
import { urlToId } from "@/src/swapi/urlToId";

interface Props {
  urls: string[];
}

export const FilmList: FunctionComponent<Props> = ({ urls }) => (
  <UrlDataList<Film>
    title="Films"
    urlList={urls}
    render={(film) => (
      <Link href={"/film/" + urlToId(film.url)}>
        Ep.{film.episode_id} {film.title}
      </Link>
    )}
  />
);
