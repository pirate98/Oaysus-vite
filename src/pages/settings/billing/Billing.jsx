import { Grid } from "@mui/material";
import { PlanCard, SettingsCard } from "../../../atoms";
import { SettingsProgressBar } from "../../../molecules/settingsProgressBar/SettingsProgressBar";

import classes from "./Billing.module.scss";

const plans = [
  {
    title: "CURRENT PLAN",
    description: "$20/MO",
    promotion: "+1% of upsell revenue",
  },
  {
    title: "TIER 2",
    description: "$40/MO",
    promotion: "+0.5% of upsell revenue",
  },
  {
    title: "TIER 3",
    description: "$60/MO",
    promotion: "+0% of upsell revenue",
  },
];

export default function Billing() {
  return (
    <>
      <SettingsCard>
        <h3 className={classes.h3Custom}>
          Earned upsell revenue during your current billing period:
          <span className={classes.textGreen}> $243.23</span>
        </h3>
        <p>View the historiy of payments made for your Oaysus Upsell App</p>
      </SettingsCard>
      <SettingsCard>
        <h3 className={classes.h3Custom}>Payment Plan</h3>
        <p>
          Your plan will change once you reach <b>$1,000</b> in sales.
        </p>
        <SettingsProgressBar />
        <Grid container spacing={2}>
          {plans.map((plan) => (
            <Grid item sm={12} md={4}>
              <PlanCard>
                <h5 className={classes.h5}>{plan.title}</h5>
                <p className={classes.price}>{plan.description}</p>
                <h5 className={classes.h5}>{plan.promotion}</h5>
              </PlanCard>
            </Grid>
          ))}
        </Grid>
      </SettingsCard>
      <SettingsCard>
        <h3 className={classes.h3Custom}>Billing History</h3>
        <p>View the historiy of payments made for your Oaysus Upsell App</p>
      </SettingsCard>
    </>
  );
}
