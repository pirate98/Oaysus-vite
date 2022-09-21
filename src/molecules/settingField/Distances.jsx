import { PxInput } from "../../atoms";
import classes from "./.module.scss";

export function Distances({ type }) {
  return (
    <>
      <div className={classes.doubleAttribute}>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Top</p>
          <PxInput small name={`${type}Top`} />
        </div>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Right</p>
          <PxInput small name={`${type}Right`} />
        </div>
      </div>
      <div className={classes.doubleAttribute}>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Bottom</p>
          <PxInput small name={`${type}Bottom`} />
        </div>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Left</p>
          <PxInput small name={`${type}Left`} />
        </div>
      </div>
    </>
  );
}
