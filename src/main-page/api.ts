import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as PokeApi from "pokeapi-typescript";

// Shamelessly stolen from RTK Query docs
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<PokeApi.IPokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonByUrl: builder.query<PokeApi.IPokemon, string>({
      query: (url) => url,
    }),
    listPokemon: builder.query<
      PokeApi.IApiResourceList<PokeApi.IPokemon>,
      { limit: number; offset: number }
    >({
      query: ({ limit, offset }) => `pokemon/?limit=${limit}&offset=${offset}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPokemonByNameQuery,
  useGetPokemonByUrlQuery,
  useListPokemonQuery,
} = pokemonApi;
