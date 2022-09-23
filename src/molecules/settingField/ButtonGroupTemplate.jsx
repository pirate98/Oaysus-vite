import classes from "./.module.scss";
import { ButtonGroup } from "../../atoms";

export function ButtonGroupTemplate({ title, buttons }) {
  // console.log({ selectedValue });
  return (
    <div className={classes.singleAttribute}>
      <p>{title}</p>
      <ButtonGroup buttons={buttons} sx={{ borderRadius: 0 }} />
    </div>
  );
}
