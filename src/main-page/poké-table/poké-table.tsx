import { useState } from "react";
import { PokéTableRow } from "./poké-table-row";
import { PokéTableHeader } from "./poké-table-header";
import { TableColumns } from "./types";
import styles from "./poké-table.module.scss";
import { defaultColumns } from "./common";
import { Checkbox, Table, TableBody } from "@mui/material";
import * as PokeApi from "pokeapi-typescript";

type Props = { resources: PokeApi.IApiResource<PokeApi.IPokemon>[] };

export const PokéTable: React.FC<Props> = ({ resources }) => {
  const [columns, setColumns] = useState<TableColumns>(defaultColumns);

  function updateColumnVisibility(
    columnName: keyof typeof columns,
    isVisible: boolean,
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
        {Object.entries(columns)
          .filter(([_, column]) => !["name", "id"].includes(column.field))
          .map(([key, column]) => (
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
      <div className={styles.tableContainer}>
        <Table>
          <PokéTableHeader columns={columns} />
          <TableBody>
            {resources.map((resource) => (
              <PokéTableRow
                columns={columns}
                resource={resource}
                key={resource.url}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
