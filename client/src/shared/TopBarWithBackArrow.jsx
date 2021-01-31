import styled from "styled-components";
import backButton from "./back_button.svg";
import { Link } from "react-router-dom";

const StyleContainer = styled.div`
  box-shadow: inset 0px 2px 2px rgba(20, 20, 55, 0.1);
  display: flex;
  align-items: center;
  height: 56px;
  background: #ffffff;
`;

const NavBarTitleBackButton = styled.button`
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: none;
`;

const Title = styled.h1`
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
`;

export const TopBarWithBackArrow = ({ title }) => {
  return (
    <>
      <StyleContainer>
        <NavBarTitleBackButton>
          <Link to="/">
            <img src={backButton} alt="back icon" />
          </Link>
        </NavBarTitleBackButton>
        <Title>{title}</Title>
      </StyleContainer>
    </>
  );
};
