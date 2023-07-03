import { createBrowserRouter } from "react-router-dom";
import { PokemonCard } from "./pokemon-card/pokemon-card";
import { PokéTable } from "./poké-table/poké-table";

export const router = createBrowserRouter([
  { path: "/", element: <PokéTable /> },
  { path: "/pokemon/:id", element: <PokemonCard /> },
]);
