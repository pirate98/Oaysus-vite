import classes from "./.module.scss";
import { Slider as SliderInput } from "../../atoms";

export function Slider({ title }) {
  return (
    <div className={classes.singleAttribute}>
      <p>{title}</p>
      <div className={classes.sliderBox}>
        <SliderInput
          aria-label="Volume"
          // value={value}
          // onChange={handleChange}
        />
        <span>
          <p>56</p>
          <p className={classes.pGray}>px</p>
        </span>
      </div>
    </div>
  );
}
