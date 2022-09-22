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

export function Position() {
  return (
    <>
      <ButtonGroupTemplate
        title={"Position"}
        name={"backgroundPositionX"}
        buttons={buttons}
      />
      <ButtonGroupTemplate name={"backgroundPositionY"} buttons={buttons2} />
    </>
  );
}
