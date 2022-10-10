import { useEffect, useRef, useState } from "react";
import classes from "./SettingsProgressBar.module.scss";

export function SettingsProgressBar({ breakPoints, completed }) {
  const dottedProgressBar = useRef();
  const [breakPointPositions, setBreakPointPositions] = useState([]);
  const [positionOfCompleted, setPositionOfCompleted] = useState(undefined);

  useEffect(() => {
    console.log(dottedProgressBar.current.scrollWidth);
    const { scrollWidth } = dottedProgressBar.current;
    const breakPointsSum = breakPoints.reduce((prev, cur) => prev + cur);
    console.log({ breakPointsSum });
    const pointToMargin = breakPoints.map(
      (point) => (scrollWidth * point) / breakPointsSum
    );
    setBreakPointPositions(pointToMargin);
    setPositionOfCompleted((completed * pointToMargin[0]) / breakPoints[0]);
  }, [dottedProgressBar?.current]);

  return (
    <div className={classes.container}>
      <span className={classes.dotSpan} ref={dottedProgressBar}></span>
      <span className={classes.dotSpan2}></span>
      {breakPoints.map((point, idx) => {
        return (
          <span
            className={classes.circle}
            style={{ left: breakPointPositions[idx] }}
          >
            <p className={classes.p}>${point}</p>
          </span>
        );
      })}
      <span
        className={classes.circleGreen}
        style={{ left: positionOfCompleted }}
      >
        <p className={classes.p}>${completed}</p>
      </span>
      <span
        className={classes.progressGreen}
        style={{ width: positionOfCompleted }}
      ></span>
    </div>
  );
}
