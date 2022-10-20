import { Table } from "@/molecules";
import { useSelector } from "react-redux";
import { RootState } from "@/data/store";
import { EnhancedTableToolbar } from "../enhancedTableToolbar/EnhancedTableToolbar";

export function DisplayProducts() {
  const {
    upsells: { upsellsData },
  } = useSelector((state: RootState) => state);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Table enhancedToolbar={EnhancedTableToolbar} rows={upsellsData} />
    </div>
  );
}
