import { RouterProvider } from "react-router-dom";
import { router } from "../router";
import styles from "./main-page.module.scss";

type Props = {};
export const MainPage: React.FC<Props> = () => {
  return (
    <div className={styles.mainPage}>
      <RouterProvider router={router} />
    </div>
  );
};
