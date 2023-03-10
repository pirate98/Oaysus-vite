export function SvgDot({ full = true, variant = "blue" }) {
  let color;

  switch (variant) {
    case "blue":
      color = "#00A0AC";
      break;
    case "green":
      color = "#007F5F";
      break;
    case "gray":
      color = "#6D7175";
      break;
  }

  return full ? (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill={color} />
    </svg>
  ) : (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4ZM2 4H6C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4Z"
        fill={color}
      />
    </svg>
  );
}
