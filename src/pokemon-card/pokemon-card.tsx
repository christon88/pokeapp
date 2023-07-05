import { useParams } from "react-router";
import styles from "./pokemon-card.module.scss";
import { useGetPokemonByNameQuery } from "../main-page/api";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import loading from "../assets/loading.gif";
import { capitalize } from "../utils/strings";
import { Stats, getStat, typeToColor } from "./common";

type Props = {};

export const PokemonCard: React.FC<Props> = () => {
  const { id } = useParams();

  const { data: pokemon } = useGetPokemonByNameQuery(id ?? skipToken);

  const getPokemonStat = (stat: Stats) => getStat(stat, pokemon);

  const statList = [
    { displayName: "Attack", stat: Stats.attack },
    { displayName: "Defense", stat: Stats.defense },
    { displayName: "Special attack", stat: Stats.specialAttack },
    { displayName: "Special defense", stat: Stats.specialDefense },
    { displayName: "Speed", stat: Stats.speed },
  ];

  return !pokemon ? (
    <img src={loading} className={styles.loading} />
  ) : (
    <div
      className={styles.pokemonCard}
      style={{ backgroundColor: typeToColor(pokemon.types[0].type.name) }}
    >
      <header className={styles.header}>
        <h1>{capitalize(pokemon?.name)}</h1>{" "}
        <div>HP {getPokemonStat(Stats.hp)}</div>
      </header>
      <div className={styles.imageContainer}>
        <img src={pokemon?.sprites.front_default} className={styles.image} />
      </div>
      <div className={styles.statList}>
        {statList.map((item) => (
          <div>
            <span>{`${item.displayName}:`}</span>
            <span>{getPokemonStat(item.stat)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
