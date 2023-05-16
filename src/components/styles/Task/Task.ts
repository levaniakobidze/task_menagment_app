import styled from "styled-components";

export const StyledTask = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.background.primary};
  padding: 23px 16px;
  margin-top: 24px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
  user-select: none;
  p {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    /* identical to box height */
    /* Black */
    color: ${(props) => props.theme.colors.fonts.primary};
  }
  span {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    /* Medium Grey */
    color: ${(props) => props.theme.colors.fonts.secondary};
  }
`;
