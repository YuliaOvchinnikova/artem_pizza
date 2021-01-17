import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  background: ${(props) => (props.activated ? "#00A896" : "#f9f9fb")};
  border-radius: 16px;
  border: none;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;

const StyledButtonText = styled.p`
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  color: ${(props) => (props.activated ? "#FFFFFF" : "#8181b1")};
  opacity: ${(props) => (props.activated ? "1" : "0.5")};
  flex: none;
  margin: 0px 0px;
`;

export const SubmitButton = ({ activated }) => {
  return (
    <StyledButton disabled={!activated} activated={activated}>
      <StyledButtonText activated={activated}>Submit</StyledButtonText>
    </StyledButton>
  );
};
