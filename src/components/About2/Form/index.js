import React, { useState } from "react";
import { FormRegister, InputContainer, TermOfUse, BtnForm, Feedback, FeedbackError } from './styles';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

const Form = () => {
  const { register } = useForm();

  const [msg, setMsg] = useState(false);
  const [msgError, setMsgError] = useState(false);

  function showMsg ()  {
    setMsg(true);
  }
  function showMsgError (set)  {
    setMsgError(set);
  }
  
  const sendEmail = e => {
    
    const inputName = e.target.name.value;
    const word = inputName.split(' ');

    e.preventDefault();

    if (word.length > 1) {
      emailjs.sendForm('service_flllq47', 'template_qossuj9', e.target, 'user_4sufeYa4jyr628nKD0A7H')
        .then((result) => {
            console.log(result.text);
            showMsg()
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        // cleanMsgError();
        showMsgError(false)

    } else {
        showMsgError(true)
    }  
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
          required
          autoComplete="off"
          />
        <label>Nome Completo</label>
          <FeedbackError show={msgError}>É necessario adicionar pelo menos um sobrenome.</FeedbackError>
      </InputContainer>
      <InputContainer>
        <input 
          name="email"
          type="email" 
          placeholder="E-mail" 
          ref={register({ required: true, minLength: 8 })}
          required
          autoComplete="off"
        />
        <label>Email</label>
      </InputContainer>
      <TermOfUse>
          <a href="#">Ao enviar você concorda com os Termos de Uso e Privacidade</a>
      </TermOfUse>
      <BtnForm type="submit">Enviar</BtnForm>

      <Feedback show={msg}>Dados recebidos! Obrigado pelo envio.</Feedback>
      
    </FormRegister>
  );
};

export default Form;

