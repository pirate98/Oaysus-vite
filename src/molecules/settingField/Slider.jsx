import classes from "./.module.scss";
import { Slider as SliderInput } from "../../atoms";
import { removePx } from "../helpers/builder";
import { useDispatch, useSelector } from "react-redux";
import { updatePageComponents } from "../../pages/builder/builderSlice";

export function Slider({ title, defaultValue = "", name, module, max = 500 }) {
  const dispatch = useDispatch();

  const {
    builder: { activeComponent },
  } = useSelector((state) => state);

  const _data = removePx(defaultValue);

  const handleChange = (e) => {
    e.stopPropagation();

    console.log("slider");
    const { name: key, value } = e.target;

    dispatch(
      updatePageComponents({
        component: activeComponent,
        module,
        key,
        value: `${value}px`,
      })
    );
  };

  return (
    <div className={classes.singleAttribute}>
      <p>{title}</p>
      <div className={classes.sliderBox}>
        <SliderInput
          max={max}
          name={name}
          aria-label="Volume"
          value={parseInt(_data)}
          onChange={handleChange}
          // Prevent edit wrapper from catching this change
          onBlur={(e) => e.stopPropagation()}
        />
        <span>
          <p>{_data}</p>
          <p className={classes.pGray}>px</p>
        </span>
      </div>
    </div>
  );
}
