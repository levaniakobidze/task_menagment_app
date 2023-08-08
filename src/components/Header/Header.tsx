import {
  StyledHeader,
  LogoWrapper,
  LeftContainer,
  Launch,
  RightContainer,
} from "../styles/Header/Header.styled";
import Button from "../Button/Button";
import Logo from "../../assets/Logo.svg";
import ArrowDown from "../../assets/arrow_down.svg";
import MobileMenu from "../../assets/mobile_menu.svg";
import { useContext } from "react";
import { TodosContext } from "../../context/todosContext";
const Header = () => {
  const { setShowAddTaskModal, setShowEditBoardModal } =
    useContext(TodosContext);

  return (
    <StyledHeader>
      <LeftContainer>
        <LogoWrapper>
          <img src={Logo} alt="logo" />
        </LogoWrapper>
        <Launch>
          Platform Launch <img src={ArrowDown} alt="arrow" />
        </Launch>
      </LeftContainer>
      <RightContainer>
        <Button
          onClick={() => setShowAddTaskModal(true)}
          disabled={false}
          width={"48px"}
          height={"32px"}
          size={"l"}
          type={"primary"}
        >
          +
        </Button>
        <img
          onClick={() => setShowEditBoardModal(true)}
          src={MobileMenu}
          alt="menu"
        />
      </RightContainer>
    </StyledHeader>
  );
};

export default Header;
