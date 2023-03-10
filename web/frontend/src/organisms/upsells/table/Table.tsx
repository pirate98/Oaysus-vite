import * as React from "react";
import Box from "@mui/material/Box";
import { default as MuiTable } from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch from "@mui/material/Switch";
import { visuallyHidden } from "@mui/utils";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import { Badge, H5, Select, Switch } from "@/atoms";
import variables from "@/assets/css/_variables.module.scss";
import { CONSTANT } from "@/data/constants";
import { Wrappers } from "@/organisms/upsells";
import { DragHandleSvg } from "@/assets/svg";
import { UpsellsData } from "@/organisms/upsells";
import { Wrapper } from "../../wrappers";
import { setUpsellsData, switchStatus } from "@/pages/upsells/upsellsSlice";
import { RefWrapper } from "../../builder/wrappers";
import {
  DndContext,
  DropZoneDetectionProvider,
} from "../../wrappers/DropZoneDetectionProvider/DropZoneDetectionProvider";
import { TableEditMenu } from "../tableEditMenu/TableEditMenu";
import { useDispatch } from "react-redux";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string | boolean },
  b: { [key in Key]: number | string | boolean }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  return array;
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding?: boolean;
  id?: keyof UpsellsData;
  label?: string;
  numeric?: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "Priority",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Funnel name",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "views",
    numeric: true,
    disablePadding: false,
    label: "Views",
  },
  {
    id: "conversion",
    numeric: true,
    disablePadding: false,
    label: "Conversion",
  },
  {
    id: "total",
    numeric: true,
    disablePadding: false,
    label: "Total $",
  },
  {
    id: "visit",
    numeric: true,
    disablePadding: false,
    label: "$ / Visit",
  },
  {},
  {},
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof UpsellsData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof UpsellsData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {/* <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell> */}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id || Math.random()}
            align={headCell.numeric ? "right" : "center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.id && (
              <Box
                sx={{
                  position: "relative",
                  width: headCell.numeric ? "auto" : "fit-content",
                  margin: "auto",
                }}
              >
                <H5 weight={500} height={20}>
                  {headCell.label}
                </H5>
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={createSortHandler(headCell.id)}
                  sx={{
                    position: "absolute",
                    right: "-25px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    // background: "black",
                  }}
                >
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </Box>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface Props {
  enhancedToolbar: any;
  rows: UpsellsData[];
}

export function Table({ enhancedToolbar, rows }: Props) {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof UpsellsData>("name");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof UpsellsData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setDense(event.target.checked);
  // };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const EnhancedToolbar = enhancedToolbar;

  Object.defineProperty(Array.prototype, "oaysusSliceWithoutPlaceholder", {
    value: function (begin, end, placeholderId) {
      // console.log(begin, end, placeholderId);
      return this;
    },
    configurable: true,
  });

  const rowPlaceholderIndex = rows.reduce(
    (prev, cur, idx) => (cur.id === CONSTANT.DND_PLACEHOLDER_ID ? idx : prev),
    undefined
  );

  // console.log({ rowPlaceholderIndex });

  const mutableRows = structuredClone(rows);
  // console.log({ mutableRows });

  rowPlaceholderIndex && mutableRows.splice(rowPlaceholderIndex, 1);

  const dispatch = useDispatch();

  const handleSwitch = (id: number) => {
    dispatch(switchStatus(id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedToolbar numSelected={selected.length} />
          <DropZoneDetectionProvider type={"upsellsTable"}>
            <TableContainer>
              <MuiTable
                sx={{
                  minWidth: 750,
                  ".MuiCheckbox-root.MuiCheckbox-indeterminate, .MuiCheckbox-root.Mui-checked":
                    {
                      color: variables.primaryColor,
                    },
                }}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
                  {stableSort<UpsellsData>(
                    mutableRows,
                    getComparator(order, orderBy)
                  )
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    // .oaysusSliceWithoutPlaceholder(
                    //   page * rowsPerPage,
                    //   page * rowsPerPage + rowsPerPage,
                    //   CONSTANT.DND_PLACEHOLDER_ID
                    // )
                    .map((row: UpsellsData, index: number) => {
                      // console.log(row.id);
                      const isItemSelected = isSelected(row.name);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <Wrapper.DragAndDrop
                          id={row.id}
                          content={rows}
                          contentUpdateAction={setUpsellsData}
                          key={row.id}
                        >
                          {(drag, drop, dropRefForArea) => (
                            <>
                              {index === rowPlaceholderIndex && (
                                <Wrapper.DragAndDrop
                                  id={CONSTANT.DND_PLACEHOLDER_ID}
                                  content={rows}
                                  contentUpdateAction={setUpsellsData}
                                  key={row.id}
                                >
                                  {(drag, drop, dorpRefForArea) => {
                                    return (
                                      <TableRow ref={drop}>
                                        <TableCell
                                          colSpan={headCells.length + 1}
                                          align="center"
                                        >
                                          DROP HERE
                                        </TableCell>
                                      </TableRow>
                                    );
                                  }}
                                </Wrapper.DragAndDrop>
                              )}
                              <TableRow
                                hover
                                // onClick={(event) =>
                                //   handleClick(event, row.name)
                                // }
                                role="checkbox"
                                aria-checked={isItemSelected}
                                tabIndex={-1}
                                key={row.name}
                                selected={isItemSelected}
                                sx={{
                                  "&.Mui-selected": {
                                    backgroundColor: variables.primaryLight,
                                    "&:hover": {
                                      backgroundColor: variables.primaryActive,
                                      // color: "white",
                                    },
                                  },
                                }}
                                ref={(el) => {
                                  drop(el);
                                  dropRefForArea.current = el;
                                }}
                              >
                                <TableCell
                                  padding="checkbox"
                                  sx={{
                                    paddingLeft: "19px !important",
                                    cursor: "move",
                                  }}
                                  ref={drag}
                                >
                                  <DragHandleSvg />
                                </TableCell>
                                {/* <TableCell padding="checkbox">
                                <Checkbox
                                  color="primary"
                                  checked={isItemSelected}
                                  inputProps={{
                                    "aria-labelledby": labelId,
                                  }}
                                />
                              </TableCell> */}
                                <TableCell
                                  component="th"
                                  id={labelId}
                                  scope="row"
                                  padding="none"
                                  align="center"
                                >
                                  {index + 1}
                                </TableCell>
                                <TableCell
                                  align="left"
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    paddingLeft: "24px",
                                  }}
                                >
                                  <Box
                                    // className={styles.imageDiv}
                                    sx={{
                                      backgroundImage: `url("${
                                        row.image || CONSTANT.IMAGE_PLACEHOLDER
                                      }")`,
                                      backgroundSize: row.image
                                        ? "contain"
                                        : "50%",
                                      height: "40px",
                                      width: "40px",
                                      backgroundRepeat: "no-repeat",
                                      backgroundPosition: "center",
                                      margin: "8px 16px 8px 0",
                                      border: "1px solid lightgray",
                                      borderRadius: "4px",
                                    }}
                                  ></Box>
                                  <H5 weight={500}>{row.name}</H5>
                                </TableCell>
                                <TableCell align="center">
                                  <Box
                                    sx={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    {row.status ? (
                                      <Badge variant="green" dot={false}>
                                        Active
                                      </Badge>
                                    ) : (
                                      <Badge variant="gray" dot={false}>
                                        Inactive
                                      </Badge>
                                    )}
                                  </Box>
                                </TableCell>
                                <TableCell align="right">{row.views}</TableCell>
                                <TableCell align="right">
                                  {row.conversion}
                                </TableCell>
                                <TableCell align="right">{row.total}</TableCell>
                                <TableCell align="right">{row.visit}</TableCell>
                                <TableCell align="right">
                                  <Switch
                                    onClick={() => handleSwitch(index)}
                                    checked={row.status}
                                  />
                                </TableCell>
                                <TableCell align="right">
                                  <TableEditMenu />
                                </TableCell>
                              </TableRow>
                            </>
                          )}
                        </Wrapper.DragAndDrop>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: (dense ? 33 : 53) * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </MuiTable>
            </TableContainer>
          </DropZoneDetectionProvider>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
      </Box>
    </DndProvider>
  );
}
