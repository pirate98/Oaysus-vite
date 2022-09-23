import classes from "./.module.scss";
import { Slider as SliderInput } from "../../atoms";
import { removePx } from "../helpers/builder";
import { useDispatch, useSelector } from "react-redux";
import { updatePageComponents } from "../../pages/builder/builderSlice";

export function Slider({ title, data = "", name, module }) {
  const dispatch = useDispatch();

  const {
    builder: { activeComponent },
  } = useSelector((state) => state);

  const _data = removePx(data);

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
          max={500}
          name={name}
          aria-label="Volume"
          value={parseInt(_data)}
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
