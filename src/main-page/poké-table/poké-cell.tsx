import { Fields } from "./types";
import styles from "./poké-table.module.scss";
import { assertExhaustive } from "../../utils/assert-exhaustive";
import { TableCell } from "@mui/material";
import { capitalize } from "../../utils/strings";
import * as PokeApi from "pokeapi-typescript";
type Props = { field: keyof Fields; pokemon: PokeApi.IPokemon };

export const PokéCell: React.FC<Props> = ({ field, pokemon }) => {
  if (
    field === "name" ||
    field === "id" ||
    field === "height" ||
    field === "weight"
  )
    return <TableCell>{capitalize(pokemon[field].toString())}</TableCell>;

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
