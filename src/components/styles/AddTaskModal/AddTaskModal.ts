import styled from "styled-components";

export const AddTaskModalOevrlay = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  width: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const AddTaskModalInner = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;
  max-width: 480px;
  border-radius: 10px;
  h2 {
    color: ${({ theme }) => theme.colors.fonts.primary};
    font-feature-settings: "clig" off, "liga" off;
    /* Heading (L) */
    font-family: Plus Jakarta Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
