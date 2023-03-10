import classes from "./ProductImageAlign.module.scss";

export function ProductAlignLeft({ hover = false }) {
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
          width="31"
          height="28"
          rx="1"
          className={hover ? classes.fillWhite : classes.fillLightGray}
        />
        <path
          d="M22.3 7H9.7C8.98392 7 8.29716 7.27656 7.79081 7.76884C7.28446 8.26113 7 8.92881 7 9.625V18.375C7 19.0712 7.28446 19.7389 7.79081 20.2312C8.29716 20.7234 8.98392 21 9.7 21H22.3C23.0161 21 23.7028 20.7234 24.2092 20.2312C24.7155 19.7389 25 19.0712 25 18.375V9.625C25 8.92881 24.7155 8.26113 24.2092 7.76884C23.7028 7.27656 23.0161 7 22.3 7ZM9.7 19.25C9.46131 19.25 9.23239 19.1578 9.0636 18.9937C8.89482 18.8296 8.8 18.6071 8.8 18.375V16.2575L11.77 13.3787C11.9382 13.2184 12.1644 13.1286 12.4 13.1286C12.6356 13.1286 12.8618 13.2184 13.03 13.3787L19.069 19.25H9.7ZM23.2 18.375C23.2 18.6071 23.1052 18.8296 22.9364 18.9937C22.7676 19.1578 22.5387 19.25 22.3 19.25H21.607L18.178 15.8988L18.97 15.1287C19.1382 14.9684 19.3644 14.8786 19.6 14.8786C19.8356 14.8786 20.0618 14.9684 20.23 15.1287L23.2 18.0075V18.375ZM23.2 15.54L21.508 13.9038C20.9951 13.4246 20.3113 13.157 19.6 13.157C18.8887 13.157 18.2049 13.4246 17.692 13.9038L16.9 14.6738L14.308 12.1538C13.7951 11.6746 13.1113 11.407 12.4 11.407C11.6887 11.407 11.0049 11.6746 10.492 12.1538L8.8 13.79V9.625C8.8 9.39294 8.89482 9.17038 9.0636 9.00628C9.23239 8.84219 9.46131 8.75 9.7 8.75H22.3C22.5387 8.75 22.7676 8.84219 22.9364 9.00628C23.1052 9.17038 23.2 9.39294 23.2 9.625V15.54Z"
          className={hover ? classes.fillMainColor : classes.fillDarkGray}
        />
        <rect
          x="43"
          y="8"
          width="30"
          height="5"
          rx="1"
          className={hover ? classes.fillWhite : classes.fillDarkGray}
        />
        <rect
          x="43"
          y="15"
          width="24"
          height="5"
          rx="1"
          className={hover ? classes.fillWhite : classes.fillDarkGray}
        />
        <rect
          x="43"
          y="1"
          width="15"
          height="5"
          rx="1"
          className={hover ? classes.fillWhite : classes.fillDarkGray}
        />
        <rect
          x="43"
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
