import styled from "styled-components";
import Cross from "./plus.svg";
import { Link } from "react-router-dom";

const StyleAppTopField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  max-width: 400px;
  height: 56px;
  background: #ffffff;
  margin: 0px 0px;
  box-shadow: 0px 3px 4px rgba(46, 49, 55, 0.05),
    0px 0px 2px rgba(46, 49, 55, 0.15);
`;

const Title = styled.h1`
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
`;
const CrossLogo = styled.img`
  width: 14px;
  height: 14px;
  -ms-transform: rotate(450deg); /* IE 9 */
  transform: rotate(45deg);
`;

export const TopBarWithCross = () => {
  return (
    <>
      <StyleAppTopField>
        <Title>My order</Title>
        <Link to="/">
          <CrossLogo src={Cross} alt="cross logo" />
        </Link>
      </StyleAppTopField>
    </>
  );
};
