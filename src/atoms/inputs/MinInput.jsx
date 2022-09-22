import { Input } from "./Input";
import classes from "./.module.scss";
import { inputWidth } from "../../assets/css/_variables.module.scss";

export function MinInput({ small = false, ...args }) {
  return (
    <Input
      sx={{
        minWidth: small ? "80px" : inputWidth,
        width: small ? "80px" : inputWidth,
      }}
      endAdornment={<p className={classes.px}>min</p>}
      {...args}
    />
  );
}
