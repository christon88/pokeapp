import styles from "./main-page.module.scss";
import { useGetPokemonByNameQuery } from "./api";
import { PokéTable } from "./poké-table/poké-table";

export const MainPage = () => {
  const { data, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <div className={styles.mainPage}>
      {!isLoading && data && <PokéTable pokemons={[data]} />}
    </div>
  );
};
