import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HiddenWrapperButton,
  PlainButton,
  SettingField,
  SettingFieldContainer,
} from "../../atoms";
import { useGetSelectedPageComponent } from "../../hooks";
import { updatePageComponents } from "../../pages/builder/builderSlice";
import classes from "./ImageUpload.module.scss";

export function ImageUpload({ name }) {
  const dispatch = useDispatch();

  const component = useGetSelectedPageComponent();

  const handleImageLoad = (e) => {
    console.log(e.target);
    const path = `url(${window.URL.createObjectURL(e?.target?.files[0])})`;

    dispatch(
      updatePageComponents({
        key: "backgroundPreview",
        value: path,
      })
    );
  };

  return (
    <SettingField fieldName={"Image"}>
      <div className={classes.setting}>
        <HiddenWrapperButton
          name={name}
          // temporary method to test background image
          // onClick={(e) => console.log(e.currentTarget.blur())}
        >
          <div
            className={
              component?.backgroundPreview
                ? classes.imagePreviewActive
                : classes.imagePreview
            }
            style={{
              backgroundImage: component?.backgroundPreview || "",
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
          <PlainButton fullWidth color="success" sx={{ fontSize: "12px" }}>
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
