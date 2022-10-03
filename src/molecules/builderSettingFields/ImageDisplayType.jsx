import { Select } from "../../atoms";
import classes from "./.module.scss";

export function ImageDisplayType({ className }) {
  const options = [
    {
      label: "Single Image",
      value: "",
    },
    {
      label: "Custom Image",
      value: "",
    },
    {
      label: "Image Carousel",
      value: "",
    },
  ];

  return (
    <div
      className={classes.singleAttribute + " " + (className ? className : "")}
    >
      <p>Type</p>
      <Select options={options} />
    </div>
  );
}
