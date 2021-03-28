import styled from 'styled-components'

export const MainSection = styled.div `
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), 
  rgba(0, 0, 0, 0.1)), url(/bg-main4.svg);
  background-position: 0 35px;
  background-repeat: no-repeat;
  background-size: 100vw;
  background-attachment: fixed;
  height: 75rem;
`;

export const MainContainer = styled.div `
  display: flex;
  flex-direction: start;
`;

export const Img$ = styled.div `
  position: absolute;
  top: 18.3rem;
  left: -12.5rem;

  img {
    height: 8.1rem;
  }
`;

export const MainText = styled.div `
  max-width: 85rem;
  margin: 0 0 0 17rem;
  padding-top: 16rem;

  h1 {
    /*@include fontSizeBreakpoint (25px, 30px, 40px, 45px, 50px);*/
    color: #fff;
    font-weight: 600;
    font-size: 4rem;
    text-align: start;

  }
  h2 {
    /*@include fontSizeBreakpoint (25px, 30px, 33px, 36px, 40px);*/
    color: #fff;
    font-size: 3.5rem;
    font-weight: 500;
    text-align: start;
  }
  h4 {
    /*@include fontSizeBreakpoint (14px, 15px, 16px, 16px, 18px);*/
    max-width: 300px;
    padding: 20px 0 20px;
    font-size: 1.6rem;
    color: #fff;
    font-weight: 400;
    line-height: 2.2rem;
  }

  h4:after {
    content: '|';
    margin-left: 1px;
    opacity: 1;
    color: #fff;
    animation: piscar .9s infinite;
}
@keyframes piscar {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

p {
  font-size: 1.4rem;
  text-align: start;
  font-weight: 300;
  color: #fff;
}     
`;

export const Btn1 = styled.button `
  margin: 2rem auto 0;
  background: #3dd969;
  color: #fff;
  padding: 1.8rem 3.0rem;
  border-radius: 5rem;
  text-align: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.04)
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
          right: 31px;
      }
      to {
          right: 29px;
      }
  }
`;


