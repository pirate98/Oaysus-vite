import { Input } from "./Input";
import classes from "./.module.scss";
import { inputWidth } from "../../assets/css/_variables.module.scss";

export function PxInput({ placeholder, small = false, ...args }) {
  return (
    <Input
      sx={{
        minWidth: small ? "80px" : inputWidth,
        width: small ? "80px" : inputWidth,
      }}
      {...args}
      endAdornment={<p className={classes.px}>px</p>}
      placeholder={placeholder || (!args.defaultValue.length ? "0" : "")}
    />
  );
}
