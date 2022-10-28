import { SettingFieldContainer } from "@/atoms";
import { InputWithKeyControls } from "@/molecules";
import classes from "./.module.scss";

interface Props {
  data: Record<any, any>;
}

export function CountDown({ data }: Props) {
  return (
    <SettingFieldContainer>
      <div className={classes.singleAttribute}>
        <p>Duration</p>
        <InputWithKeyControls
          endAdornment={"min"}
          value={data.duration}
          name={"duration"}
        />
      </div>
    </SettingFieldContainer>
  );
}
