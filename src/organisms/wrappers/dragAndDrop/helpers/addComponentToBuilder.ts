import { CONSTANT } from "@/data/constants";
import { numerateTheName } from "../../../../helpers";
import { getIndex } from "./getIndexes";
import * as builderComponents from "../../../builder/builderComponents";
const _builderComponents: Record<any, any> = builderComponents;

const { DND_PLACEHOLDER_ID } = CONSTANT;

export const addComponentToBuilder = (
  content: Record<any, any>[],
  componentId: string
) => {
  const placeHolderIndex = getIndex(content, DND_PLACEHOLDER_ID);

  if (!placeHolderIndex) return;

  let newContent = [...content];
  // console.log({ content, componentId });
  const numerizedName = numerateTheName(newContent, componentId);
  console.log(numerizedName);

  newContent.splice(placeHolderIndex, 1, {
    ..._builderComponents[componentId].json,
    id: numerizedName,
  });
  console.log(newContent);
  return newContent;
};
