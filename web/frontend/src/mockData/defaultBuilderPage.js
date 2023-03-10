import * as builderComponents from "@/organisms/builder/builderComponents";
import { numerateTheName } from "@/helpers/builder";

const componentsToAddOnInitialLoad = [
  "Exclusive",
  "Banner",
  // "Blank",
  "Product",
  "Feature",
  "Feature",
  "Lure",
  "Video",
  "Request",
  "Action",
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
