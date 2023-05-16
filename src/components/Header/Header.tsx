import React from "react";
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
function Header() {
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
          disabled={false}
          width={"48px"}
          height={"32px"}
          size={"l"}
          type={"primary"}>
          +
        </Button>
        <img src={MobileMenu} alt="menu" />
      </RightContainer>
    </StyledHeader>
  );
}

export default Header;
