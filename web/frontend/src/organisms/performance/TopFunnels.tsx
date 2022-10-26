import classes from "./.module.scss";
import { NoRevenue } from "./NoRevenue";

export function TopFunnels() {
  return (
    <>
      <h2 className={classes.h2Thick}>Top Funnels</h2>
      <NoRevenue />
    </>
  );
}
