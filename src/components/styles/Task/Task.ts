import styled from "styled-components";

export const StyledTask = styled.div`
  width: 100%;
  max-width: 280px;
  background-color: ${(props) => props.theme.colors.background.primary};
  padding: 23px 16px;
  margin-top: 24px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
  user-select: none;
  transition: all 0.3s;
  cursor: pointer;
  &:hover p {
    color: ${(props) => props.theme.colors.buttons.primary};
  }
  p {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    /* identical to box height */
    /* Black */
    color: ${(props) => props.theme.colors.fonts.primary};
    transition: all 0.3s;
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

export const TaskModalOverlay = styled.div`
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

export const TaskModalInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;
  max-width: 480px;
  background-color: ${(props) => props.theme.colors.background.primary};
  border-radius: 10px;
  h3 {
    color: ${({ theme }) => theme.colors.fonts.primary};
    font-family: Plus Jakarta Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  p {
    color: ${({ theme }) => theme.colors.fonts.secondary};
    margin-top: 24px;
    font-family: Plus Jakarta Sans;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 23px; /* 176.923% */
  }
`;

export const SubTasksInner = styled.div`
  p {
    color: ${({ theme }) => theme.colors.fonts.primary};
    font-family: Plus Jakarta Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const SubTaskCont = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  padding: 13px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  h5 {
    color: ${({ theme }) => theme.colors.fonts.secondary};
    font-family: Plus Jakarta Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: strikethrough;
  }
`;
