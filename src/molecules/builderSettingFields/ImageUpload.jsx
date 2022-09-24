import { HiddenWrapperButton, PlainButton } from "../../atoms";
import classes from "./.module.scss";

export function ImageUpload(props) {
  return (
    <div className={classes.singleAttribute}>
      <p>Image</p>
      <div className={classes.setting}>
        <HiddenWrapperButton
          name={props.name}
          // temporary method to test background image
          onClick={(e) => console.log(e.currentTarget.blur())}
        >
          <div className={classes.imagePreview}></div>
        </HiddenWrapperButton>
        <PlainButton fullWidth color="success">
          Upload Image
        </PlainButton>
      </div>
    </div>
  );
}
