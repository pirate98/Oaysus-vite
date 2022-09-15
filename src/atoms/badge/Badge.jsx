import styles from "./Badge.module.scss";
import { SvgDot } from "./SvgDot";

export function Badge({ children = "badge", dot = true, variant = "blue" }) {
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
      {dot ? <SvgDot variant={variant} /> : ""}
      <span className={styles.text}>{children}</span>
    </div>
  );
}
