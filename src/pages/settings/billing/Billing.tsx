import { Grid } from "@mui/material";

import { Button, Card, H1, H2, H5, H3 } from "@/atoms";
import {
  SettingsProgressBar,
  SettingsBillingTable,
} from "@/organisms/settings";

export default function Billing() {
  return (
    <>
      <Card.Settings>
        <H2 weight={600} mb={12}>
          Earned upsell revenue during your current billing period:
          <span className={"text_green"}> $243.23</span>
        </H2>
        <H3 color={"muted"} mb={12}>
          View the history of payments made for your Oaysus Upsell App
        </H3>
      </Card.Settings>
      <Card.Settings>
        <H2 weight={600} mb={12}>
          Payment Plan
        </H2>
        <H3 color={"muted"} mb={12}>
          Your plan will change once you reach <b>$1,000</b> in sales.
        </H3>
        <SettingsProgressBar breakPoints={breakPoints} completed={completed} />
        <Grid container spacing={2}>
          {plans.map((plan, idx) => (
            <Grid item sm={12} md={4} key={idx}>
              <Card.Plan active={plan.active}>
                <H5 mb={18} color={"muted"} weight={600}>
                  {plan.title}
                </H5>
                <H1 weight={600} mb={24}>
                  {plan.description}
                </H1>
                <H5 weight={600} mb={4}>
                  {plan.promotion}
                </H5>
              </Card.Plan>
            </Grid>
          ))}
        </Grid>
      </Card.Settings>
      <Card.Settings>
        <Grid container justifyContent={"space-between"}>
          <section>
            <H2 weight={600} mb={12}>
              Billing History
            </H2>
            <H3 color={"muted"} mb={12}>
              View the historiy of payments made for your Oaysus Upsell App
            </H3>
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
    promotion: "+0.5% of upsell revenue",
  },
  {
    title: "TIER 3",
    description: "$60/MO",
    promotion: "+0% of upsell revenue",
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
