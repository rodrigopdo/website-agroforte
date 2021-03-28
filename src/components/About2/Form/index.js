import { FormRegister, InputContainer, TermOfUse, BtnForm } from './styles';
import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <FormRegister onSubmit={handleSubmit(onSubmit)}>
        <img src="/logo-dark.svg"/>
      <h3>Cadastre-se e receba as novidades!</h3>
      <InputContainer>
        <input 
          name="name" 
          type="text"
          placeholder="Nome Completo" 
          ref={register({ required: true, minLength: 8 })} 
          autofocus
          />
        <label>Nome Completo</label>
      </InputContainer>
      <InputContainer>
        <input 
          name="email"
          type="email" 
          placeholder="E-mail" 
          ref={register({ required: true, minLength: 8 })} 
        />
        <label>Email</label>
      </InputContainer>
      <TermOfUse>
          <a href="#">Ao enviar você concorda com os Termos de Uso e Privacidade</a>
      </TermOfUse>
      <BtnForm type="submit">Enviar</BtnForm>
    </FormRegister>
  );
};

export default Form;

