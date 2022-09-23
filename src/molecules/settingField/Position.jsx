import { ButtonGroupTemplate } from "./ButtonGroupTemplate";

export function Position({ data = {} }) {
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

  return (
    <>
      <ButtonGroupTemplate title={"Position"} buttons={buttons} />
      <ButtonGroupTemplate buttons={buttons2} />
    </>
  );
}
