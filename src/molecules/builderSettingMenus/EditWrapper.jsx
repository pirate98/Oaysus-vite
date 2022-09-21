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
    // e.preventDefault();
    // console.log(e.target);
    const { module } = props;
    let { name: key, value } = e.target;

    if (key.includes("px")) {
      value += "px";
      key = key.split("_")[0];
    }

    if (key === "fontFamily") setFontFamily(value);

    console.log({ activeComponent, module, key, value });

    dispatch(
      updatePageComponents({ component: activeComponent, module, key, value })
    );
  };

  return (
    <>
      <div {...props} onChange={handleChange} onKeyUp={handleChange}>
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
