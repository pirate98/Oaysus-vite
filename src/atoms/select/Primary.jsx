import { styled } from "@mui/system";

import { inputWidth } from "@/assets/css/_variables.module.scss";
import { SelectBase } from "./SelectBase";

export const Primary = styled(SelectBase)({
  "&": { width: inputWidth, height: "36px" },
});
