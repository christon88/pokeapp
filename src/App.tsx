import { MainPage } from "./main-page/main-page";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { pokemonApi } from "./main-page/api";

export const App = () => {
  return (
    <ApiProvider api={pokemonApi}>
      <MainPage />
    </ApiProvider>
  );
};
