import styled from "styled-components";

const StyledDiv = styled.h1`
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
  //   margin: 4px 0px;
`;

export const NavBarTitleText = () => {
  return <StyledDiv>My orders</StyledDiv>;
};
