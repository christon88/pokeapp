import { IPokemon } from "../../types/Pokemon/Pokemon";
import { TableColumns } from "./types";

type Props = { columns: TableColumns; pokemon: IPokemon };

export const PokéTableRow: React.FC<Props> = ({ columns, pokemon }) => {
  return (
    <tr>
      {Object.entries(columns)
        .filter(([_, visible]) => visible)
        .map(([name]) => (
          <td key={name}>{pokemon.name}</td>
        ))}
    </tr>
  );
};
