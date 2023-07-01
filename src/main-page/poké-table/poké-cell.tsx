import { IPokemon } from "../../types/Pokemon/Pokemon";
import { Fields } from "./types";
import styles from "./poké-table.module.scss";
import { assertExhaustive } from "../../utils/assert-exhaustive";
import { TableCell } from "@mui/material";

type Props = { field: keyof Fields; pokemon: IPokemon };

export const PokéCell: React.FC<Props> = ({ field, pokemon }) => {
  if (
    field === "name" ||
    field === "id" ||
    field === "height" ||
    field === "weight"
  )
    return <TableCell>{pokemon[field]}</TableCell>;

  if (field === "sprites")
    return (
      <TableCell>
        <img src={pokemon.sprites.front_default} />
      </TableCell>
    );

  if (field === "types")
    return (
      <TableCell>
        <div className={styles.typesCell}>
          {pokemon.types.map((type) => (
            <span key={type.type.name}>{type.type.name}</span>
          ))}
        </div>
      </TableCell>
    );

  return assertExhaustive(field);
};
