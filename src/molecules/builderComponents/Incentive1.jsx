import { forwardRef } from "react";

import classes from "./.module.scss";

import { styleFilter } from "../helpers/builder";
import { EditableElement } from "../../atoms/builderInputs";

export const Incentive1 = forwardRef(({ content }, ref) => {
  const userTitleStyle = styleFilter(content.title);
  const userSubTitleStyle = styleFilter(content.subTitle);
  const componentStyle = styleFilter(content.background);

  return (
    content && (
      <div
        className={classes.incentiveContainer}
        style={{ ...componentStyle }}
        ref={ref}
      >
        <EditableElement
          // hidden={true}
          style={{ ...userTitleStyle }}
          name="title"
          data-oa-name="title"
          data-oa-type="text"
          type="p"
        >
          {content.title
            ? content.title.text
            : "Add a Test T-shirt to your order"}
        </EditableElement>
        <EditableElement
          style={{ ...userSubTitleStyle }}
          name="subTitle"
          data-oa-name="subTitle"
          data-oa-type="text"
          type="p"
        >
          {content.subTitle ? content.subTitle.text : "Exclusive offer"}
          {/* <span>{content.countdown && content.countdown.duration}</span> */}
        </EditableElement>
      </div>
    )
  );
});
