import { useDispatch } from "react-redux";
import { updatePageComponents } from "@/pages/builder/builderSlice";
import { ButtonGroupTemplate } from "./templates/ButtonGroupTemplate";
import { BuilderSideMenu } from "@/types/BuilderSideMenu.type";
import { ChangeEvent } from "react";

export function BackgroundPosition({ data = {}, module }: BuilderSideMenu) {
  const dispatch = useDispatch();
  // console.log({ data });
  const handleClick = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    dispatch(updatePageComponents({ module, key: name, value }));
  };

  const backgroundPositionX = {
    left: "left",
    center: "center",
    right: "right",
  };

  const backgroundPositionY = {
    top: "top",
    center: "center",
    bottom: "bottom",
  };

  const backgroundSize = {
    auto: "auto",
    cover: "cover",
    contain: "contain",
  };

  const buttons = [
    {
      title: "Left",
      onClick: handleClick,
      value: backgroundPositionX.left,
      selected: data.backgroundPositionX === backgroundPositionX.left,
      name: "backgroundPositionX",
    },
    {
      title: "Center",
      onClick: handleClick,
      value: backgroundPositionX.center,
      selected: data.backgroundPositionX === backgroundPositionX.center,
      name: "backgroundPositionX",
    },
    {
      title: "Right",
      onClick: handleClick,
      value: backgroundPositionX.right,
      selected: data.backgroundPositionX === backgroundPositionX.right,
      name: "backgroundPositionX",
    },
  ];
  const buttons2 = [
    {
      title: "Top",
      onClick: handleClick,
      value: backgroundPositionY.top,
      selected: data.backgroundPositionY === backgroundPositionY.top,
      name: "backgroundPositionY",
    },
    {
      title: "Center",
      onClick: handleClick,
      value: backgroundPositionY.center,
      selected: data.backgroundPositionY === backgroundPositionY.center,
      name: "backgroundPositionY",
    },
    {
      title: "Bottom",
      onClick: handleClick,
      value: backgroundPositionY.bottom,
      selected: data.backgroundPositionY === backgroundPositionY.bottom,
      name: "backgroundPositionY",
    },
  ];
  const buttons3 = [
    {
      title: "Cover",
      onClick: handleClick,
      value: backgroundSize.cover,
      selected: data.backgroundSize === backgroundSize.cover,
      name: "backgroundSize",
    },
    {
      title: "Auto",
      onClick: handleClick,
      value: backgroundSize.auto,
      selected: data.backgroundSize === backgroundSize.auto,
      name: "backgroundSize",
    },
    {
      title: "Contain",
      onClick: handleClick,
      value: backgroundSize.contain,
      selected: data.backgroundSize === backgroundSize.contain,
      name: "backgroundSize",
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
