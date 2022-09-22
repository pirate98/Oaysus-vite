import { PxInput } from "../../atoms";
import classes from "./.module.scss";

export function Distances({ data, type }) {
  return (
    <>
      <div className={classes.doubleAttribute}>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Top</p>
          <PxInput
            value={data[`${type}Top`].replace("px", "")}
            small
            name={`${type}Top_px`}
          />
        </div>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Right</p>
          <PxInput
            small
            name={`${type}Right_px`}
            value={data[`${type}Right`].replace("px", "")}
          />
        </div>
      </div>
      <div className={classes.doubleAttribute}>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Bottom</p>
          <PxInput
            small
            name={`${type}Bottom_px`}
            value={data[`${type}Bottom`].replace("px", "")}
          />
        </div>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Left</p>
          <PxInput
            small
            name={`${type}Left_px`}
            value={data[`${type}Left`].replace("px", "")}
          />
        </div>
      </div>
    </>
  );
}
