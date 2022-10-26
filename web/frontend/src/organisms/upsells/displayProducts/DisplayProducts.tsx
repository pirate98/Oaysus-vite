import { useEffect } from "react";

import { useSelector } from "react-redux";

import { Table } from "@/organisms/upsells/";
import { RootState } from "@/data/store";
import { EnhancedTableToolbar } from "../enhancedTableToolbar/EnhancedTableToolbar";
import { useGetSessionToken } from "../../../../hooks";

export function DisplayProducts() {
  const {
    upsells: { upsellsData },
  } = useSelector((state: RootState) => state);

  const { sessionTokenFunc } = useGetSessionToken();

  useEffect(() => {
    sessionTokenFunc().then((token) => console.log({ token }));
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Table enhancedToolbar={EnhancedTableToolbar} rows={upsellsData} />
    </div>
  );
}
