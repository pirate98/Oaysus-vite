import { ButtonGroupTemplate } from "./ButtonGroupTemplate";

export function Position({ data = {} }) {
  // console.log({ data });
  const buttons = [
    { title: "Left", value: "left", selected: data.backgroundPositionX },
    { title: "Center", value: "center", selected: data.backgroundPositionX },
    { title: "Right", value: "right", selected: data.backgroundPositionX },
  ];
  const buttons2 = [
    { title: "Top", value: "top", selected: data.backgroundPositionY },
    { title: "Center", value: "center", selected: data.backgroundPositionY },
    { title: "Bottom", value: "bottom", selected: data.backgroundPositionY },
  ];

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
