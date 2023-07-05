import { IPokemon } from "pokeapi-typescript";
import { assertExhaustive } from "../utils/assert-exhaustive";

enum Types {
  normal = "normal",
  fire = "fire",
  water = "water",
  grass = "grass",
  electric = "electric",
  ice = "ice",
  fighting = "fighting",
  poison = "poison",
  ground = "ground",
  flying = "flying",
  psychic = "psychic",
  bug = "bug",
  rock = "rock",
  ghost = "ghost",
  dark = "dark",
  dragon = "dragon",
  steel = "steel",
  fairy = "fairy",
}

export enum Stats {
  hp = "hp",
  attack = "attack",
  defense = "defense",
  specialAttack = "special-attack",
  specialDefense = "special-defense",
  speed = "speed",
}

const isType = (typeName: string): typeName is Types =>
  Object.keys(Types).includes(typeName);

export const typeToColor = (typeName: string): string => {
  if (!isType(typeName)) return "#a8a878";
  if (typeName === "normal") return "#a8a878";
  if (typeName === "fire") return "#f08030";
  if (typeName === "water") return "#6890f0";
  if (typeName === "grass") return "#78c850";
  if (typeName === "electric") return "#f8d030";
  if (typeName === "ice") return "#98d8d8";
  if (typeName === "fighting") return "#c03028";
  if (typeName === "poison") return "#a040a0";
  if (typeName === "ground") return "#e0c068";
  if (typeName === "flying") return "#a890f0";
  if (typeName === "psychic") return "#f85888";
  if (typeName === "bug") return "#a8b820";
  if (typeName === "rock") return "#b8a038";
  if (typeName === "ghost") return "#705898";
  if (typeName === "dark") return "#705848";
  if (typeName === "dragon") return "#7038f8";
  if (typeName === "steel") return "#b8b8d0";
  if (typeName === "fairy") return "#f0b6bc";
  return assertExhaustive(typeName);
};

export const getStat = (
  target: Stats,
  pokemon?: IPokemon,
): number | undefined => {
  return pokemon?.stats.find((stat) => stat.stat.name === target)?.base_stat;
};
