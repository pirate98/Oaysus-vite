import classes from "./.module.scss";
import { ButtonGroup } from "../../atoms";

export function ButtonGroupTemplate({ title, buttons, name }) {
  // console.log({ selectedValue });
  return (
    <div className={classes.singleAttribute}>
      <p>{title}</p>
      <ButtonGroup
        onClick={(e) => e.target.blur()}
        name={name}
        buttons={buttons}
        sx={{ borderRadius: 0 }}
      />
    </div>
  );
}
