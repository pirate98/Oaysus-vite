import classNames from "classnames";

interface Props {
  size?: number;
  weight?: number;
  height?: number;
  color?: string;
  className?: string;
  children?: React.ReactNode;
  mb?: number;
}

const defaultProps = { size: 16 };

export function H4(props: Props) {
  props = { ...defaultProps, ...props };

  const typeClass = classNames(
    {
      [`font_weight_${props.weight}`]: props.weight,
      [`font_size_${props.size}`]: props.size,
      [`line_height_${props.height}`]: props.height,
      [`text_${props.color}`]: props.color,
      [`margin_bottom_${props.mb}`]: props.mb,
    },
    props.className
  );

  return <p className={typeClass}>{props.children}</p>;
}
