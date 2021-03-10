import styled from 'styled-components'

export const MainSection = styled.div `
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), url(/cow-farm.jpg);
  background-repeat: no-repeat;
  height: 870px;
  background-size: cover;
  background-attachment: fixed;
}
`;  

export const MainContent = styled.div `
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 160px;

  h1 {
    /*@include fontSizeBreakpoint (25px, 30px, 40px, 45px, 50px);*/
    font-size: 3rem;
    text-align: start;
    font-weight: 520;
    color: #fff;
  }
  h2 {
    /*@include fontSizeBreakpoint (25px, 30px, 33px, 36px, 40px);*/
    font-size: 2.5rem;
    font-weight: 500;
    text-align: start;
    color: #fff;
  }
  h4 {
    /*@include fontSizeBreakpoint (14px, 15px, 16px, 16px, 18px);*/
    text-align: start;
    color: #fff;
    max-width: 500px;
    font-weight: 500;
    padding: 30px 0 30px;
    line-height: 1.5rem;
  }
`;

export const Btn1 = styled.button `
  background: #1DA042;
  color: #fff;
  padding: 20px 50px;
  border-radius: 50px;
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.3s ease;

  &:hover {
    background-color: #145536;
  }

  @media (max-width: 580px) {
    display: block;
    width: 100%;
    font-size: 14px;
    padding: 20px 30px;
  }

`;

export const IconWhats = styled.div `
  
  position:fixed; 
  right: 25px; 
  bottom: 25px;
  @include iconWhatsSize (35px, 40px, 45px, 50px, 65px);
  z-index: 1; 

  img {
    height: 50px;
    cursor: pointer;
  }
  
  &:hover {
      animation: whats .1s ;
  } 
 
  @keyframes whats {
      from {
          right: 30px;
      }
      to {
          right: 32px;
      }
      to {
          right: 28px;
      }
  }
`;


