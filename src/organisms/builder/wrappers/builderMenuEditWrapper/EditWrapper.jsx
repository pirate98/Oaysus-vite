import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { updatePageComponents } from "@/pages/builder/builderSlice";
import { useDebounceHandler } from "../../../../hooks";

export function EditWrapper({ children, ...props }) {
  const dispatch = useDispatch();

  const {
    builder: { selectedPageComponentName },
  } = useSelector((state) => state);

  const handleChange = (e) => {
    // console.warn("editWrapper");

    let { target } = e;

    if (!target) return;

    const { module } = props;
    let { name: key, value } = target;
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

    if (key === "url") {
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
