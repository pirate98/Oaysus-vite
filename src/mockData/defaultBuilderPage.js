import * as builderComponents from "../molecules/builderComponents";
import { numerateTheName } from "../molecules/helpers/builder";

const componentsToAddOnInitialLoad = [
  "Incentive1",
  "Banner",
  "Product",
  "Content1",
  "Content1",
  "Incentive2",
  "Video",
  "Content2",
  "CallToAction",
];

const boilerPlatePage = [];

for (const componentName of componentsToAddOnInitialLoad) {
  const numericalComponentName = numerateTheName(
    boilerPlatePage,
    componentName
  );

  boilerPlatePage.push({
    ...builderComponents[componentName].json,
    name: numericalComponentName,
  });
}

export { boilerPlatePage };
