import Grid from "@mui/material/Grid";

import {
  Banner,
  CallToAction,
  Content1,
  Content2,
  Content3,
  Incentive1,
  Incentive2,
  Product,
  Video,
} from "../../components/builder";
import { Card } from "./Card";

export function Components() {
  return (
    <Grid container spacing={"10px"} sx={{ padding: "10px" }}>
      <Grid item xs={6}>
        <Card title={{ text: "Incentive 1", color: undefined }}>
          <Incentive1 />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card title={{ text: "Banner", color: undefined }}>
          <Banner />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card title={{ text: "Content1", color: undefined }}>
          <Content1 />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card title={{ text: "Content2", color: undefined }}>
          <Content2 />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card title={{ text: "Product", color: undefined }}>
          <Product />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card title={{ text: "Incentive2", color: undefined }}>
          <Incentive2 />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card title={{ text: "Video", color: undefined }}>
          <Video />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card title={{ text: "Content3", color: undefined }}>
          <Content3 />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card title={{ text: "Call To Action", color: undefined }}>
          <CallToAction />
        </Card>
      </Grid>
    </Grid>
  );
}
