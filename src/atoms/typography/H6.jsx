import classNames from "classnames";

export function H6({ weight, height, className, color, children, mb }) {
  const typeClass = classNames(
    "h6",
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
