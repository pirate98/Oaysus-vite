import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/system";

import variables from "@/assets/css/_variables.module.scss";

export const DataGrid = styled(MuiDataGrid)({
  ".MuiDataGrid-columnHeader:focus": {
    outline: `solid ${variables.primaryColor} 1px`,
  },
  "svg.MuiSvgIcon-root": {
    // fill: variables.primaryHover,
  },
  width: "1000px",
  margin: "auto",
});
