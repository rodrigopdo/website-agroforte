import { FormRegister, InputContainer, TermOfUse, BtnForm } from './styles';
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

const Form = () => {
  const { register } = useForm();

  const sendEmail = e => {
    e.preventDefault();
    emailjs.sendForm('service_783b0lv', 'template_e5xc06v', e.target, 'user_kPShKqf6UVSu8bGM6Dkt6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <FormRegister onSubmit={sendEmail}>
        <img src="/logo-dark.svg"/>
      <h3>Cadastre-se e receba as nossas novidades!</h3>
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

