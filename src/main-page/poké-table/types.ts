import { IPokemon } from "../../types/Pokemon/Pokemon";

export type TableColumn = {
  displayName: string;
  isVisible: boolean;
  field: keyof Fields;
};

export type TableColumns = Record<string, TableColumn>;

export type Fields = Pick<
  IPokemon,
  "name" | "sprites" | "id" | "weight" | "height" | "types"
>;
