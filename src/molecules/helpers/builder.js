export const styleFilter = (elementData) => {
  const allowedFields = [
    "fontFamily",
    "fontSize",
    "fontColor",
    "fontWeight",
    "lineHeight",
    "padding",
    "margin",
  ];

  const styleFields = {};

  for (const data in elementData) {
    if (allowedFields.includes(data)) styleFields[data] = elementData[data];
  }

  return styleFields;
};
