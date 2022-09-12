import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
  Grid,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets/svg";

import { ProductsCard } from "../components";
import { ProductCard } from "../components";
import { Header } from "./upsell/Header";

export default function Upsell() {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Header />
        </Layout.Section>
        <Layout.Section>
          <Grid columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
            <Grid.Cell>
              <ProductCard imageSource={null} />
            </Grid.Cell>
            <Grid.Cell>
              <ProductCard imageSource='url("/image/guy_1.jpg")' />
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
