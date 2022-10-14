import { useDispatch } from "react-redux";
import { Select, SettingField, SettingFieldContainer } from "@/atoms";
import { updatePageComponents } from "@/pages/builder/builderSlice";
import classes from "./.module.scss";
import { builderSettings } from "@/data/builderSettings";
import { useGetSelectedPageComponent } from "@/hooks";

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

    if (value === "custom" && !component.customImages.length) {
      dispatch(
        updatePageComponents({
          module: "image",
          key: "backgroundSize",
          value: "auto",
        })
      );
    }
  };

  return (
    <SettingField fieldName={"Type"}>
      <Select.Primary
        onChange={handleChange}
        options={options}
        value={component?.imageDisplayType || ""}
      />
    </SettingField>
  );
}
