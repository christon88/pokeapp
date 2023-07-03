import { TableRow } from "@mui/material";
import { PokéCell } from "./poké-cell";
import { TableColumns } from "./types";
import { useGetPokemonByUrlQuery } from "../main-page/api";
import * as PokeApi from "pokeapi-typescript";
import { useNavigate } from "react-router";
import styles from "./poké-table.module.scss";
type Props = {
  columns: TableColumns;
  resource: PokeApi.IApiResource<PokeApi.IPokemon>;
};

export const PokéTableRow: React.FC<Props> = ({ columns, resource }) => {
  const { data: pokemon, isLoading } = useGetPokemonByUrlQuery(resource.url);
  const navigate = useNavigate();
  return (
    <TableRow
      onClick={() => navigate(`/pokemon/${pokemon?.id}`)}
      className={styles.tableRow}
    >
      {Object.values(columns)
        .filter((column) => column.isVisible)
        .map((column) => (
          <PokéCell
            key={column.field}
            field={column.field}
            pokemon={pokemon}
            loading={isLoading}
          />
        ))}
    </TableRow>
  );
};
