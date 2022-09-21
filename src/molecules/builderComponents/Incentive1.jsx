import { forwardRef } from "react";

import classes from "./.module.scss";

import { styleFilter } from "../helpers/builder";
import { EditableElement } from "../../atoms/builderInputs";

export const Incentive1 = forwardRef(({ content }, ref) => {
  const userTitleStyle = styleFilter(content.title);
  const userSubTitleStyle = styleFilter(content.subTitle);

  return (
    content && (
      <div className={classes.incentiveContainer} ref={ref}>
        <EditableElement
          style={{ ...userTitleStyle }}
          name="title"
          data-oa-name="title"
          data-oa-type="text"
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
        >
          {content.subTitle ? content.subTitle.text : "Exclusive offer"}
          {/* <span>{content.countdown && content.countdown.duration}</span> */}
        </EditableElement>
      </div>
    )
  );
});
