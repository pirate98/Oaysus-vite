import { useEffect } from "react";

import { Icon, Page, Layout, Grid, Button } from "@shopify/polaris";
import { MobilePlusMajor } from "@shopify/polaris-icons";

import { ProductCard, Card } from "@/atoms";
import { Header } from "@/pages/upsells/header/Header";
import classes from "./Upsells.module.scss";
import { useGetSeedDataQuery } from "@/data/backendApi";
import { NavLink } from "react-router-dom";

export default function Upsells() {
  const { data } = useGetSeedDataQuery();

  // useEffect(() => {
  //   console.log({ data });
  // }, [data]);

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
              <NavLink to="/upsells/new">
                <Card.Dotted>
                  <Button
                    icon={<Icon source={MobilePlusMajor} color="base" />}
                    primary
                  ></Button>
                  <p className={classes.p}>Add Upsell</p>
                </Card.Dotted>
              </NavLink>
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
