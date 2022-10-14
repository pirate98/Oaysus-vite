import { Card } from "@shopify/polaris";

import classes from "./Dotted.module.scss";

export function Dotted({ children }) {
  return (
    <section className={classes.card}>
      <div className={classes.innerContainer}>{children}</div>
    </section>
  );
}
