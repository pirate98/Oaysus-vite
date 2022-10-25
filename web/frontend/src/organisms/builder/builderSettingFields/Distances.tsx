import { useEffect } from "react";

import { removePx } from "@/helpers/builder";
import classes from "./.module.scss";
import { InputWithKeyControls } from "@/molecules";

interface Props {
  data: Record<any, any>;
  type: string;
}

export function Distances({ data = {}, type }: Props) {
  useEffect(() => {
    // console.log({ data });
  }, [data]);

  return (
    <>
      <div className={classes.doubleAttribute}>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Top</p>
          <InputWithKeyControls
            endAdornment={"px"}
            value={removePx(data[`${type}Top`])}
            small
            name={`${type}Top_px`}
          />
        </div>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Right</p>
          <InputWithKeyControls
            endAdornment={"px"}
            small
            name={`${type}Right_px`}
            value={removePx(data[`${type}Right`])}
          />
        </div>
      </div>
      <div className={classes.doubleAttribute}>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Bottom</p>
          <InputWithKeyControls
            endAdornment={"px"}
            small
            name={`${type}Bottom_px`}
            value={removePx(data[`${type}Bottom`])}
          />
        </div>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Left</p>
          <InputWithKeyControls
            endAdornment={"px"}
            small
            name={`${type}Left_px`}
            value={removePx(data[`${type}Left`])}
          />
        </div>
      </div>
    </>
  );
}
