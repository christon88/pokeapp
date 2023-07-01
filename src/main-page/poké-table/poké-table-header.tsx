import { TableCell, TableHead, TableRow } from "@mui/material";
import { TableColumns } from "./types";

type Props = { columns: TableColumns };

export const PokéTableHeader: React.FC<Props> = ({ columns }) => {
  return (
    <TableHead>
      <TableRow>
        {Object.values(columns)
          .filter((column) => column.isVisible)
          .map((column) => (
            <TableCell key={column.displayName}>{column.displayName}</TableCell>
          ))}
      </TableRow>
    </TableHead>
  );
};
