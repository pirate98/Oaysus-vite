import { useState, useEffect, useRef } from "react";

import {
  Autocomplete,
  CustomSelect,
  SelectForBuilder,
  StyledOption,
  Select,
} from "../../atoms";
import fieldClasses from "../builderSettingFields/.module.scss";
import { ReactComponent as SelectIcon } from "../../assets/svg/selectListBtn.svg";
import { useGetFontsQuery } from "../../data/googleAPI";
import { useGetSelectedPageComponent } from "../../hooks";
import { useDispatch } from "react-redux";
import { updatePageComponents } from "../../pages/builder/builderSlice";
// const options = Array.from(Array(9).keys()).map((num) =>
//   ((num + 1) * 100).toString()
// );

export function FontWeight({ defaultValue, module }) {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState(defaultValue);
  const [options, setOptions] = useState([]);
  // const textFieldRef = useRef();

  const dispatch = useDispatch();

  // This enables handlers in field wrapper to catch the changes
  // useEffect(() => {
  //   // console.log({ fontFamilyUpdatedTo: value });
  //   textFieldRef.current.blur();
  // }, [value]);

  const selectedPageComponent = useGetSelectedPageComponent();

  const { data: fontFamilyData } = useGetFontsQuery();

  const { fontFamily, fontWeight } =
    (selectedPageComponent && selectedPageComponent[module]) || {};
  console.log({ fontWeight });
  useEffect(() => {
    if (!fontFamilyData) return;

    const filterResult =
      fontFamilyData &&
      fontFamilyData.filter((_fontFamily) => {
        return _fontFamily.family === fontFamily;
      });

    // console.log({ filterResult });

    if (!filterResult[0] || !filterResult[0].variants) return;

    const onlyNumericalVariants = (fontStyle = "regular") => {
      const filtered = filterResult[0].variants.filter(
        (variant) => /^[0-9]+$/i.test(variant) || variant === fontStyle
      );

      return filtered.map((variant) => (variant === fontStyle ? 400 : variant));
    };

    console.log({ onlyNumericalVariants: onlyNumericalVariants() });

    setOptions(
      onlyNumericalVariants().map((variant) => {
        return { value: variant, label: fontWeightMap[variant] };
      })
    );
  }, [fontFamily, fontFamilyData]);

  const changeHandler = (e) => {
    console.log({ e: e.target });
    const { value } = e.target;
    dispatch(updatePageComponents({ module, key: "fontWeight", value }));
  };

  const fontWeightMap = {
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
      <Select
        onChange={changeHandler}
        value={fontWeight}
        // ref={textFieldRef}
        options={options}
      />
    </div>
  );
}
