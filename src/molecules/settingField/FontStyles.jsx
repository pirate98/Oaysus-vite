import { ButtonGroupTemplate } from "./ButtonGroupTemplate";
import {
  fontStyleBold,
  fontStyleItalic,
  fontStyleUnderline,
} from "../../assets/svg";

const buttons = [
  { title: <img src={fontStyleBold} /> },
  { title: <img src={fontStyleItalic} /> },
  { title: <img src={fontStyleUnderline} /> },
];

export function FontStyles() {
  return <ButtonGroupTemplate title={"Styling"} buttons={buttons} />;
}
