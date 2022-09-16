import { ButtonGroupTemplate } from "./ButtonGroupTemplate";
import { alignCenter, alignLeft, alignRight } from "../../assets/svg";

const buttons = [
  { title: <img src={alignLeft} /> },
  { title: <img src={alignCenter} /> },
  { title: <img src={alignRight} /> },
];

export function Alignment() {
  return <ButtonGroupTemplate title={"Alignment"} buttons={buttons} />;
}
