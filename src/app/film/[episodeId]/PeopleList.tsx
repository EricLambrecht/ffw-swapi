import React, {FunctionComponent} from "react";
import { NamedList } from "@/app/film/[episodeId]/NamedList";
import { Character } from "@/src/swapiTypes";

interface Props {
  urlList: string[]
}

const getCharacter = async (url: string): Promise<Character> => {
  const response = await fetch(url);
  return response.json();
}

export const PeopleList: FunctionComponent<Props> = async ({ urlList }) => {
  const promises = urlList.map(url => getCharacter(url))

  const characters = await Promise.all(promises)

  return (
    <NamedList title="Characters">
      {characters.map(character => (
        <li key={character.url}>{character.name} ({character.birth_year}) - {character.gender}</li>
      ))}
    </NamedList>
  )
}