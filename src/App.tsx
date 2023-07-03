import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { pokemonApi } from "./main-page/api";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { RouterProvider } from "react-router";
import { router } from "./router";
import "./global.scss";
export const App = () => {
  return (
    <ApiProvider api={pokemonApi}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ApiProvider>
  );
};
