import { useState, useEffect, useRef } from "react";

import {
  Autocomplete,
  CustomSelect,
  SelectForBuilder,
  StyledOption,
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
  const textFieldRef = useRef();

  const dispatch = useDispatch();

  // This enables handlers in field wrapper to catch the changes
  useEffect(() => {
    // console.log({ fontFamilyUpdatedTo: value });
    textFieldRef.current.blur();
  }, [value]);

  const selectedPageComponent = useGetSelectedPageComponent();

  const { data: fontFamilyData } = useGetFontsQuery();

  const { fontFamily, fontWeight } =
    selectedPageComponent && selectedPageComponent[module];

  useEffect(() => {
    if (!fontFamilyData) return;

    const filterResult =
      fontFamilyData &&
      fontFamilyData.filter((_fontFamily) => {
        return _fontFamily.family === fontFamily;
      });

    // console.log({ filterResult });

    if (!filterResult[0] || !filterResult[0].variants) return;

    const onlyNumericalVariants = filterResult[0].variants.filter((variant) =>
      /^[0-9]+$/i.test(variant)
    );

    console.log({ onlyNumericalVariants });

    setOptions(onlyNumericalVariants);
  }, [fontFamily, fontFamilyData]);

  const changeHandler = (e) =>
    dispatch(updatePageComponents({ module, key: "fontWeight", value: e }));

  return (
    <div className={fieldClasses.singleAttribute}>
      <p>Font Weight</p>
      <SelectForBuilder
        onChange={changeHandler}
        standardWidth
        value={fontWeight}
        ref={textFieldRef}
      >
        {options.map((option, idx) => (
          <StyledOption key={idx} value={option}>
            {option}
          </StyledOption>
        ))}
      </SelectForBuilder>
    </div>
  );
}
