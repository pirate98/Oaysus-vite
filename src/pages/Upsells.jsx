import { Icon, Text, Page, Layout, Grid, Button } from "@shopify/polaris";
import { MobilePlusMajor } from "@shopify/polaris-icons";
import { TitleBar } from "@shopify/app-bridge-react";

import { ProductCard, PlainCard } from "../components";
import { Header } from "./upsells/Header";
import classes from "./upsells/Upsells.module.scss";

export default function Upsells() {
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Header />
        </Layout.Section>
        <Layout.Section>
          <Grid columns={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 5 }}>
            <Grid.Cell>
              <ProductCard imageSource={null} />
            </Grid.Cell>
            <Grid.Cell>
              <ProductCard imageSource='url("/image/guy_1.jpg")' />
            </Grid.Cell>
            <Grid.Cell>
              <ProductCard imageSource={null} />
            </Grid.Cell>
            <Grid.Cell>
              <ProductCard imageSource='url("/image/guy_2.webp")' />
            </Grid.Cell>
            <Grid.Cell>
              <PlainCard>
                <Button
                  icon={<Icon source={MobilePlusMajor} color="base" />}
                  primary
                ></Button>
                <p className={classes.p}>Add Upsells</p>
              </PlainCard>
            </Grid.Cell>
          </Grid>
        </Layout.Section>
        {/* <Layout.Section>
          <ProductsCard />
        </Layout.Section> */}
      </Layout>
    </Page>
  );
}
