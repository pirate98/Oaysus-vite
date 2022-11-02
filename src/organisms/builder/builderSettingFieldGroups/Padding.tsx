import { Distances } from "@/organisms/builder/builderSettingFields/Distances";
import { SettingFieldContainer } from "@/atoms";

interface Props {
  data: Record<any, any>;
}

export function Padding({ data }: Props) {
  return (
    <SettingFieldContainer title={"PADDING"}>
      <Distances data={data} type={"padding"} />
    </SettingFieldContainer>
  );
}
