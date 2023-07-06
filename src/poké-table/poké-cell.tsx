import { Fields } from "./types";
import styles from "./poké-table.module.scss";
import { assertExhaustive } from "../utils/assert-exhaustive";
import { LinearProgress, TableCell } from "@mui/material";
import { capitalize } from "../utils/strings";
import * as PokeApi from "pokeapi-typescript";
import { isDefined } from "../utils/is-defined";
import loadingGif from "../assets/loading.gif";
import { Link } from "react-router-dom";
import { typeToColor } from "../pokemon-card/common";
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
        {pokemon ? (
          <Link to={`/pokemon/${pokemon.id}`}>
            {capitalize(pokemon[field].toString())}
          </Link>
        ) : (
          <LinearProgress />
        )}
      </TableCell>
    );

  if (field === "sprites")
    return (
      <TableCell>
        {loading || !isDefined(pokemon) ? (
          <img className={styles.sprites} src={loadingGif} />
        ) : (
          <img className={styles.sprites} src={pokemon.sprites.front_default} />
        )}
      </TableCell>
    );

  if (field === "types")
    return (
      <TableCell>
        {pokemon ? (
          <div className={styles.typesCell}>
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className={styles.typeChip}
                style={{ backgroundColor: typeToColor(type.type.name) }}
              >
                {type.type.name}
              </span>
            ))}
          </div>
        ) : (
          <LinearProgress />
        )}
      </TableCell>
    );

  return assertExhaustive(field);
};
