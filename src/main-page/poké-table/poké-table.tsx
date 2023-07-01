import { useState } from "react";
import { PokéTableRow } from "./poké-table-row";
import { PokéTableHeader } from "./poké-table-header";
import { TableColumns } from "./types";
import { IPokemon } from "../../types/Pokemon/Pokemon";
import styles from "./poké-table.module.scss";
import { defaultColumns } from "./common";
import { Checkbox, Table, TableBody } from "@mui/material";
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
    <div className={styles.pokeTable}>
      <div className={styles.tableControls}>
        {Object.entries(columns).map(([key, column]) => (
          <label key={column.field}>
            {column.displayName}
            <Checkbox
              checked={column.isVisible}
              onChange={(event) =>
                updateColumnVisibility(key, event.currentTarget.checked)
              }
              title={column.displayName}
            />
          </label>
        ))}
      </div>
      <Table>
        <PokéTableHeader columns={columns} />
        <TableBody>
          {pokemons.map((pokemon) => (
            <PokéTableRow
              columns={columns}
              pokemon={pokemon}
              key={pokemon.id}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
