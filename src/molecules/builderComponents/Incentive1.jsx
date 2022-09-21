import { forwardRef } from "react";

import classes from "./.module.scss";

import { styleFilter } from "../helpers/builder";
import { CleanInput } from "../../atoms/builderInputs";

export const Incentive1 = forwardRef(({ content }, ref) => {
  const userTitleStyle = styleFilter(content.title);
  const userSubTitleStyle = styleFilter(content.subTitle);

  return (
    content && (
      <div className={classes.incentiveContainer} ref={ref}>
        <CleanInput style={{ ...userTitleStyle }} name="title">
          {content.title
            ? content.title.text
            : "Add a Test T-shirt to your order"}
        </CleanInput>
        <CleanInput style={{ ...userSubTitleStyle }} name="subTitle">
          {content.subTitle ? content.subTitle.text : "Exclusive offer"}
          {/* <span>{content.countdown && content.countdown.duration}</span> */}
        </CleanInput>
      </div>
    )
  );
});
