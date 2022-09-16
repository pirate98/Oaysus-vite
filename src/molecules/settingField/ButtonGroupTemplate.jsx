import classes from "./.module.scss";
import { ButtonGroup } from "../../atoms";

export function ButtonGroupTemplate({ title, buttons }) {
  return (
    <div className={classes.singleAttribute}>
      <p>{title}</p>
      <ButtonGroup buttons={buttons} />
    </div>
  );
}
