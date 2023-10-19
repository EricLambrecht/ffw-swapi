import { ItemWithUrl } from "@/src/swapi/types";

export async function getItemByUrl<T extends ItemWithUrl>(
  url: string,
): Promise<T> {
  const response = await fetch(url);
  return response.json();
}
