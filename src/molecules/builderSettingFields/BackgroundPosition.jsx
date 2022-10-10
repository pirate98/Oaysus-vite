import { useDispatch } from "react-redux";
import { updatePageComponents } from "../../pages/builder/builderSlice";
import { ButtonGroupTemplate } from "./templates/ButtonGroupTemplate";

export function BackgroundPosition({ data = {}, module }) {
  const dispatch = useDispatch();
  // console.log({ data });
  const handleClick = ({ target }) => {
    const { name, value } = target;

    dispatch(updatePageComponents({ module, key: name, value }));
  };

  const styleOptions = {
    backgroundPositionX: {
      left: "left",
      center: "center",
      right: "right",
    },
    backgroundPositionY: {
      top: "top",
      center: "center",
      bottom: "bottom",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
  };

  const styleNames = Object.keys(styleOptions);

  const buttons = [
    {
      title: "Left",
      onClick: handleClick,
      value: styleOptions[styleNames[0]].left,
      selected: data[styleNames[0]] === styleOptions[styleNames[0]].left,
      name: styleNames[0],
    },
    {
      title: "Center",
      value: styleOptions[styleNames[0]].center,
      selected: data[styleNames[0]] === styleOptions[styleNames[0]].center,
      onClick: handleClick,
      name: styleNames[0],
    },
    {
      title: "Right",
      value: styleOptions[styleNames[0]].right,
      selected: data[styleNames[0]] === styleOptions[styleNames[0]].right,
      onClick: handleClick,
      name: styleNames[0],
    },
  ];
  const buttons2 = [
    {
      title: "Top",
      onClick: handleClick,
      value: styleOptions[styleNames[1]].top,
      selected: data[styleNames[1]] === styleOptions[styleNames[1]].top,
      name: styleNames[1],
    },
    {
      title: "Center",
      onClick: handleClick,
      value: styleOptions[styleNames[1]].center,
      selected: data[styleNames[1]] === styleOptions[styleNames[1]].center,
      name: styleNames[1],
    },
    {
      title: "Bottom",
      value: styleOptions[styleNames[1]].bottom,
      selected: data[styleNames[1]] === styleOptions[styleNames[1]].bottom,
      name: styleNames[1],
      onClick: handleClick,
    },
  ];
  const buttons3 = [
    {
      title: "Cover",
      value: styleOptions[styleNames[2]].cover,
      selected: data[styleNames[2]] === styleOptions[styleNames[2]].cover,
      name: styleNames[2],
      onClick: handleClick,
    },
    {
      title: "Auto",
      value: styleOptions[styleNames[2]].auto,
      selected: data[styleNames[2]] === styleOptions[styleNames[2]].auto,
      name: styleNames[2],
      onClick: handleClick,
    },
    {
      title: "Contain",
      value: styleOptions[styleNames[2]].contain,
      selected: data[styleNames[2]] === styleOptions[styleNames[2]].contain,
      name: styleNames[2],
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
