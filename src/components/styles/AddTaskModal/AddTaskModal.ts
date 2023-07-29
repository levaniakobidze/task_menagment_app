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

export const AddTaskInputs = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  label {
    color: #fff;
    font-family: Plus Jakarta Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 8px;
  }
  h2 {
    color: ${({ theme }) => theme.colors.fonts.primary};
    font-family: Plus Jakarta Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 24px;
  }
  input {
    background-color: transparent;
    border: 1px solid rgba(130, 143, 163, 0.25);
    background: var(--dark-grey, #2b2c37);
    padding: 10px;
    outline: none;
    border-radius: 4px;
    color: white;
    flex: 1;
  }
  textarea {
    background-color: transparent;
    border: 1px solid rgba(130, 143, 163, 0.25);
    background: var(--dark-grey, #2b2c37);
    padding: 10px;
    outline: none;
    border-radius: 4px;
    color: white;
    padding-bottom: 112px;
    flex: 1;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
