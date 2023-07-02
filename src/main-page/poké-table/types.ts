import * as PokeAPI from "pokeapi-typescript";
export type TableColumn = {
  displayName: string;
  isVisible: boolean;
  field: keyof Fields;
};

export type TableColumns = Record<string, TableColumn>;

export type Fields = Pick<
  PokeAPI.IPokemon,
  "name" | "sprites" | "id" | "weight" | "height" | "types"
>;
