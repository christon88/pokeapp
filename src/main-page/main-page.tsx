import styles from "./main-page.module.scss";
import { useGetPokemonByNameQuery } from "./api";

export const MainPage = () => {
  const { data } = useGetPokemonByNameQuery("bulbasaur");

  return <div className={styles.mainPage}>{data?.name}</div>;
};
