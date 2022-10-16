import {
  forwardRef,
  JSXElementConstructor,
  LegacyRef,
  ReactElement,
  ReactNode,
} from "react";

interface Props {
  children: ReactElement<any, string | JSXElementConstructor<any>> | ReactNode;
}

export const RefWrapper = forwardRef(
  (
    { children, ...props }: Props,
    ref: LegacyRef<HTMLDivElement> | undefined
  ) => {
    return (
      <div {...props} ref={ref}>
        {children}
      </div>
    );
  }
);
