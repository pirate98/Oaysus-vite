import classes from "./.module.scss";

import { styleFilter } from "../helpers/builder";

export function IncentiveComponent({ content }) {
  const userTitleStyle = styleFilter(content.title);
  const userSubTitleStyle = styleFilter(content.subTitle);

  return (
    content && (
      <div className={classes.titleContainer}>
        <p style={{ ...userTitleStyle }}>
          {content.title ? content.title.text : ""}
        </p>
        <p style={{ ...userSubTitleStyle }}>
          {content.subTitle ? content.subTitle.text : ""}{" "}
          <span>{content.countdown && content.countdown.duration}</span>
        </p>
      </div>
    )
  );
}
