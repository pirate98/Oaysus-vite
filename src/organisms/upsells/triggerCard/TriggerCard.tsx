import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Card, Button } from "@/atoms";
import classes from "./TriggerCard.module.scss";
import { CategoryTrigger } from "@/assets/svg";
import { RootState } from "@/data/store";

export function TriggerCard() {
  const {
    upsells: { testTrigger, triggers },
  } = useSelector((state: RootState) => state);

  const thereIsTrigger = Object.keys(triggers[0][0])?.length;

  return (
    <Card.Settings className={classes.cardFlex}>
      <CategoryTrigger />
      <div className={classes.textContainer}>
        <h2 className={classes.customH2}>Entry trigger</h2>
        {thereIsTrigger ? (
          <p className={classes.h4Muted}>
            Order total value is more than [usd]
          </p>
        ) : (
          <p className={classes.h4Muted}>
            Select specific conditions that trigger your upsells
          </p>
        )}
      </div>
      <Link to="/upsells/trigger">
        {thereIsTrigger ? (
          <Button.Primary>Edit Trigger</Button.Primary>
        ) : (
          <Button.Primary>Select Trigger</Button.Primary>
        )}
      </Link>
    </Card.Settings>
  );
}
