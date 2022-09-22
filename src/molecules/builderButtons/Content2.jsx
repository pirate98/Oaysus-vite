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
        width="94"
        height="28"
        rx="1"
        fill={hover ? primaryHover : primary}
      />
      <rect
        x="7"
        y="7"
        width="71"
        height="5"
        rx="1"
        fill={hover ? secondaryHover : secondary}
      />
      <rect x="7" y="16" width="22" height="5" rx="1" fill={secondaryHover} />
    </svg>
  );
}
