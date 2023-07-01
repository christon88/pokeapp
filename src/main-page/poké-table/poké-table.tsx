import { useState } from "react";
import { PokéTableRow } from "./poké-table-row";
import { PokéTableHeader } from "./poké-table-header";
import { TableColumns } from "./types";
import { IPokemon } from "../../types/Pokemon/Pokemon";

type Props = { pokemons: IPokemon[] };

export const PokéTable: React.FC<Props> = ({ pokemons }) => {
  const [columns, setColumns] = useState<TableColumns>({
    name: true,
    picture: true,
  });

  return (
    <table>
      <PokéTableHeader columns={columns} />
      <tbody>
        {pokemons.map((pokemon) => (
          <PokéTableRow columns={columns} pokemon={pokemon} key={pokemon.id} />
        ))}
      </tbody>
    </table>
  );
};
