import { Card } from "@shopify/polaris";

import classes from "./PlainCard.module.scss";

export function PlainCard({ children }) {
  return (
    <section className={classes.card}>
      <div className={classes.innerContainer}>{children}</div>
    </section>
  );
}
