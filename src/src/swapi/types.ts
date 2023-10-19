export type BatchResponse<T> = {
  count: number;
  next: string;
  previous: string;
  results: T[];
};

export type ItemWithUrl = {
  url: string;
};

type ItemMeta = ItemWithUrl & {
  created: string;
  edited: string;
};

export type Film = ItemMeta & {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
};

export type Character = ItemMeta & {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
};

export type Planet = ItemMeta & {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  films: string[];
  residents: string[];
};

// ---------
// For time reasons I did not type every property for the following types
// ---------
export type Vehicle = ItemMeta & {
  name: string;
};

export type Species = ItemMeta & {
  name: string;
};

export type Starship = ItemMeta & {
  name: string;
};
