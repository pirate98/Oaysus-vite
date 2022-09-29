import constants from "../../data/constants";
import classes from "./.module.scss";

export function ImageAtRight({
  primary = constants.COLOR_GRAY,
  secondary = constants.COLOR_DARK_GRAY,
  primaryHover = "white",
  secondaryHover = constants.COLOR_MAIN,
  hover = false,
}) {
  return (
    <div
      className={classes.imageAlignBox}
      style={{ background: hover ? secondaryHover : "unset" }}
    >
      <svg
        width="94"
        height="28"
        viewBox="0 0 94 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="63"
          width="31"
          height="28"
          rx="1"
          fill={hover ? primaryHover : primary}
        />
        <path
          d="M85.3 7H72.7C71.9839 7 71.2972 7.27656 70.7908 7.76884C70.2845 8.26113 70 8.92881 70 9.625V18.375C70 19.0712 70.2845 19.7389 70.7908 20.2312C71.2972 20.7234 71.9839 21 72.7 21H85.3C86.0161 21 86.7028 20.7234 87.2092 20.2312C87.7155 19.7389 88 19.0712 88 18.375V9.625C88 8.92881 87.7155 8.26113 87.2092 7.76884C86.7028 7.27656 86.0161 7 85.3 7ZM72.7 19.25C72.4613 19.25 72.2324 19.1578 72.0636 18.9937C71.8948 18.8296 71.8 18.6071 71.8 18.375V16.2575L74.77 13.3787C74.9382 13.2184 75.1644 13.1286 75.4 13.1286C75.6356 13.1286 75.8618 13.2184 76.03 13.3787L82.069 19.25H72.7ZM86.2 18.375C86.2 18.6071 86.1052 18.8296 85.9364 18.9937C85.7676 19.1578 85.5387 19.25 85.3 19.25H84.607L81.178 15.8988L81.97 15.1287C82.1382 14.9684 82.3644 14.8786 82.6 14.8786C82.8356 14.8786 83.0618 14.9684 83.23 15.1287L86.2 18.0075V18.375ZM86.2 15.54L84.508 13.9038C83.9951 13.4246 83.3113 13.157 82.6 13.157C81.8887 13.157 81.2049 13.4246 80.692 13.9038L79.9 14.6738L77.308 12.1538C76.7951 11.6746 76.1113 11.407 75.4 11.407C74.6887 11.407 74.0049 11.6746 73.492 12.1538L71.8 13.79V9.625C71.8 9.39294 71.8948 9.17038 72.0636 9.00628C72.2324 8.84219 72.4613 8.75 72.7 8.75H85.3C85.5387 8.75 85.7676 8.84219 85.9364 9.00628C86.1052 9.17038 86.2 9.39294 86.2 9.625V15.54Z"
          fill={hover ? secondaryHover : secondary}
        />
        <rect
          width="58"
          height="28"
          rx="1"
          fill={hover ? primaryHover : primary}
        />
        <rect
          x="7"
          y="7"
          width="30"
          height="5"
          rx="1"
          fill={hover ? secondaryHover : secondary}
        />
        <rect
          x="7"
          y="16"
          width="22"
          height="5"
          rx="1"
          fill={hover ? secondaryHover : secondary}
        />
      </svg>
    </div>
  );
}
