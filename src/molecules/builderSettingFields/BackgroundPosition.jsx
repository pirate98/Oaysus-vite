import { ButtonGroupTemplate } from "./templates/ButtonGroupTemplate";

export function BackgroundPosition({ data = {} }) {
  // console.log({ data });
  const handleClick = (e) => e.target.blur();

  const buttons = [
    {
      title: "Left",
      value: "left",
      selected: data.backgroundPositionX === "left",
      onClick: handleClick,
      name: "backgroundPositionX",
    },
    {
      title: "Center",
      value: "center",
      selected: data.backgroundPositionX === "center",
      onClick: handleClick,
      name: "backgroundPositionX",
    },
    {
      title: "Right",
      value: "right",
      selected: data.backgroundPositionX === "right",
      onClick: handleClick,
      name: "backgroundPositionX",
    },
  ];
  const buttons2 = [
    {
      title: "Top",
      name: "backgroundPositionY",
      value: "top",
      selected: data.backgroundPositionY === "top",
      onClick: handleClick,
    },
    {
      title: "Center",
      name: "backgroundPositionY",
      value: "center",
      selected: data.backgroundPositionY === "center",
      onClick: handleClick,
    },
    {
      title: "Bottom",
      name: "backgroundPositionY",
      value: "bottom",
      selected: data.backgroundPositionY === "bottom",
      onClick: handleClick,
    },
  ];
  const buttons3 = [
    {
      title: "Auto",
      name: "backgroundSize",
      value: "auto",
      selected: data.backgroundSize === "auto",
      onClick: handleClick,
    },
    {
      title: "Cover",
      name: "backgroundSize",
      value: "cover",
      selected: data.backgroundSize === "cover",
      onClick: handleClick,
    },
    {
      title: "Contain",
      name: "backgroundSize",
      value: "contain",
      selected: data.backgroundSize === "contain",
      onClick: handleClick,
    },
  ];

  return (
    <>
      <ButtonGroupTemplate title={"Position"} buttons={buttons} />
      <ButtonGroupTemplate buttons={buttons2} />
      <ButtonGroupTemplate buttons={buttons3} />
    </>
  );
}
