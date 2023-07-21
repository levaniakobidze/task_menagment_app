import styled from "styled-components";

export const SideBarStyled = styled.div`
  min-height: 100vh;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-right: 1px solid #818181;
  h3 {
    color: ${({ theme }) => theme.colors.fonts.secondary};
    font-family: Plus Jakarta Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.4px;
    margin-left: 32px;
    padding-top: 15px;
  }
`;

export const SideBarMenu = styled.ul`
  margin-top: 19px;
  h4 {
    width: 90%;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    display: flex;
    align-items: center;
    padding: 16px 32px;
    gap: 16px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.buttons.primary};
    }
    &:hover p {
      color: ${({ theme }) => theme.colors.buttons.secondary};
    }
    &:hover img {
      color: ${({ theme }) => theme.colors.buttons.secondary};
    }

    &:hover svg path {
      fill: white !important;
    }

    p {
      color: ${({ theme }) => theme.colors.buttons.primary};
      font-feature-settings: "clig" off, "liga" off;

      /* Heading (M) */
      font-family: Plus Jakarta Sans;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      transition: 0.3s;
    }
    svg > path {
      transition: 0.3s;
      fill: ${({ theme }) => theme.colors.buttons.primary} !important;
    }
  }
  //////////////////////////////////////////////////
  li {
    width: 90%;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    display: flex;
    align-items: center;
    padding: 16px 32px;
    gap: 16px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.buttons.primary};
    }
    &:hover p {
      color: ${({ theme }) => theme.colors.buttons.secondary};
    }
    &:hover img {
      color: ${({ theme }) => theme.colors.buttons.secondary};
    }

    &:hover svg path {
      fill: white !important;
    }

    p {
      color: ${({ theme }) => theme.colors.fonts.secondary};
      font-feature-settings: "clig" off, "liga" off;

      /* Heading (M) */
      font-family: Plus Jakarta Sans;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      transition: 0.3s;
    }
    svg > path {
      transition: 0.3s;
      fill: ${({ theme }) => theme.colors.fonts.secondary} !important;
    }
  }
`;
