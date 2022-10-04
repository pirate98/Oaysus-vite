import { useDispatch } from "react-redux";
import { Select, SettingFieldContainer } from "../../atoms";
import { updatePageComponents } from "../../pages/builder/builderSlice";
import classes from "./.module.scss";

export function ImageDisplayType({ className }) {
  const dispatch = useDispatch();

  const options = [
    {
      label: "Single Image",
      value: "single",
    },
    {
      label: "Custom Image",
      value: "custom",
    },
    {
      label: "Image Carousel",
      value: "carousel",
    },
  ];

  const handleChange = (e) => {
    e.stopPropagation();
    // e.preventDefault();
    const { value } = e.target;
    dispatch(updatePageComponents({ key: "imageDisplayType", value }));
  };

  return (
    <SettingFieldContainer title={""}>
      <div
        className={classes.singleAttribute + " " + (className ? className : "")}
      >
        <p>Type</p>
        <Select onChange={handleChange} options={options} />
      </div>
    </SettingFieldContainer>
  );
}
