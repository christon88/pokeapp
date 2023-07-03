import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./main-page/main-page";
import { PokemonCard } from "./pokemon-card/pokemon-card";

export const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/pokemon/:id", element: <PokemonCard /> },
]);
