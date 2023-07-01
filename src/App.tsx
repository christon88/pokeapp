import { MainPage } from "./main-page/main-page";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { pokemonApi } from "./main-page/api";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

export const App = () => {
  return (
    <ApiProvider api={pokemonApi}>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </ApiProvider>
  );
};
