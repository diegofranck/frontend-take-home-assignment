import React from "react";
import * as Styled from "./styled";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <Styled.IconButton ref={ref} {...props}>
      {props.children}
    </Styled.IconButton>
  )
);

const LabelButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <Styled.LabelButton ref={ref} {...props}>
      {props.children}
    </Styled.LabelButton>
  )
);

export { IconButton, LabelButton };
