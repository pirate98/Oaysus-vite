import { useDispatch, useSelector } from "react-redux";

import { updatePageComponents } from "@/pages/builder/builderSlice";
import { useDebounceHandler } from "@/hooks";
import { RootState } from "@/data/store";
import { ChangeEvent, HTMLProps } from "react";

type Props = {
  children?: React.ReactNode;
  module: string;
} & HTMLProps<HTMLDivElement>;

export function EditWrapper({ children, module, ...props }: Props) {
  const dispatch = useDispatch();

  const {
    builder: { selectedPageComponentName },
  } = useSelector((state: RootState) => state);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.warn("editWrapper");

    let { target } = e;
    if (!target) return;
    let value: string | boolean = target.value;
    let { name: key } = target;
    // console.log({ module, key, value });
    if (!key) return;

    if (key.includes("px")) {
      value += "px";
      key = key.split("_")[0];
    }

    // Catch checkbox inputs
    if (key === "visibility") {
      value = e.target.checked;
    }

    if (key === "url" && typeof value === "string") {
      value = value.split("=")[1];
    }

    // if (key==='upload')

    // console.log({ selectedPageComponentName, module, key, value });

    dispatch(
      updatePageComponents({
        module,
        key,
        value,
      })
    );
  };

  const debounceHandler = useDebounceHandler(handleChange);

  return (
    <div
      {...props}
      onChange={debounceHandler}
      onKeyUp={debounceHandler}
      // onBlur={handleChange}
      // onMouseDownCapture={handleChange}
    >
      {children}
    </div>
  );
}
