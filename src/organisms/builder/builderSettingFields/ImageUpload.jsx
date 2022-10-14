import { useMemo, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { HiddenWrapper, SettingField } from "@/atoms";
import { Button } from "@/atoms/button";
import { useGetSelectedPageComponent } from "@/hooks";
import { updatePageComponents } from "@/pages/builder/builderSlice";
import classes from "./ImageUpload.module.scss";
import { Delete } from "@/assets/svg";

export function ImageUpload({ module }) {
  const dispatch = useDispatch();

  const component = useGetSelectedPageComponent();
  const memoComponent = useMemo(() => component, [component]);

  const handleImageLoad = (e) => {
    // console.log(e.target);
    const path = `url(${window.URL.createObjectURL(e?.target?.files[0])})`;

    dispatch(
      updatePageComponents({
        key: "backgroundPreview",
        value: path,
      })
    );
  };

  const [imageToDisplay, setImageToDisplay] = useState(undefined);

  const handleDelete = () => {
    dispatch(
      updatePageComponents({
        module,
        key: "backgroundSize",
        value: "auto",
      })
    );

    dispatch(
      updatePageComponents({
        key: "backgroundPreview",
        value: undefined,
      })
    );
  };

  useEffect(() => {
    setImageToDisplay(memoComponent?.backgroundPreview);
  }, [memoComponent]);

  return (
    <SettingField fieldName={"Image"}>
      <div className={classes.setting}>
        <HiddenWrapper name={name}>
          <div
            className={
              imageToDisplay ? classes.imagePreviewActive : classes.imagePreview
            }
            style={{
              backgroundImage: imageToDisplay || "",
            }}
          ></div>
        </HiddenWrapper>
        {imageToDisplay ? <Delete onClick={handleDelete} /> : null}
        <label
          htmlFor="uploadImage"
          onClickCapture={(e) => {
            e.stopPropagation();
            e.currentTarget.click();
            // handleClick();
          }}
          className={classes.w100}
        >
          <Button.BuilderMenu fullWidth color="success">
            {imageToDisplay ? "Replace Image" : "Upload Image"}
          </Button.BuilderMenu>
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
