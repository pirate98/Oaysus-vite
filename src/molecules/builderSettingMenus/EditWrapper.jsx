import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import { updatePageComponents } from "../../pages/builder/builderSlice";

export function EditWrapper({ children, ...props }) {
  const [fontFamily, setFontFamily] = useState("");

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

    if (key === "fontFamily") setFontFamily(value);

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
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href={`https://fonts.googleapis.com/css2?family=${fontFamily}:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap`}
          rel="stylesheet"
        />
      </Helmet>
    </>
  );
}