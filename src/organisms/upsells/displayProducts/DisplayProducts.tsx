import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { DataGrid } from "@/molecules";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Product name", width: 150 },
  { field: "views", headerName: "Views", width: 120 },
  {
    field: "conversion",
    headerName: "Conversion",
    // type: "number",
    width: 120,
  },
  {
    field: "total",
    headerName: "Total $",
    description: "This column has a value getter and is not sortable.",
    type: "number",
    // sortable: false,
    width: 160,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "visit",
    headerName: "Visit",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, name: "Snow", views: "2k", conversion: "35%", total: 1200 },
  { id: 2, name: "Lannister", views: "12k", conversion: "42%", total: 200 },
  { id: 3, name: "Lannister", views: "5k", conversion: "45%", total: 100 },
  { id: 4, name: "Stark", views: "3k", conversion: "16%", total: 1700 },
  { id: 5, name: "Targaryen", views: "8k", conversion: "0%", total: 700 },
  { id: 6, name: "Melisandre", views: null, conversion: "50%", total: 800 },
  { id: 7, name: "Clifford", views: "9k", conversion: "44%", total: 80 },
  { id: 8, name: "Frances", views: "150", conversion: "36%", total: 900 },
  { id: 9, name: "Roxie", views: "500", conversion: "65%", total: 10 },
];

export function DisplayProducts() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
