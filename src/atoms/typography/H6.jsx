import classNames from "classnames";

export function H6({
  size = 14,
  weight,
  height,
  color,
  className,
  children,
  mb,
}) {
  const typeClass = classNames(
    {
      [`font_weight_${weight}`]: weight,
      [`font_size_${size}`]: size,
      [`line_height_${height}`]: height,
      [`text_${color}`]: color,
      [`margin_bottom_${mb}`]: mb,
    },
    className
  );

  return <p className={typeClass}>{children}</p>;
}
