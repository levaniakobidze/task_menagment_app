import styled from "styled-components";

interface ButtonProps {
  size?: "s" | "l";
  type?: "primary" | "secondary" | "destructive";
  width?: string;
  height?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  border-radius: 24px;
  background-color: ${(props: any) =>
    props.type === "primary"
      ? props.theme.colors.buttons.primary
      : props.type === "secondary"
      ? props.theme.colors.buttons.secondary
      : props.type === "destructive" && props.theme.colors.buttons.destructive};
  height: ${(props) => props.height};
  width: 100%;
  max-width: ${(props) => props.width};
  color: ${(props: any) =>
    props.type === "secondary" ? props.theme.colors.buttons.primary : "#fff"};
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: all 0.3s;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  /* identical to box height */
  font-size: ${(props: any) => (props.size === "s" ? "0.8125em" : "0.9375em")};
  text-align: center;

  &:hover {
    background-color: ${(props: any) =>
      props.type === "primary"
        ? props.theme.colors.buttons.primary_hover
        : props.type === "secondary"
        ? props.theme.colors.buttons.secondary_hover
        : props.type === "destructive" &&
          props.theme.colors.buttons.destructive_hover};
  }
`;
