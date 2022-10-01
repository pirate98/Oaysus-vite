import { useDispatch, useSelector } from "react-redux";
import { HiddenWrapperButton, PlainButton } from "../../atoms";
import { updatePageComponents } from "../../pages/builder/builderSlice";
import classes from "./.module.scss";

export function ImageUpload({ name, module }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      updatePageComponents({
        module,
        key: "backgroundImage",
        value: [
          "url(/mockData/flowers.jpg)",
          "url(/mockData/puppy.jpg)",
          "url(/mockData/strategy.jpg)",
        ][Math.floor(Math.random() * 3)],
      })
    );
  };

  return (
    <div className={classes.singleAttribute}>
      <p>Image</p>
      <div className={classes.setting}>
        <HiddenWrapperButton
          name={name}
          // temporary method to test background image
          // onClick={(e) => console.log(e.currentTarget.blur())}
        >
          <div className={classes.imagePreview}></div>
        </HiddenWrapperButton>
        <label
          htmlFor="uploadImage"
          onClickCapture={(e) => {
            e.stopPropagation();
            e.currentTarget.click();
            handleClick();
          }}
          className={classes.w100}
        >
          <PlainButton fullWidth color="success" sx={{ fontSize: "14px" }}>
            Upload Image
          </PlainButton>
        </label>
        <input id="uploadImage" name="uploadImage" type="file" hidden />
      </div>
    </div>
  );
}
