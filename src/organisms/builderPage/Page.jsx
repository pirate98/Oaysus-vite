import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";

import { DropZoneWrapper } from "../../molecules/builderComponents";

export function Page() {
  const {
    builder: { page },
  } = useSelector((state) => state);

  console.log({ page });

  return (
    <section>
      <Grid container spacing={5} columnSpacing={4}>
        {page &&
          page.length &&
          page.map((element, idx) => {
            return <DropZoneWrapper key={idx} content={element} />;
          })}
      </Grid>
    </section>
  );
}
