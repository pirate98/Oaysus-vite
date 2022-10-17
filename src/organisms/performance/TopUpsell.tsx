import classes from "./.module.scss";
import { NoRevenue } from "./NoRevenue";

export function TopUpsell() {
  return (
    <>
      <h2 className={classes.h2Thick}>Top Upsell Products</h2>
      <NoRevenue />
    </>
  );
}
