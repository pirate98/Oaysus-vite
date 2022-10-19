import { Table } from "@/molecules";
import { EnhancedTableToolbar } from "../enhancedTableToolbar/EnhancedTableToolbar";

export function DisplayProducts() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <Table enhancedToolbar={EnhancedTableToolbar} />
    </div>
  );
}
