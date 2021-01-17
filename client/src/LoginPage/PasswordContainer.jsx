import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  height: 68px;
`;

const StyledPasswordLabel = styled.label`
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #4b4b7c;
`;

const StyledPasswordInput = styled.input`
  display: flex;
  background: #ffffff;
  border: 2px solid #e1e1ed;
  box-sizing: border-box;
  border-radius: 6px;
  margin: 8px 0px;
`;

// const PasswordError = styled.div`
//   position: static;
//   left: 0%;
//   right: 0%;
//   top: 70.59%;
//   bottom: 0%;
//   font-family: Rounded Mplus 1c;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 14px;
//   line-height: 20px;
//   color: #e3170a;
//   flex: none;
//   order: 1;
//   align-self: stretch;
//   flex-grow: 0;
//   margin: 0px 4px;
// `;

export const PasswordContainer = ({ register, errors }) => {
  return (
    <StyledDiv>
      <StyledPasswordLabel>
        Password:
        <StyledPasswordInput
          name="password"
          placeholder="Password"
          ref={register({
            required: {
              value: true,
              message: "Password is required field",
            },
          })}
        />
      </StyledPasswordLabel>
      {/* <PasswordError>
        {errors.password && <p>{errors.password.message}</p>}
      </PasswordError> */}
    </StyledDiv>
  );
};
