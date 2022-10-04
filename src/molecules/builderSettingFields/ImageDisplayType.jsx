import { useDispatch } from "react-redux";
import { Select, SettingFieldContainer } from "../../atoms";
import { updatePageComponents } from "../../pages/builder/builderSlice";
import classes from "./.module.scss";
import { builderSettings } from "../../data/builderSettings";
import { useGetSelectedPageComponent } from "../../hooks";

export function ImageDisplayType({ className }) {
  const dispatch = useDispatch();

  const component = useGetSelectedPageComponent();

  const options = [
    {
      label: "Single Image",
      value: builderSettings?.imageDisplayTypes?.single,
      selected:
        component.imageDisplayType ===
        builderSettings?.imageDisplayTypes?.single,
    },
    {
      label: "Custom Image",
      value: builderSettings?.imageDisplayTypes?.custom,
      selected:
        component.imageDisplayType ===
        builderSettings?.imageDisplayTypes?.custom,
    },
    {
      label: "Image Carousel",
      value: builderSettings?.imageDisplayTypes?.carousel,
      selected:
        component.imageDisplayType ===
        builderSettings?.imageDisplayTypes?.carousel,
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
        <Select
          onChange={handleChange}
          options={options}
          value={component?.imageDisplayType || ""}
        />
      </div>
    </SettingFieldContainer>
  );
}
