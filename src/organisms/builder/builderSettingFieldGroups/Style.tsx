import { SettingField, SettingFieldContainer } from "@/atoms";
import { InputWithKeyControls } from "@/molecules";
import fieldClasses from "../builderSettingFields/.module.scss";
import {
  ColorSelector,
  FontFamily,
  FontWeight,
} from "@/organisms/builder/builderSettingFields";
import { removePx } from "@/helpers/builder";
import { BackgroundButtons } from "./BackgroundButtons";
import { BuilderModule } from "@/types/BuilderModule.type";

interface Props {
  background?: boolean;
  weight?: boolean;
  data: Record<any, any>;
  module: BuilderModule;
  buttonBackground?: boolean;
}

export function Style({
  background,
  weight = true,
  data = {},
  module,
  buttonBackground,
}: Props) {
  return (
    <>
      {buttonBackground ? (
        <BackgroundButtons data={data} title={"BACKGROUND"} module={module} />
      ) : null}
      <SettingFieldContainer title={"STYLE"}>
        {/* {background && (
          <ColorSelector
            defaultValue={data && data["backgroundColor"]}
            name={"backgroundColor"}
            title={"Background"}
            module={module}
          />
        )} */}
        {/* {styling && <FontStyles module={module} />} */}
        <FontFamily defaultValue={data["fontFamily"]} module={module} />
        {weight && <FontWeight module={module} />}
        <SettingField fieldName={"Line Height"}>
          <InputWithKeyControls
            endAdornment={"px"}
            placeholder="Enter size"
            value={removePx(data["lineHeight"])}
            name={"lineHeight_px"}
          />
        </SettingField>
        <div className={fieldClasses.singleAttribute}>
          <p>Font Size</p>
          <InputWithKeyControls
            endAdornment={"px"}
            placeholder="Enter size"
            name={"fontSize_px"}
            value={removePx(data["fontSize"])}
          />
        </div>
        {/* {!alignment && <Alignment />} */}
        <ColorSelector
          value={data["color"]}
          name={"color"}
          title={"Font Color"}
          module={module}
        />
      </SettingFieldContainer>
    </>
  );
}
