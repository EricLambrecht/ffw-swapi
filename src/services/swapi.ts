import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { BatchResponse, Film, Character } from './types'

const BASE_URL = 'https://swapi.dev/api/';

export const starwarsApi = createApi({
    reducerPath: 'starwarsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getFilms: builder.query<BatchResponse<Film>, void>({
            query: () => `films`,
        }),
        getFilmByNumber: builder.query<Film, number>({
            query: (number) => `films/${number}`,
        }),
        getCharacterById: builder.query<Character, number>({
            query: (number) => `people/${number}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetFilmsQuery,
    useGetFilmByNumberQuery,
    useGetCharacterByIdQuery,
} = starwarsApi