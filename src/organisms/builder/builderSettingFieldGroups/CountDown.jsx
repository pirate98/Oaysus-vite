import { SettingFieldContainer } from "@/atoms";
import { InputWithKeyControls } from "@/molecules";
import classes from "./.module.scss";

export function CountDown({ data }) {
  return (
    <SettingFieldContainer>
      <div className={classes.singleAttribute}>
        <p>Duration</p>
        <InputWithKeyControls
          endAdornment={"min"}
          defaultValue={data.duration}
          name={"duration"}
        />
      </div>
    </SettingFieldContainer>
  );
}
