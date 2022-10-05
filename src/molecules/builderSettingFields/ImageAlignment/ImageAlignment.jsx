/**
 * This component updates firs child of json,
 * hence module name shouldnt exist on it or on its wrappers.
 */

import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetSelectedPageComponent } from "../../../hooks";
import { ImageAtLeft, ImageAtRight } from "../../builderButtons";

import classes from "./.module.scss";

export function ImageAlignment() {
  const [hoveredLabel, setHoveredLabel] = useState(undefined);

  const handleMouseOut = () => setHoveredLabel(undefined);

  const handleMouseEnter = (e) => {
    setHoveredLabel(e.currentTarget.htmlFor);
  };

  const component = useGetSelectedPageComponent();

  const {
    layout: { imagePosition },
  } = component;

  return (
    <div className={classes.container}>
      <label
        htmlFor="imageLeft"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseOut}
      >
        <ImageAtLeft
          hover={hoveredLabel === "imageLeft" || imagePosition === "left"}
        />
      </label>
      <input
        id="imageLeft"
        name="imagePosition"
        value="left"
        type="radio"
        hidden
      />
      <label
        htmlFor="imageRight"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseOut}
      >
        <ImageAtRight
          hover={hoveredLabel === "imageRight" || imagePosition === "right"}
        />
      </label>
      <input
        id="imageRight"
        name="imagePosition"
        value="right"
        type="radio"
        hidden
      />
    </div>
  );
}
