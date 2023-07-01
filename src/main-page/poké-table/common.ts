import { TableColumns } from "./types";

export const defaultColumns: TableColumns = {
  name: { displayName: "Name", isVisible: true, field: "name" },
  picture: { displayName: "Picture", isVisible: true, field: "sprites" },
  id: { displayName: "Id", isVisible: true, field: "id" },
  weight: { displayName: "Weight", isVisible: true, field: "weight" },
  height: { displayName: "Height", isVisible: true, field: "height" },
  types: { displayName: "Types", isVisible: true, field: "types" },
};
