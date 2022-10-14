import { Grid } from "@mui/material";

import { Button, Card } from "@/atoms";
import { SettingsProgressBar } from "@/molecules/settingsProgressBar/SettingsProgressBar";
import { SettingsBillingTable } from "@/organisms/settingsBillingTable/SettingsBillingTable";

import classes from "./Billing.module.scss";

const plans = [
  {
    title: "CURRENT PLAN",
    description: "$20/MO",
    promotion: "+1% of upsell revenue",
    active: true,
  },
  {
    title: "TIER 2",
    description: "$40/MO",
    promotion: "+1% of upsell revenue",
  },
  {
    title: "TIER 3",
    description: "$60/MO",
    promotion: "+1% of upsell revenue",
  },
];

const breakPoints = [1000, 2000];
const completed = 243;

const billingData = [
  {
    date: "10/10/2022",
    invoiced: "$35.00",
    revenue: "$243.23",
    plan: "Starter",
  },
  {
    date: "10/10/2022",
    invoiced: "$35.00",
    revenue: "$243.23",
    plan: "Starter",
  },
  {
    date: "10/10/2022",
    invoiced: "$35.00",
    revenue: "$243.23",
    plan: "Starter",
  },
  {
    date: "10/10/2022",
    invoiced: "$35.00",
    revenue: "$243.23",
    plan: "Starter",
  },
];

export default function Billing() {
  return (
    <>
      <Card.Settings>
        <h3 className={classes.h3Custom}>
          Earned upsell revenue during your current billing period:
          <span className={classes.textGreen}> $243.23</span>
        </h3>
        <p>View the history of payments made for your Oaysus Upsell App</p>
      </Card.Settings>
      <Card.Settings>
        <h3 className={classes.h3Custom}>Payment Plan</h3>
        <p>
          Your plan will change once you reach <b>$1,000</b> in sales.
        </p>
        <SettingsProgressBar breakPoints={breakPoints} completed={completed} />
        <Grid container spacing={2}>
          {plans.map((plan, idx) => (
            <Grid item sm={12} md={4} key={idx}>
              <Card.Plan active={plan.active}>
                <h5 className={classes.h5Gray}>{plan.title}</h5>
                <h6 className={classes.price}>{plan.description}</h6>
                <h5 className={classes.h5}>{plan.promotion}</h5>
              </Card.Plan>
            </Grid>
          ))}
        </Grid>
      </Card.Settings>
      <Card.Settings>
        <Grid container justifyContent={"space-between"}>
          <section>
            <h3 className={classes.h3Custom}>Billing History</h3>
            <p>View the historiy of payments made for your Oaysus Upsell App</p>
          </section>
          <section>
            <Button.Primary>Export</Button.Primary>
          </section>
        </Grid>
        <SettingsBillingTable data={billingData} />
      </Card.Settings>
    </>
  );
}
