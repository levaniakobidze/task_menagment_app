import styled from "styled-components";

export const AddBoardModalOverlay = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
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

export const AddBoardModalInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;
  max-width: 480px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 10px;
`;
