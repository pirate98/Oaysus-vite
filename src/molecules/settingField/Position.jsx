import { ButtonGroupTemplate } from "./ButtonGroupTemplate";

const buttons = [
  { title: "Left", value: "left" },
  { title: "Center", value: "center" },
  { title: "Right", value: "right" },
];
const buttons2 = [
  { title: "Top", value: "top" },
  { title: "Center", value: "center" },
  { title: "Bottom", value: "bottom" },
];

export function Position({ data }) {
  // console.log({ data });
  return (
    <>
      <ButtonGroupTemplate
        title={"Position"}
        name={"backgroundPositionX"}
        buttons={buttons}
        selectedValue={data.backgroundPositionX}
      />
      <ButtonGroupTemplate
        name={"backgroundPositionY"}
        buttons={buttons2}
        selectedValue={data.backgroundPositionY}
      />
    </>
  );
}
