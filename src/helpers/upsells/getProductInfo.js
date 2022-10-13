export const getProductInfo = (componentList) => {
  let productImageUrl;
  let titleEditorState;

  for (const component of componentList) {
    titleEditorState = component?.title?.editorState || titleEditorState;

    if (!component.name?.startsWith("Product")) continue;
    productImageUrl = component.backgroundPreview;
  }

  return { productImageUrl, titleEditorState };
};
