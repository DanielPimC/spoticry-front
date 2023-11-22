import {
  FormContainer,
  LoginTitle,
  LogoWithText,
  StyledForm,
  StyledInput,
  StyledButton,
} from "./Styles";
import logoLogin from "../../assets/logoLogin.png";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import SimpleText from "../SimpleText/SimpleText";
import { login } from "../../services/users";
import { Loading } from "../Loading/Loading";
import { useState } from "react";

export const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    setIsLoading(true)
    login(form, navigate);
  };
  
  return (
    <FormContainer>
      <LogoWithText>
        <img src={logoLogin} alt="logo" />
      </LogoWithText>
      {!isLoading ?       
        <StyledForm>
          <LoginTitle>Sinta a música, viva a emoção</LoginTitle>
          <div>
            <SimpleText text="Email:" />
            <StyledInput type="email" name="email" onChange={onChange} required={true} value={form.email} />
          </div>
          <div>
            <SimpleText text="Senha:" />
            <StyledInput type="password" name="password" onChange={onChange} required={true} value={form.password} />
          </div>
          <StyledButton type={"submit"} value={"Entrar"} onClick={onSubmitLogin}/>
        </StyledForm>
      : <Loading/>}
    </FormContainer>
  );
};
