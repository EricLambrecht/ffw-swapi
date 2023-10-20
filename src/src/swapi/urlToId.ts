/**
 * This function takes a swapi-url and returns the id/number
 * that it contains (if there is any) or null (if it has no id).
 * @param url e.g. https://swapi.dev/api/films/1/
 */
export const urlToId = (url: string) => {
  const match = url.match(/\d+/);
  if (match) {
    return match[0];
  }
  return null;
};
