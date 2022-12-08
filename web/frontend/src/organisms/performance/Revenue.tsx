import { formatAmountToCurrency } from "@/helpers";
import classes from "./.module.scss";
import { NoRevenue } from "./NoRevenue";

export function Revenue() {
  return (
    <>
      <h2 className={classes.h2Thick}>Revenue</h2>
      <h1 className={classes.h1}>{formatAmountToCurrency(0)}</h1>
      {/* <section className={classes.chartContainer}></section> */}
      <NoRevenue />
    </>
  );
}
