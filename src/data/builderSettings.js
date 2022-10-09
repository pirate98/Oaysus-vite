const builderSettings = {
  fieldNames: {
    background: "background",
    image: "image",
    layout: "layout",
    title: "title",
    subTitle: "subTitle",
    description: "description",
    countdown: "countdown",
    disclaimer: "paymentDisclaimer",
    buyButton: "buyButton",
    declineButton: "declineButton",
  },
  imageDisplayTypes: {
    single: "single",
    custom: "custom",
    carousel: "carousel",
  },
  templates: [
    [
      "Exclusive",
      "Banner",
      "Product",
      "Feature",
      "Feature-switchAlignment",
      "Lure",
      "Video",
      "Request",
      "Action",
    ],
    ["Exclusive", "Product", "Request", "Lure", "Action"],
    ["Banner", "Exclusive", "Product", "Lure", "Video", "Request", "Action"],
    ["Exclusive", "Product", "Feature", "Request", "Video", "Action"],
    [
      "Action",
      "Product",
      "Banner",
      "Feature-switchAlignment",
      "Lure",
      "Request",
      "Exclusive",
    ],
    [
      "Action",
      "Product",
      "Request",
      "Lure",
      "Feature-switchAlignment",
      "Exclusive",
    ],
  ],
};

export { builderSettings };
