import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 64px;
  background-color: ${(props) => props.theme.colors.background.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  img {
    width: 100%;
  }
`;

export const Launch = styled.p`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: ${(props) => props.theme.colors.fonts.primary};
  margin-left: 16px;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-left: 16px;
  }
`;
