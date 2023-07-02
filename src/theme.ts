import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: { primary: { main: "#fb0617", dark: "#fb0617" } },
  components: {
    MuiTablePagination: { styleOverrides: { root: { overflow: "unset" } } },
  },
});
