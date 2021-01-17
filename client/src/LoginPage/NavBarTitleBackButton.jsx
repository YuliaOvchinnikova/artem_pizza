import styled from "styled-components";
import backButton from "./assets/back_button.svg";

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: none;
  //   margin: 4px 0px;
`;

export const NavBarTitleBackButton = () => {
  return (
    <StyledButton>
      <img src={backButton} alt="back icon" />{" "}
    </StyledButton>
  );
};
