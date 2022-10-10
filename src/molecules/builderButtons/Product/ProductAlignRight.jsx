import classes from "./.module.scss";

export function ProductAlignRight({ hover = false }) {
  return (
    <div className={hover ? classes.containerHover : classes.container}>
      <svg
        width="73"
        height="28"
        viewBox="0 0 73 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="42"
          width="31"
          height="28"
          rx="1"
          className={hover ? classes.fillWhite : classes.fillLightGray}
        />
        <path
          d="M64.3 7H51.7C50.9839 7 50.2972 7.27656 49.7908 7.76884C49.2845 8.26113 49 8.92881 49 9.625V18.375C49 19.0712 49.2845 19.7389 49.7908 20.2312C50.2972 20.7234 50.9839 21 51.7 21H64.3C65.0161 21 65.7028 20.7234 66.2092 20.2312C66.7155 19.7389 67 19.0712 67 18.375V9.625C67 8.92881 66.7155 8.26113 66.2092 7.76884C65.7028 7.27656 65.0161 7 64.3 7ZM51.7 19.25C51.4613 19.25 51.2324 19.1578 51.0636 18.9937C50.8948 18.8296 50.8 18.6071 50.8 18.375V16.2575L53.77 13.3787C53.9382 13.2184 54.1644 13.1286 54.4 13.1286C54.6356 13.1286 54.8618 13.2184 55.03 13.3787L61.069 19.25H51.7ZM65.2 18.375C65.2 18.6071 65.1052 18.8296 64.9364 18.9937C64.7676 19.1578 64.5387 19.25 64.3 19.25H63.607L60.178 15.8988L60.97 15.1287C61.1382 14.9684 61.3644 14.8786 61.6 14.8786C61.8356 14.8786 62.0618 14.9684 62.23 15.1287L65.2 18.0075V18.375ZM65.2 15.54L63.508 13.9038C62.9951 13.4246 62.3113 13.157 61.6 13.157C60.8887 13.157 60.2049 13.4246 59.692 13.9038L58.9 14.6738L56.308 12.1538C55.7951 11.6746 55.1113 11.407 54.4 11.407C53.6887 11.407 53.0049 11.6746 52.492 12.1538L50.8 13.79V9.625C50.8 9.39294 50.8948 9.17038 51.0636 9.00628C51.2324 8.84219 51.4613 8.75 51.7 8.75H64.3C64.5387 8.75 64.7676 8.84219 64.9364 9.00628C65.1052 9.17038 65.2 9.39294 65.2 9.625V15.54Z"
          className={hover ? classes.fillMainColor : classes.fillDarkGray}
        />
        <rect
          y="8"
          width="30"
          height="5"
          rx="1"
          className={hover ? classes.fillWhite : classes.fillDarkGray}
        />
        <rect
          y="15"
          width="24"
          height="5"
          rx="1"
          className={hover ? classes.fillWhite : classes.fillDarkGray}
        />
        <rect
          y="1"
          width="15"
          height="5"
          rx="1"
          className={hover ? classes.fillWhite : classes.fillDarkGray}
        />
        <rect
          y="22"
          width="15"
          height="5"
          rx="1"
          className={hover ? classes.fillLightGreen : classes.fillMainColor}
        />
      </svg>
    </div>
  );
}
