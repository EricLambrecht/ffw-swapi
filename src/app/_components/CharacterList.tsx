import React, { FunctionComponent } from "react";
import { Character } from "@/src/swapi/types";
import Link from "next/link";
import { urlToId } from "@/src/swapi/urlToId";
import { UrlDataList } from "@/app/_components/UrlDataList";
import { getGenderEmoji } from "@/src/swapi/getGenderEmoji";

interface Props {
  urls: string[];
}

export const CharacterList: FunctionComponent<Props> = ({ urls }) => (
  <UrlDataList<Character>
    title="Characters"
    urlList={urls}
    render={(character) => (
      <Link href={"/character/" + urlToId(character.url) ?? "1"}>
        {character.name} {getGenderEmoji(character.gender)}
      </Link>
    )}
  />
);
