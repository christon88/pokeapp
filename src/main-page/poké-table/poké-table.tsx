import { useState } from "react";
import { PokéTableRow } from "./poké-table-row";
import { PokéTableHeader } from "./poké-table-header";
import { TableColumns } from "./types";
import { IPokemon } from "../../types/Pokemon/Pokemon";
import styles from "./poké-table.module.scss";
import { defaultColumns } from "./common";
type Props = { pokemons: IPokemon[] };

export const PokéTable: React.FC<Props> = ({ pokemons }) => {
  const [columns, setColumns] = useState<TableColumns>(defaultColumns);

  function updateColumnVisibility(
    columnName: keyof typeof columns,
    isVisible: boolean
  ) {
    setColumns((prev) => ({
      ...prev,
      [columnName]: {
        ...prev[columnName],
        isVisible: isVisible,
      },
    }));
  }

  return (
    <div>
      <div className={styles.tableControls}>
        {Object.entries(columns).map(([key, column]) => (
          <label>
            {column.displayName}
            <input
              type="checkbox"
              checked={column.isVisible}
              onChange={(event) =>
                updateColumnVisibility(key, event.currentTarget.checked)
              }
              title={column.displayName}
            />
          </label>
        ))}
      </div>
      <table>
        <PokéTableHeader columns={columns} />
        <tbody>
          {pokemons.map((pokemon) => (
            <PokéTableRow
              columns={columns}
              pokemon={pokemon}
              key={pokemon.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
