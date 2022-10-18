import { useState, useEffect } from "react";

import { Select } from "@/atoms";
import fieldClasses from "../builderSettingFields/.module.scss";
import { ReactComponent as SelectIcon } from "@/assets/svg/selectListBtn.svg";
import { useGetFontsQuery } from "@/data/googleApi";
import { useGetSelectedPageComponent } from "@/hooks";
import { useDispatch } from "react-redux";
import { updatePageComponents } from "@/pages/builder/builderSlice";
import { BuilderModule } from "@/types/BuilderModule.type";
import { Option } from "@/atoms/select/types/select.types";

interface Props {
  module: BuilderModule;
}

export function FontWeight({ module }: Props) {
  const [options, setOptions] = useState<Option[]>();

  const dispatch = useDispatch();

  const selectedPageComponent = useGetSelectedPageComponent();

  const { data: fontFamilyData } = useGetFontsQuery(null);
  // console.log({ selectedPageComponent, module });
  const { fontFamily, fontWeight } =
    (selectedPageComponent && selectedPageComponent[module]) || {};
  // console.log({ fontWeight });
  useEffect(() => {
    if (!fontFamilyData) return;

    const filterResult =
      fontFamilyData &&
      fontFamilyData.filter((_fontFamily: any) => {
        return _fontFamily?.family === fontFamily;
      });

    // console.log({ filterResult });

    if (!filterResult[0] || !filterResult[0].variants) return;

    const onlyNumericalVariants = (fontStyle = "regular") => {
      const filtered = filterResult[0].variants.filter(
        (variant: string) => /^[0-9]+$/i.test(variant) || variant === fontStyle
      );

      return filtered.map((variant: string) =>
        variant === fontStyle ? "400" : variant
      );
    };

    // console.log({ onlyNumericalVariants: onlyNumericalVariants() });
    const fontWeightList = onlyNumericalVariants();

    setOptions(
      fontWeightList.map((variant: number) => {
        return {
          value: variant,
          label: fontWeightMap[variant],
        };
      })
    );

    // If new font family doesnt have selected weight update the weight
    const fontWeightExists = fontWeightList.some(
      (_fontWeight: string) =>
        _fontWeight && _fontWeight?.toString() === fontWeight?.toString()
    );

    // console.log({ fontWeightList, fontWeight });
    // console.log({ fontWeightExists });
    if (!fontWeightExists) {
      let value = fontWeightList[0];

      if (fontWeight) {
        const nearestWeight = fontWeightList.reduce((prev: any, cur: any) => {
          return cur === fontWeight || cur < fontWeight ? cur : prev;
        });

        value = nearestWeight;
      }

      dispatch(
        updatePageComponents({
          module,
          key: "fontWeight",
          value,
        })
      );
    }
  }, [fontFamily, fontFamilyData]);

  const changeHandler = (e: any) => {
    // console.log({ e: e.target });
    e.stopPropagation();
    const { value } = e.target;
    dispatch(updatePageComponents({ module, key: "fontWeight", value }));
  };

  const fontWeightMap: Record<number, string> = {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Regular",
    500: "Medium",
    600: "Semi Bold",
    700: "Bold",
    800: "Extra Bold",
    900: "Heavy",
  };

  return (
    <div className={fieldClasses.singleAttribute}>
      <p>Font Weight</p>
      <Select.Primary
        onChange={changeHandler}
        value={(options && fontWeight) || ""}
        options={options}
      />
    </div>
  );
}
