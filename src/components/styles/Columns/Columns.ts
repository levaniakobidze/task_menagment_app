import styled from "styled-components";

export const EmptyColumnsCont = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: center;
  p {
    max-width: 343px;
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: ${(props) => props.theme.colors.fonts.secondary};
  }
`;

export const WithColomnsCont = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: scroll;
  padding: 24px 16px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledColumn = styled.div`
  min-width: 240px;
  height: 100vh;
`;
export const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  div {
    width: 15px;
    height: 15px;
    background-color: #49c4e5;
    border-radius: 50%;
  }
  p {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    /* Medium Grey */
    color: #828fa3;
  }
`;

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
`;
