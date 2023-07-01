import { TableColumns } from "./types";

type Props = { columns: TableColumns };

export const PokéTableHeader: React.FC<Props> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {Object.entries(columns)
          .filter(([_, visible]) => visible)
          .map(([name]) => (
            <th key={name}>{name}</th>
          ))}
      </tr>
    </thead>
  );
};
