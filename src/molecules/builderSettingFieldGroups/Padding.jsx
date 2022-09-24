import classes from "./.module.scss";
import { Distances } from "../builderSettingFields/Distances";
import { SettingFieldContainer } from "../../atoms";

export function Padding({ data }) {
  return (
    <SettingFieldContainer title={"PADDING"}>
      <Distances data={data} type={"padding"} />
    </SettingFieldContainer>
  );
}
