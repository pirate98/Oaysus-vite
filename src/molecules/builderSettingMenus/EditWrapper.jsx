import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { updatePageComponents } from "../../pages/builder/builderSlice";

export function EditWrapper({ children, ...props }) {
  const dispatch = useDispatch();

  const {
    builder: { activeComponent },
  } = useSelector((state) => state);

  const handleChange = (e) => {
    console.warn("wrapper");

    let { target } = e;

    if (!target) return;

    const { module } = props;
    let { name: key, value } = target;
    console.log({ key, value });
    if (!key) return;

    if (key.includes("px")) {
      value += "px";
      key = key.split("_")[0];
    }

    if (key === "visibility") {
      value = e.target.checked;
    }

    // if (key==='upload')

    // console.log({ activeComponent, module, key, value });

    dispatch(
      updatePageComponents({ component: activeComponent, module, key, value })
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
