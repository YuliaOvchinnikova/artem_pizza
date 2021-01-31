import styled from "styled-components";

const StyledOrderForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;

  position: static;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
`;

export const OrderSummaryContainer = () => {
  return <StyledOrderForm />;
};
