import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HiddenWrapperButton,
  PlainButton,
  SettingField,
  SettingFieldContainer,
} from "../../atoms";
import { updatePageComponents } from "../../pages/builder/builderSlice";
import classes from "./ImageUpload.module.scss";

export function ImageUpload({ name, module }) {
  const dispatch = useDispatch();

  const [imagePath, setImagePath] = useState(undefined);

  // const handleClick = () => {
  //   dispatch(
  //     updatePageComponents({
  //       module,
  //       key: "backgroundImage",
  //       value: [
  //         "url(/mockData/flowers.jpg)",
  //         "url(/mockData/puppy.jpg)",
  //         "url(/mockData/strategy.jpg)",
  //       ][Math.floor(Math.random() * 3)],
  //     })
  //   );
  // };

  const handleImageLoad = (e) => {
    console.log(e.target);
    const path = `url(${window.URL.createObjectURL(e?.target?.files[0])})`;
    setImagePath(path);
    dispatch(
      updatePageComponents({
        key: "backgroundPreview",
        value: path,
      })
    );
  };

  return (
    <SettingField fieldName="Image">
      {/* <p>Image</p> */}
      {/* {imagePath && <img src={window.URL.createPathectURL(imagePath)} />} */}
      <div className={classes.setting}>
        <HiddenWrapperButton
          name={name}
          // temporary method to test background image
          // onClick={(e) => console.log(e.currentTarget.blur())}
        >
          <div
            className={classes.imagePreview}
            style={{
              backgroundImage: imagePath || "",
            }}
          ></div>
        </HiddenWrapperButton>
        <label
          htmlFor="uploadImage"
          onClickCapture={(e) => {
            e.stopPropagation();
            e.currentTarget.click();
            // handleClick();
          }}
          className={classes.w100}
        >
          <PlainButton fullWidth color="success" sx={{ fontSize: "14px" }}>
            Upload Image
          </PlainButton>
        </label>
        <input
          id="uploadImage"
          name="uploadImage"
          onChange={handleImageLoad}
          type="file"
          hidden
        />
      </div>
    </SettingField>
  );
}
