import { Icon, Grid } from "@shopify/polaris";
import { MobilePlusMajor } from "@shopify/polaris-icons";
import { NavLink } from "react-router-dom";

import { ProductCard, Card, Button, P } from "@/atoms";

interface Props {
  products?: Record<any, any>[];
}

export function DisplayProducts({ products }: Props) {
  return (
    <Grid columns={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 5 }}>
      <Grid.Cell>
        <ProductCard imageSource={"null"} />
      </Grid.Cell>
      <Grid.Cell>
        <ProductCard imageSource='url("/image/guy_1.jpg")' />
      </Grid.Cell>
      <Grid.Cell>
        <ProductCard imageSource={"null"} />
      </Grid.Cell>
      <Grid.Cell>
        <ProductCard imageSource='url("/image/guy_2.webp")' />
      </Grid.Cell>
      <Grid.Cell>
        <NavLink to="/upsells/new">
          <Card.Dotted>
            <Button.Primary sx={styles.button}>
              <MobilePlusMajor />
            </Button.Primary>
            <P height={18}>Add Upsell</P>
          </Card.Dotted>
        </NavLink>
      </Grid.Cell>
    </Grid>
  );
}

const styles = {
  button: {
    padding: 0,
    width: "30px",
    height: "30px",
    marginBottom: "9px",
    "& svg": {
      fill: "white",
      width: "12px",
    },
  },
};
