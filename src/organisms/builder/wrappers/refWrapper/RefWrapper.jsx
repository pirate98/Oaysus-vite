import { forwardRef } from "react";

export const RefWrapper = forwardRef((props, ref) => {
  const mutableProps = { ...props };
  delete mutableProps.children;

  return (
    <div {...mutableProps} ref={ref}>
      {props.children}
    </div>
  );
});
