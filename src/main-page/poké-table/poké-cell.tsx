import { IPokemon } from "../../types/Pokemon/Pokemon";
import { Fields } from "./types";
import styles from "./poké-table.module.scss";
import { assertExhaustive } from "../../utils/assert-exhaustive";

type Props = { field: keyof Fields; pokemon: IPokemon };

export const PokéCell: React.FC<Props> = ({ field, pokemon }) => {
  if (
    field === "name" ||
    field === "id" ||
    field === "height" ||
    field === "weight"
  )
    return <td>{pokemon[field]}</td>;

  if (field === "sprites")
    return (
      <td>
        <img src={pokemon.sprites.front_default} />
      </td>
    );

  if (field === "types")
    return (
      <td>
        <div className={styles.typesCell}>
          {pokemon.types.map((type) => (
            <span key={type.type.name}>{type.type.name}</span>
          ))}
        </div>
      </td>
    );

  return assertExhaustive(field);
};
