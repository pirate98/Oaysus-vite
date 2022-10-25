import { useEffect, useRef, useState } from "react";
import { formatAmountToCurrency } from "@/helpers";
import classes from "./SettingsProgressBar.module.scss";

interface Props {
  breakPoints: number[];
  completed?: number;
}

export function SettingsProgressBar({ breakPoints, completed = 0 }: Props) {
  const dottedProgressBar = useRef<HTMLSpanElement>(null);
  const [breakPointPositions, setBreakPointPositions] = useState<number[]>([]);
  const [positionOfCompleted, setPositionOfCompleted] = useState<number>();

  useEffect(() => {
    console.log(dottedProgressBar.current?.scrollWidth);
    const { scrollWidth = 0 } = dottedProgressBar.current || {};
    const breakPointsSum = breakPoints.reduce(
      (prev: number, cur: number) => prev + cur
    );
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
            key={idx}
            className={classes.circle}
            style={{ left: breakPointPositions[idx] }}
          >
            <p className={classes.p}>{formatAmountToCurrency(point)}</p>
          </span>
        );
      })}
      <span
        className={classes.circleGreen}
        style={{ left: positionOfCompleted }}
      >
        <p className={classes.p}>{formatAmountToCurrency(completed)}</p>
      </span>
      <span
        className={classes.progressGreen}
        style={{ width: positionOfCompleted }}
      ></span>
    </div>
  );
}
