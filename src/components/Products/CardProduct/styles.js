import styled from 'styled-components';

export const Card = styled.div `
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0.375em 1.6rem 0 rgba(0,0,0,.1);
  padding: 60px 5px;
  margin: 1.5rem;
  text-align: center;
  border-radius: 10px;
  transition: 0.3s ease-in;
  
  &:hover {
    transform: scale(1.03);
  }
  
  h3 {
      color: #333333;
      font-size: 1.6rem;
      text-align: center;
      margin: 20px 0;
  }
  p {
      color: #333333;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      padding: 10px 20px;
      margin: 0 20px 30px;
  }
  img {
    height: 80px;    
  }
`;

export const BtnCard = styled.a `
  background-color: #3dd969;
  color: #fff;
  width: 70%;
  margin: 0 auto;
  padding: 18px 25px;
  border-radius: 5rem;
  text-align: center;
  box-shadow: 0px 1px 3px -1px rgba(0,0,0,0.8);
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    box-shadow: -2px 1px 6px 2px rgba(0,0,0,0.27);
  }   
`;
/*
export const BtnCardDisabled = styled(BtnCard) `
  opacity: 0.6;
  cursor: auto;
  &:hover {
    box-shadow: none;
  }
`;
*/

