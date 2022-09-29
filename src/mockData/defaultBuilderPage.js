import * as builderComponents from "../molecules/builderComponents";
import { numerateTheName } from "../molecules/helpers/builder";

const componentsToAddOnInitialLoad = [
  "Incentive1",
  "Banner",
  // "Blank",
  "Product",
  "Content1",
  "Content1",
  "Incentive2",
  "Video",
  "Content2",
  "CallToAction",
];

export default () => {
  const moduleList = [];

  for (const componentName of componentsToAddOnInitialLoad) {
    const numericalComponentName = numerateTheName(moduleList, componentName);

    moduleList.push({
      ...builderComponents[componentName].json,
      name: numericalComponentName,
    });
  }

  console.log("boilerplate");

  return moduleList;
};
