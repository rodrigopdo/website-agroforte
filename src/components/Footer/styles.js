import styled from 'styled-components';

export const FooterSection = styled.footer `
background: #145536;
color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const FooterTop = styled(FooterSection) `
  width: 100%;
  height: 38rem;
  background: #3dd969;
  background: radial-gradient(circle, #178E55 -10%, #145536 200px);
  background-repeat: no-repeat;
  background-position: 0 200px;
  img {
    height: 6rem;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 4rem auto;
    @media (max-width: 580px) {
    display: block;
    font-size: 1.5rem;
    padding: 20px 30px;
  }
`;

export const BtnFooter = styled.a `
  display: block;
  background: #3dd969;
  box-shadow: 0 6px 10px 8px rgb(13 151 255 / 14%);
  color: #fff;
  padding: 2rem 4rem;
  border-radius: 5rem;
  text-align: center;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bold;  
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.04);
  }
  @media (max-width: 580px) {
    display: block;
    font-size: 14px;
    padding: 20px 30px;
  }

`;

export const FooterBottom = styled.div `
  background-color: #333333;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  @media(max-width: 780px) {
    flex-direction: column-reverse;
  }


  div {
    text-align: center;
    padding: 3rem 0 1rem;
  }
  h5 {
    margin: 0rem 0 0;
    font-size: 1.2rem;
    color: #f3f3f3;
  }

  p {
    color: #3dd969;
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
  }
  i {
    color: #f4f4f4;
    font-size: 2.5rem;
    padding: 1rem;
    margin: 0 auto;
  }
 
`;