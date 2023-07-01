import { IPokemon } from "../../types/Pokemon/Pokemon";
import { PokéCell } from "./poké-cell";
import { TableColumns } from "./types";

type Props = { columns: TableColumns; pokemon: IPokemon };

export const PokéTableRow: React.FC<Props> = ({ columns, pokemon }) => {
  return (
    <tr>
      {Object.values(columns)
        .filter((column) => column.isVisible)
        .map((column) => (
          <PokéCell key={column.field} field={column.field} pokemon={pokemon} />
        ))}
    </tr>
  );
};
