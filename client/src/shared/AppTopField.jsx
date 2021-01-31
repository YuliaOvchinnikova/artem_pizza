import styled from "styled-components";
import Logo from "./Brand.svg";
import Account from "./account.svg";
import { Link } from "react-router-dom";

const StyleAppTopField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 360px;
  height: 56px;
  background: #ffffff;
  margin: 0px 0px;
`;

export const AppTopField = () => {
  return (
    <>
      <StyleAppTopField>
        <img src={Logo} alt="pizza logo" />
        <Link to="/login">
          <img src={Account} alt="account logo" />
        </Link>
      </StyleAppTopField>
    </>
  );
};
