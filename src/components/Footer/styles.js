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
    font-size: 1.6rem;
    font-weight: 600;
    margin: 4rem auto;
  }
`;

export const BtnFooter = styled.button `
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
    width: 80%;
    font-size: 14px;
    padding: 20px 30px;
  }

`;

export const FooterCenter = styled.div `
  background-color: #1DA042;
  border-top: 1px solid #3dd969;
  width: 100%;
  color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    font-size: 1.6rem;
    margin: 5rem auto 0;
    color: #fff;
  }
  
  i {
    font-size: 3rem;
    margin: 3rem 3rem 5rem;
    color: #fff;
  }

`;

export const FooterBottom = styled.div `
  background-color: rgba(199, 255, 177, 0.12);
 
  p {
    font-size: 1.4rem;
    padding: 1rem 0;
    color: #333333;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
  }
`;