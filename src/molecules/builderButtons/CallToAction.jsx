export function CallToAction({
  primary = "#F2F2F2",
  secondary = "#BDBDBD",
  primaryHover = "#ffffff",
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
        width="94"
        height="28"
        rx="1"
        fill={hover ? primaryHover : primary}
      />
      <rect
        x="7"
        y="11"
        width="58"
        height="5"
        rx="1"
        fill={hover ? secondaryHover : secondary}
      />
      <rect x="69" y="11" width="17" height="5" rx="1" fill={secondaryHover} />
    </svg>
  );
}
