import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";

import { DropZoneWrapper } from "../../molecules/builderComponents";

export function Page() {
  const {
    builder: { pageComponents },
  } = useSelector((state) => state);

  console.log({ pageComponents });

  return (
    <section>
      {/* <Grid container spacing={2} columnSpacing={4}> */}
      {pageComponents &&
        pageComponents.length &&
        pageComponents.map((component, idx) => {
          return <DropZoneWrapper key={idx} moduleContent={component} />;
        })}
      {/* </Grid> */}
    </section>
  );
}
