import { useCallback } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { PxInput } from "../../atoms";
import { removePx } from "../helpers/builder";
import classes from "./.module.scss";

export function Distances({ data = {}, type }) {
  useEffect(() => {
    // console.log({ data });
  }, [data]);

  return (
    <>
      <div className={classes.doubleAttribute}>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Top</p>
          <PxInput
            value={removePx(data[`${type}Top`])}
            small
            name={`${type}Top_px`}
          />
        </div>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Right</p>
          <PxInput
            small
            name={`${type}Right_px`}
            value={removePx(data[`${type}Right`])}
          />
        </div>
      </div>
      <div className={classes.doubleAttribute}>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Bottom</p>
          <PxInput
            small
            name={`${type}Bottom_px`}
            value={removePx(data[`${type}Bottom`])}
          />
        </div>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Left</p>
          <PxInput
            small
            name={`${type}Left_px`}
            value={removePx(data[`${type}Left`])}
          />
        </div>
      </div>
    </>
  );
}
