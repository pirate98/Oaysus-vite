import classes from "./.module.scss";
import { ButtonGroupTight } from "../../atoms";

export function ButtonGroupTemplate({ title, buttons, className }) {
  // console.log({ selectedValue });
  return (
    <div
      className={classes.singleAttribute + " " + (className ? className : "")}
    >
      {title && <p>{title}</p>}
      <ButtonGroupTight buttons={buttons} />
    </div>
  );
}
