import { Distances } from "@/organisms/builder/builderSettingFields/Distances";
import { SettingFieldContainer } from "@/atoms";

interface Props {
  data: Record<any, any>;
}

export function Margin({ data }: Props) {
  return (
    <SettingFieldContainer title={"MARGIN"}>
      <Distances data={data} type={"margin"} />
    </SettingFieldContainer>
  );
}
