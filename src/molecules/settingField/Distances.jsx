import { PxInput } from "../../atoms";
import classes from "./.module.scss";

export function Distances() {
  return (
    <>
      <div className={classes.doubleAttribute}>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Top</p>
          <PxInput small />
        </div>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Right</p>
          <PxInput small />
        </div>
      </div>
      <div className={classes.doubleAttribute}>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Bottom</p>
          <PxInput small />
        </div>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Left</p>
          <PxInput small />
        </div>
      </div>
    </>
  );
}
