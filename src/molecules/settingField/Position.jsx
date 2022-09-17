import { ButtonGroupTemplate } from "./ButtonGroupTemplate";

const buttons = [
  { title: "Auto" },
  { title: "Relative" },
  { title: "Absolute" },
];

export function Position() {
  return <ButtonGroupTemplate title={"Position"} buttons={buttons} />;
}
