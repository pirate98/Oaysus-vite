import Grid from "@mui/material/Grid";

import { Divider, Select, Page } from "@/atoms";
import { Card } from "@/atoms/cards";
import classes from "./Performance.module.scss";
import {
  AverageOrder,
  Orders,
  Sales,
  TopFunnels,
  TopUpsell,
} from "@/organisms/performance";
import { Revenue } from "@/organisms/performance/Revenue";

const selectOptions = [
  {
    label: "Last 7 days",
    value: 7,
  },
  {
    label: "Last day",
    value: 1,
  },
  {
    label: "Last dayasdnsdmflksmlkds",
    value: 1,
  },
];

export default function Performance() {
  return (
    <Page>
      <h1 className={classes.h1}>Performance</h1>
      <Select.Small
        options={selectOptions}
        sx={{
          "&": {
            marginBottom: "16px",
          },
        }}
        value={selectOptions[0]?.value || ""}
      />
      <Grid container spacing={3} columnSpacing={2}>
        <Grid item xs={8}>
          <Card.Performance>
            <Sales />
          </Card.Performance>
        </Grid>
        <Grid item xs={4}>
          <Card.Performance>
            <Revenue />
          </Card.Performance>
        </Grid>
        <Grid item xs={8}>
          <Card.Performance>
            <Orders />
          </Card.Performance>
        </Grid>
        <Grid item xs={4}>
          <Card.Performance>
            <AverageOrder />
          </Card.Performance>
        </Grid>
      </Grid>
      <Divider.Horizontal />
      <h1 className={classes.h1}>Top Performing Funnels</h1>
      <Grid
        container
        columnSpacing={2}
        sx={{ marginTop: "16px", display: "inline-flex" }}
      >
        <Grid item xs={6}>
          <Card.Performance>
            <TopFunnels />
          </Card.Performance>
        </Grid>
        <Grid item xs={6}>
          <Card.Performance>
            <TopUpsell />
          </Card.Performance>
        </Grid>
      </Grid>
    </Page>
  );
}
