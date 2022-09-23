import { Distances } from "../builderSettingFields/Distances";
import { settingFieldContainer } from "../../atoms";

export function Margin({ data }) {
  return (
    <settingFieldContainer title={"MARGIN"}>
      <Distances data={data} type={"margin"} />
    </settingFieldContainer>
  );
}
