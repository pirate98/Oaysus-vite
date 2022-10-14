import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Card, Button } from "@/atoms";
import classes from "./TriggerCard.module.scss";
import { CategoryTrigger } from "@/assets/svg";

export function TriggerCard() {
  const {
    upsells: { testTrigger },
  } = useSelector((state) => state);

  return (
    <Card.Settings className={classes.cardFlex}>
      <CategoryTrigger />
      <div className={classes.textContainer}>
        <h2 className={classes.customH2}>Entry trigger</h2>
        <p>Select specific conditions that trigger your upsells</p>
      </div>
      <Link to="/upsells/trigger">
        {testTrigger ? (
          <Button.Primary>Edit Trigger</Button.Primary>
        ) : (
          <Button.Primary>Select Trigger</Button.Primary>
        )}
      </Link>
    </Card.Settings>
  );
}
