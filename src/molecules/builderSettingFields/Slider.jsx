import classes from "./.module.scss";
import { Slider as SliderInput } from "../../atoms";
import { removePx } from "../helpers/builder";
import { useDispatch, useSelector } from "react-redux";
import { updatePageComponents } from "../../pages/builder/builderSlice";

export function Slider({ title, defaultValue = "", name, module, max = 500 }) {
  const dispatch = useDispatch();

  const {
    builder: { selectedPageComponentName },
  } = useSelector((state) => state);

  const defaultValueString = removePx(defaultValue);
  const defaultValueNumber = defaultValueString.length
    ? parseInt(defaultValueString)
    : 0;

  // console.log({ sliderData: defaultValueNumber });

  const handleChange = (e) => {
    e.stopPropagation();

    // console.log("slider");
    const { name: key, value } = e.target;

    dispatch(
      updatePageComponents({
        component: selectedPageComponentName,
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
          value={defaultValueNumber}
          onChange={handleChange}
          // Prevent edit wrapper from catching this change
          onBlur={(e) => e.stopPropagation()}
        />
        <span>
          <p>{defaultValueNumber}</p>
          <p className={classes.pGray}>px</p>
        </span>
      </div>
    </div>
  );
}
