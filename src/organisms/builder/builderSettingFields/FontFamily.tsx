import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { Autocomplete } from "@/atoms";
import { useGetFontsQuery } from "@/data/googleApi";
import { updatePageComponents } from "@/pages/builder/builderSlice";
import classes from "../builderSettingFields/.module.scss";

interface Props {
  defaultValue?: string;
  module: string;
}

type Option = Record<any, any>;

export function FontFamily({ defaultValue, module }: Props) {
  const dispatch = useDispatch();

  const { data, error } = useGetFontsQuery(null);
  const textFieldRef = useRef<HTMLInputElement>(null);
  // console.log({ data, error });

  const [value, setValue] = useState<Record<any, any>>();

  const _defaultValue = defaultValue?.split(",") && defaultValue.split(",")[0];
  const [inputValue, setInputValue] = useState<string | undefined>(
    _defaultValue
  );

  // useEffect(() => {
  //   setInputValue(_defaultValue);
  // }, []);

  // This enables handlers in field wrapper to catch the changes
  useEffect(() => {
    // console.log({ valueUpdatedTo: value });
    textFieldRef?.current.blur();
    if (!value) return;
    dispatch(
      updatePageComponents({ module, key: "fontFamily", value: inputValue })
    );
  }, [value]);

  return (
    <div className={classes.singleAttribute}>
      <p>Font Family</p>
      <Autocomplete
        inputRef={textFieldRef}
        inputPlaceholder="Choose a font"
        value={value}
        onChange={(_event: any, newValue: any) => {
          // console.log({ autoCompleteChange: newValue });
          // console.log(textFieldRef);
          setValue(newValue);
          // event.target.blur();
        }}
        inputValue={inputValue}
        onInputChange={(_event: any, newInputValue: string) => {
          // console.log({ newInput: newInputValue });
          if (!event) return; //  prevent update on page load
          // if (newInputValue.length === 0) setValue(null);
          setInputValue(newInputValue);
        }}
        inputName={"fontFamily"}
        // id="controllable-states-demo"
        options={data || []}
        getOptionLabel={(option: Option) => option.family}
      />
    </div>
  );
}
