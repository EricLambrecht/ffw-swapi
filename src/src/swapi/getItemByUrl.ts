import { ItemWithUrl } from "@/src/swapi/types";

/**
 * A generic function that fetches any item from swapi by it´s url.
 * You have to provide a type so that typescript knows which result
 * can be expected from this endpoint.
 * @param url e.g. https://swapi.dev/api/films/1/
 */
export async function getItemByUrl<T extends ItemWithUrl>(
  url: string,
): Promise<T> {
  const response = await fetch(url);
  return response.json();
}
