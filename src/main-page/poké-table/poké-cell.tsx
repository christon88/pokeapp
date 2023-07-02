import { Fields } from "./types";
import styles from "./poké-table.module.scss";
import { assertExhaustive } from "../../utils/assert-exhaustive";
import { LinearProgress, TableCell } from "@mui/material";
import { capitalize } from "../../utils/strings";
import * as PokeApi from "pokeapi-typescript";
import { isDefined } from "../../utils/is-defined";
type Props = {
  field: keyof Fields;
  pokemon?: PokeApi.IPokemon;
  loading: boolean;
};

export const PokéCell: React.FC<Props> = ({ field, pokemon, loading }) => {
  if (
    field === "name" ||
    field === "id" ||
    field === "height" ||
    field === "weight"
  )
    return (
      <TableCell>
        {pokemon ? capitalize(pokemon[field].toString()) : <LinearProgress />}
      </TableCell>
    );

  if (field === "sprites")
    return (
      <TableCell>
        {loading || !isDefined(pokemon) ? (
          <img className={styles.sprites} src={"/loading.gif"} />
        ) : (
          <img className={styles.sprites} src={pokemon.sprites.front_default} />
        )}
      </TableCell>
    );

  if (field === "types")
    return (
      <TableCell>
        {pokemon ? (
          pokemon.types.map((type) => (
            <div key={type.type.name} className={styles.typesCell}>
              <span>{type.type.name}</span>
            </div>
          ))
        ) : (
          <LinearProgress />
        )}
      </TableCell>
    );

  return assertExhaustive(field);
};
