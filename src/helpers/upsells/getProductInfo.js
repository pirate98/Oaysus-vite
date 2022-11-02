export const getProductInfo = (componentList) => {
  let productImageUrl;
  let titleText;

  for (const component of componentList) {
    titleText = component?.title?.text || titleText;

    if (!component.name?.startsWith("Product")) continue;
    productImageUrl = component.backgroundPreview;
  }

  return { productImageUrl, titleText };
};
