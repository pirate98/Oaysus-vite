export function Incentive2({
  primary = "#008060",
  secondary = "white",
  hover = false,
}) {
  return (
    <svg
      width="96"
      height="28"
      viewBox="0 0 96 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.75"
        width="94.5"
        height="28"
        rx="1"
        fill={hover ? secondary : primary}
      />
      <rect
        x="11"
        y="11"
        width="47"
        height="5"
        rx="1"
        fill={hover ? primary : secondary}
      />
      <rect
        x="65"
        y="11"
        width="19"
        height="5"
        rx="1"
        fill={hover ? primary : secondary}
      />
    </svg>
  );
}
