import styles from "./main-page.module.scss";
import { useListPokemonQuery } from "./api";
import { PokéTable } from "./poké-table/poké-table";
import { useState } from "react";
import { isDefined } from "../utils/is-defined";

export const MainPage = () => {
  const [offset, setOffset] = useState(0);
  const { data } = useListPokemonQuery({ limit: 20, offset: offset });

  return (
    <div className={styles.mainPage}>
      {data && <PokéTable resources={data.results.filter(isDefined)} />}
    </div>
  );
};
