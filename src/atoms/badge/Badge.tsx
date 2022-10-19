import styles from "./Badge.module.scss";
import { SvgDot } from "./SvgDot";

type Variant = "blue" | "green" | "gray";

interface Props {
  children?: string;
  dot?: boolean;
  variant: Variant;
}

export function Badge({
  children,
  dot = true,
  variant = "blue",
  ...props
}: Props) {
  let color;

  switch (variant) {
    case "blue":
      color = "#a4e8f2";
      break;
    case "green":
      color = "#AEE9D1";
      break;
    case "gray":
      color = "#E4E5E7";
      break;
  }

  return (
    <div className={styles.div} style={{ backgroundColor: color }}>
      {dot ? <SvgDot variant={variant} {...props} /> : ""}
      <span className={styles.text}>{children}</span>
    </div>
  );
}
