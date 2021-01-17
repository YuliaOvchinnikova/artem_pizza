import styled from "styled-components";

import { NavBarTitleText } from "./NavBarTitleText";
import { NavBarTitleBackButton } from "./NavBarTitleBackButton";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  background: #ffffff;
`;

export const NavBarTitle = () => {
  return (
    <StyledDiv>
      <NavBarTitleBackButton />
      <NavBarTitleText />
    </StyledDiv>
  );
};
