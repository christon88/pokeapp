import { useNavigate, useParams } from "react-router";
import styles from "./pokemon-card.module.scss";
import { useGetPokemonByNameQuery } from "../main-page/api";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import loading from "../assets/loading.gif";
import { capitalize } from "../utils/strings";
import { Stats, getStat, typeToColor } from "./common";
import { useEffect, useState } from "react";
import { KeyboardHandler } from "./keyboard-handler";

type Props = {};

export const PokemonCard: React.FC<Props> = () => {
  const { id } = useParams();

  const { data: pokemon, isFetching } = useGetPokemonByNameQuery(
    id ?? skipToken,
  );

  const getPokemonStat = (stat: Stats) => getStat(stat, pokemon);

  const navigate = useNavigate();

  const goToNext = () => {
    const next = parseInt(id || " 1") + 1;
    navigate(`/pokemon/${next}`);
  };
  const goToPrevious = () => {
    const next = parseInt(id || "1") - 1 || 1010;
    navigate(`/pokemon/${next}`);
  };

  const statList = [
    { displayName: "Attack", stat: Stats.attack },
    { displayName: "Defense", stat: Stats.defense },
    { displayName: "Special attack", stat: Stats.specialAttack },
    { displayName: "Special defense", stat: Stats.specialDefense },
    { displayName: "Speed", stat: Stats.speed },
  ];

  return isFetching || !pokemon ? (
    <img src={loading} className={styles.loading} />
  ) : (
    <div className={styles.container}>
      <KeyboardHandler callback={goToPrevious} keyboardKey="ArrowLeft">
        <button onClick={goToPrevious} className={styles.arrow}>
          {"<-"}
        </button>
      </KeyboardHandler>
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
            <div key={item.displayName}>
              <span>{`${item.displayName}:`}</span>
              <span>{getPokemonStat(item.stat)}</span>
            </div>
          ))}
        </div>
      </div>
      <KeyboardHandler callback={goToNext} keyboardKey="ArrowRight">
        <button onClick={goToNext} className={styles.arrow}>
          {"->"}
        </button>
      </KeyboardHandler>
    </div>
  );
};

const maxPokemonId = 1010;
