import styles from "./main-page.module.scss";
import { useListPokemonQuery } from "./api";
import { PokéTable } from "./poké-table/poké-table";
import { useState } from "react";
import { isDefined } from "../utils/is-defined";
import { TablePagination } from "@mui/material";

export const MainPage = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const { data } = useListPokemonQuery({
    limit: pageSize,
    offset: page * pageSize,
  });
  return (
    <div className={styles.mainPage}>
      {data && (
        <div className={styles.content}>
          <PokéTable resources={data.results.filter(isDefined)} />
          <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={(_, page) => setPage(page)}
            rowsPerPage={pageSize}
            onRowsPerPageChange={(event) =>
              setPageSize(parseInt(event.target.value))
            }
            rowsPerPageOptions={[5, 10, 20, 50]}
          />
        </div>
      )}
    </div>
  );
};
