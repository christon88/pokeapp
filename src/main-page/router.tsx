import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./main-page";

export const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
]);
