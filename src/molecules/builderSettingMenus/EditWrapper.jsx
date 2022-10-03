import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { updatePageComponents } from "../../pages/builder/builderSlice";

export function EditWrapper({ children, ...props }) {
  const dispatch = useDispatch();

  const {
    builder: { selectedPageComponentName },
  } = useSelector((state) => state);

  const handleChange = (e) => {
    console.warn("editWrapper");

    let { target } = e;

    if (!target) return;

    const { module } = props;
    let { name: key, value } = target;
    console.log({ module, key, value });
    if (!key) return;

    if (key.includes("px")) {
      value += "px";
      key = key.split("_")[0];
    }

    // Catch checkbox inputs
    if (key === "visibility") {
      value = e.target.checked;
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

  return (
    <>
      <div
        {...props}
        onChange={handleChange}
        onKeyUp={handleChange}
        onBlur={handleChange}
        // onMouseDownCapture={handleChange}
      >
        {children}
      </div>
    </>
  );
}
