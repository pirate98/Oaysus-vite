import { SettingFieldContainer } from "../../atoms";
import classes from "./.module.scss";
import { ProductAlignLeft, ProductAlignRight } from "../builderButtons";
import { useState } from "react";
import { useGetSelectedPageComponent } from "../../hooks";
import { AlignImageTemplate } from "./templates/AlignImageTemplate";

export function ProductImageAlignment() {
  return (
    <AlignImageTemplate
      LeftImage={ProductAlignLeft}
      RightImage={ProductAlignRight}
    />
  );
}
