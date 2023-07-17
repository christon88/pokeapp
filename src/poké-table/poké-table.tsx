import { PokéTableRow } from "./poké-table-row";
import { PokéTableHeader } from "./poké-table-header";
import { TableColumns } from "./types";
import styles from "./poké-table.module.scss";
import { defaultColumns } from "./common";
import { Checkbox, Table, TableBody, TablePagination } from "@mui/material";
import { useLocalStorage } from "../utils/use-local-storage";
import { useState } from "react";
import { useListPokemonQuery } from "../main-page/api";
import { isDefined } from "../utils/is-defined";

type Props = {};

export const PokéTable: React.FC<Props> = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const { data } = useListPokemonQuery({
    limit: pageSize,
    offset: page * pageSize,
  });
  const [columns, setColumns] = useLocalStorage<TableColumns>(
    "tableColumns",
    defaultColumns,
  );

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
    <div className={styles.content}>
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
          {/** NOTE: Setting stickyHeader changes the opacity of the header. This is acceptable for now */}
          <Table stickyHeader>
            <PokéTableHeader columns={columns} />
            <TableBody>
              {data?.results.filter(isDefined).map((resource) => (
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
      <TablePagination
        component="div"
        // TODO: Make this dynamic
        count={1010}
        page={page}
        onPageChange={(_, page) => setPage(page)}
        rowsPerPage={pageSize}
        onRowsPerPageChange={(event) =>
          setPageSize(parseInt(event.target.value))
        }
        rowsPerPageOptions={[5, 10, 20, 50]}
      />
    </div>
  );
};
