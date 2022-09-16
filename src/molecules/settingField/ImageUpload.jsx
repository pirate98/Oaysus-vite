import { PlainButton } from "../../atoms";
import classes from "./.module.scss";

export function ImageUpload() {
  return (
    <div className={classes.singleAttribute}>
      <p>Image</p>
      <div className={classes.setting}>
        <div className={classes.imagePreview}></div>
        <PlainButton fullWidth color="success">
          Upload Image
        </PlainButton>
      </div>
    </div>
  );
}
