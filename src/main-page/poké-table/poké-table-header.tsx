import { TableColumns } from "./types";

type Props = { columns: TableColumns };

export const PokéTableHeader: React.FC<Props> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {Object.values(columns)
          .filter((column) => column.isVisible)
          .map((column) => (
            <th key={column.displayName}>{column.displayName}</th>
          ))}
      </tr>
    </thead>
  );
};
