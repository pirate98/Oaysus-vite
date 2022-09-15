export function Content2({
  primary = "#F2F2F2",
  secondary = "#BDBDBD",
  primaryHover = "white",
  secondaryHover = "#008060",
  hover = false,
}) {
  return (
    <svg
      width="94"
      height="28"
      viewBox="0 0 94 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="62.9997"
        width="31"
        height="28"
        rx="1"
        fill={hover ? primaryHover : primary}
      />
      <path
        d="M85.2997 7H72.6997C71.9836 7 71.2969 7.27656 70.7905 7.76884C70.2842 8.26113 69.9997 8.92881 69.9997 9.625V18.375C69.9997 19.0712 70.2842 19.7389 70.7905 20.2312C71.2969 20.7234 71.9836 21 72.6997 21H85.2997C86.0158 21 86.7025 20.7234 87.2089 20.2312C87.7152 19.7389 87.9997 19.0712 87.9997 18.375V9.625C87.9997 8.92881 87.7152 8.26113 87.2089 7.76884C86.7025 7.27656 86.0158 7 85.2997 7ZM72.6997 19.25C72.461 19.25 72.2321 19.1578 72.0633 18.9937C71.8945 18.8296 71.7997 18.6071 71.7997 18.375V16.2575L74.7697 13.3787C74.9379 13.2184 75.1641 13.1286 75.3997 13.1286C75.6353 13.1286 75.8615 13.2184 76.0297 13.3787L82.0687 19.25H72.6997ZM86.1997 18.375C86.1997 18.6071 86.1049 18.8296 85.9361 18.9937C85.7673 19.1578 85.5384 19.25 85.2997 19.25H84.6067L81.1777 15.8988L81.9697 15.1287C82.1379 14.9684 82.3641 14.8786 82.5997 14.8786C82.8353 14.8786 83.0615 14.9684 83.2297 15.1287L86.1997 18.0075V18.375ZM86.1997 15.54L84.5077 13.9038C83.9947 13.4246 83.311 13.157 82.5997 13.157C81.8884 13.157 81.2046 13.4246 80.6917 13.9038L79.8997 14.6738L77.3077 12.1538C76.7947 11.6746 76.111 11.407 75.3997 11.407C74.6884 11.407 74.0046 11.6746 73.4917 12.1538L71.7997 13.79V9.625C71.7997 9.39294 71.8945 9.17038 72.0633 9.00628C72.2321 8.84219 72.461 8.75 72.6997 8.75H85.2997C85.5384 8.75 85.7673 8.84219 85.9361 9.00628C86.1049 9.17038 86.1997 9.39294 86.1997 9.625V15.54Z"
        fill={hover ? secondaryHover : secondary}
      />
      <rect
        x="-0.000305176"
        width="58"
        height="28"
        rx="1"
        fill={hover ? primaryHover : primary}
      />
      <rect
        x="6.99969"
        y="7"
        width="30"
        height="5"
        rx="1"
        fill={hover ? secondaryHover : secondary}
      />
      <rect
        x="6.99969"
        y="16"
        width="22"
        height="5"
        rx="1"
        fill={hover ? secondaryHover : secondary}
      />
    </svg>
  );
}