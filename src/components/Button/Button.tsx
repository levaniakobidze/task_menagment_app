import React from "react";
import { StyledButton } from "../styles/Button/Button.styled";

function Button(props: any) {
  return (
    <StyledButton
      width={props.width}
      height={props.height}
      size={props.size}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
}

export default Button;
