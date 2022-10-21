import { useState } from "react";

import classes from "./AlignImageTemplate.module.scss";
import { useGetSelectedPageComponent } from "@/hooks";

export function AlignImageTemplate({ LeftImage, RightImage }) {
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
      <div>
        <label
          htmlFor="imageLeft"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseOut}
        >
          <LeftImage
            hover={hoveredLabel === "imageLeft" || imagePosition === "left"}
          />
        </label>
        <p>Left</p>
        <input
          id="imageLeft"
          name="imagePosition"
          value="left"
          type="radio"
          hidden
        />
      </div>
      <div>
        <label
          htmlFor="imageRight"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseOut}
        >
          <RightImage
            hover={hoveredLabel === "imageRight" || imagePosition === "right"}
          />
        </label>
        <p>Right</p>
        <input
          id="imageRight"
          name="imagePosition"
          value="right"
          type="radio"
          hidden
        />
      </div>
    </div>
  );
}
