import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  height: 68px;
  width: 296px;
`;

const StyledEmailLabel = styled.label`
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #4b4b7c;
`;

const StyledEmailInput = styled.input`
  display: flex;
  background: #ffffff;
  border: 2px solid #e1e1ed;
  box-sizing: border-box;
  border-radius: 6px;
  margin: 8px 0px;
`;

// const EmailError = styled.div`
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

export const EmailContainer = ({ register, errors }) => {
  console.log(errors);
  return (
    <StyledDiv>
      <StyledEmailLabel>
        Email:
        <StyledEmailInput
          name="loginName"
          placeholder="Login"
          ref={register({
            required: {
              value: true,
              message: "Login is required field",
            },
            pattern: {
              value: /[A-Za-z]+$/i,
              message: "Just latin letters",
            },
          })}
        />
      </StyledEmailLabel>
      {/* <EmailError>
        {errors && errors.loginName && <p>{errors.loginName.message}</p>}
      </EmailError> */}
    </StyledDiv>
  );
};
