import { PxInput } from "../../atoms";
import { useGetActiveComponent } from "../../hooks";
import classes from "./.module.scss";

export function Distances({ type, module }) {
  const activeComponent = useGetActiveComponent();
  console.log({ module });
  return (
    <>
      <div className={classes.doubleAttribute}>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Top</p>
          <PxInput
            defaultValue={activeComponent[module][`${type}Top`].replace(
              "px",
              ""
            )}
            small
            name={`${type}Top_px`}
          />
        </div>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Right</p>
          <PxInput
            small
            name={`${type}Right_px`}
            defaultValue={activeComponent[module][`${type}Right`].replace(
              "px",
              ""
            )}
          />
        </div>
      </div>
      <div className={classes.doubleAttribute}>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Bottom</p>
          <PxInput
            small
            name={`${type}Bottom_px`}
            defaultValue={activeComponent[module][`${type}Bottom`].replace(
              "px",
              ""
            )}
          />
        </div>
        <div className={classes.innerDoubleAttribute}>
          <p className={classes.p}>Left</p>
          <PxInput
            small
            name={`${type}Left_px`}
            defaultValue={activeComponent[module][`${type}Left`].replace(
              "px",
              ""
            )}
          />
        </div>
      </div>
    </>
  );
}
