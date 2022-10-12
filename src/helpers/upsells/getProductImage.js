export const getProductImageUrl = (componentList) => {
  let url;

  for (const component of componentList) {
    if (!component.name?.startsWith("Product")) continue;
    url = component.backgroundPreview;
  }

  return url;
};
