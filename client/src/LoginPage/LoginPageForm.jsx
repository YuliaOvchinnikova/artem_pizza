import styled from "styled-components";
import { useForm } from "react-hook-form";
import { EmailContainer } from "./EmailContainer";
import { PasswordContainer } from "./PasswordContainer";
import { SubmitButton } from "./SubmitButton";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
  align-self: stretch;
  margin: 0px 10px;
`;

export const LoginPageForm = ({
  onChange,
  register,
  activated,
  errors,
  onSubmit,
}) => {
  const { handleSubmit } = useForm();
  const onError = (errors, e) => console.log(errors, e);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit, onError)} onChange={onChange}>
      <EmailContainer errors={errors} register={register} />
      <PasswordContainer errors={errors} register={register} />
      <SubmitButton activated={activated} />
    </StyledForm>
  );
};
