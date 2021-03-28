import styled from 'styled-components';

export const FormRegister = styled.form `
  background-color: #F0F9E1;
  height: 470px;
  margin: -270px auto 0;
  padding: 10px;
  border-radius: 1rem;
  min-width: 280px;
  max-width: 500px;
  h3 {
    text-align: center;
    margin: 30px 25px 0;
    color: #3dd969;
    font-size: 2rem;
    font-weight: 600;
  }
  img {
    display: block;
    margin: 2rem auto;
    height: 6rem;
  }
`;

export const TermOfUse = styled.div `
  text-align: start;
  font-size: 1.2rem;
  margin: 2rem 4rem;
  a {
    color: #1DA042;
  }
`;

export const InputContainer = styled.div `
  position: relative;
  padding-top: 13px;
  margin-top: 25px;
  
  input {
    border-bottom: 1px solid #bfb5b5;
    height: 3rem;
    width: 85%;
    margin: 5px auto 5px;
    padding-left: 18px;
    display: block;
    color: #333333;
    min-width: 180px;
    font-size: 16px;
    transition: all .3s ease-out; 
    &:focus{
    border-bottom: 2px solid #1DA042;
    font-size: 18px;
    }
    &::placeholder{
    color:transparent;
    }
    &:invalid{
      border-bottom: 1px solid #3dd969;
    }
    &:focus + label,
    &:not(:placeholder-shown) + label{
      font-size: 1rem;
      margin-top: -8px;
      color: #1DA042;
    }
  }
  label{
      pointer-events: none;
      position: absolute;
      top: 7px;
      left: 25px;
      font-size: 1.2rem;
      color: #333333;
      font-weight: 400;
      margin: 15px 0 0 20px;
      transition: all .3s ease-out;
  }

`;

export const BtnForm = styled.button `
  background: #3dd969;
  display: block;
  box-shadow: 0px 1px 3px -1px rgba(0,0,0,0.58);
  border-radius: 5rem;
  padding: 1.2rem 3rem;
  color: #fff;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 1rem auto;
  
  &:hover {
      box-shadow: -2px 1px 8px 2px rgba(0,0,0,0.27);
  }
`;

