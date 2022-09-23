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
    const { name: key, value } = e.target;

    dispatch(
      updatePageComponents({ component: activeComponent, module, key, value })
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
          value={_data}
          onChange={handleChange}
        />
        <span>
          <p>{_data}</p>
          <p className={classes.pGray}>px</p>
        </span>
      </div>
    </div>
  );
}
