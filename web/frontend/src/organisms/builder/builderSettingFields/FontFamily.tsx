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
  // console.log({ data, error });

  const [value, setValue] = useState<Record<any, any> | null>(null);

  const _defaultValue = defaultValue?.split(",") && defaultValue.split(",")[0];
  const [inputValue, setInputValue] = useState<string | undefined>(
    _defaultValue
  );

  useEffect(() => {
    // console.log({ _defaultValue });
    setInputValue(_defaultValue);
  }, []);

  // This enables handlers in field wrapper to catch the changes
  useEffect(() => {
    if (!value) return;
    dispatch(
      updatePageComponents({ module, key: "fontFamily", value: inputValue })
    );
  }, [value]);

  return (
    <div className={classes.singleAttribute}>
      <p>Font Family</p>
      <Autocomplete
        // placeholder="Choose a font"
        value={value}
        onChange={(_event: any, newValue: any) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(_event: any, newInputValue: string) => {
          if (!_event) return; //  prevent update on page load
          setInputValue(newInputValue);
        }}
        options={data}
        getOptionLabel={(option: Option) => option.family}
      />
    </div>
  );
}
