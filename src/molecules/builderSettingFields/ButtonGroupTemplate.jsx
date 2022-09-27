import classes from "./.module.scss";
import { ButtonGroup } from "../../atoms";

export function ButtonGroupTemplate({ title, buttons, className }) {
  // console.log({ selectedValue });
  return (
    <div
      className={classes.singleAttribute + " " + (className ? className : "")}
    >
      {<p>{title}</p>}
      <ButtonGroup buttons={buttons} />
    </div>
  );
}
