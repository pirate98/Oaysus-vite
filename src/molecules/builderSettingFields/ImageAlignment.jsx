/**
 * This component updates first child of json,
 * hence module name shouldnt exist on it or on its wrappers.
 */

import { ImageAtLeft, ImageAtRight } from "../builderButtons";
import { AlignImageTemplate } from "./templates/AlignImageTemplate";

export function ImageAlignment() {
  return (
    <AlignImageTemplate LeftImage={ImageAtLeft} RightImage={ImageAtRight} />
  );
}
