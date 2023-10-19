import { BatchResponse, Film } from "@/src/swapi/types";

export const getFilms = async (): Promise<BatchResponse<Film>> => {
  const response = await fetch("https://swapi.dev/api/films/");
  return response.json();
};
