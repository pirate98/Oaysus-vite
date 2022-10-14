import { ProductAlignLeft, ProductAlignRight } from "@/molecules";
import { AlignImageTemplate } from "./templates/AlignImageTemplate";

export function ProductImageAlignment() {
  return (
    <AlignImageTemplate
      LeftImage={ProductAlignLeft}
      RightImage={ProductAlignRight}
    />
  );
}
