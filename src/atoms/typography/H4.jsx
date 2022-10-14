import classNames from "classnames";

export function H4({ weight, height, color, className, children, mb }) {
  const typeClass = classNames(
    "h4",
    {
      [`font_weight_${weight}`]: weight,
      [`line_height_${height}`]: height,
      [`text_${color}`]: color,
      [`margin_bottom_${mb}`]: mb,
    },
    className
  );

  return <p className={typeClass}>{children}</p>;
}
