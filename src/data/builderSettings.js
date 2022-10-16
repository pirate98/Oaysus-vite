const builderSettings = {
  fieldNames: {
    background: "background",
    border: "border",
    image: "image",
    layout: "layout",
    title: "title",
    subTitle: "subTitle",
    description: "description",
    countdown: "countdown",
    disclaimer: "paymentDisclaimer",
    buyButton: "buyButton",
    declineButton: "declineButton",
    reviews: "reviews",
    paymentDisclaimer: "paymentDisclaimer",
  },
  imageDisplayTypes: {
    single: "single",
    custom: "custom",
    carousel: "carousel",
  },
  sideMenuOrder: [
    "Exclusive",
    "Lure",
    "Banner",
    "Feature",
    "Request",
    "Product",
    "Video",
    "Action",
  ],
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
