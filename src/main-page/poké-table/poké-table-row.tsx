import { TableRow } from "@mui/material";
import { PokéCell } from "./poké-cell";
import { TableColumns } from "./types";
import { useGetPokemonByUrlQuery } from "../api";
import * as PokeApi from "pokeapi-typescript";
type Props = {
  columns: TableColumns;
  resource: PokeApi.IApiResource<PokeApi.IPokemon>;
};

export const PokéTableRow: React.FC<Props> = ({ columns, resource }) => {
  const { data: pokemon } = useGetPokemonByUrlQuery(resource.url);

  if (pokemon === undefined) return null;
  return (
    <TableRow>
      {Object.values(columns)
        .filter((column) => column.isVisible)
        .map((column) => (
          <PokéCell key={column.field} field={column.field} pokemon={pokemon} />
        ))}
    </TableRow>
  );
};
