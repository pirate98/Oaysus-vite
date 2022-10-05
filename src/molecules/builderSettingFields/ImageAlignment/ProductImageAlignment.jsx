import { SettingFieldContainer } from "../../../atoms";
import classes from "./.module.scss";
import { ProductAlignLeft, ProductAlignRight } from "../../builderButtons";
import { useState } from "react";
import { useGetSelectedPageComponent } from "../../../hooks";

export function ProductImageAlignment() {
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
          <ProductAlignLeft
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
          <ProductAlignRight
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
