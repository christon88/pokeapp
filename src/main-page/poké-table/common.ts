import { TableColumns } from "./types";

export const defaultColumns: TableColumns = {
  name: { displayName: "Name", isVisible: true, field: "name" },
  sprites: { displayName: "Picture", isVisible: true, field: "sprites" },
  id: { displayName: "Id", isVisible: true, field: "id" },
  weight: { displayName: "Weight", isVisible: false, field: "weight" },
  height: { displayName: "Height", isVisible: false, field: "height" },
  types: { displayName: "Types", isVisible: false, field: "types" },
};
