import styled from 'styled-components'

export const MainSection = styled.div `
  ${'' /* background: linear-gradient(to right, rgba(0, 0, 0, 0.6), 
  rgba(0, 0, 0, 0.1)), url(/bg-desktop-tiny.png); */}
  
  background: linear-gradient(to right, rgba(0, 0, 0, 0.3), 
  rgba(0, 0, 0, 0)), url(/bg-desktop.png);
  background-position: 0 35px;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 75rem;
  @media(max-width:600px) {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.3), 
    rgba(0, 0, 0, 0.1)), url(/bg-mobile.png);
    background-size: cover;
    background-repeat: no-repeat;
    height: 65rem;
  }
  @media(max-width: 760px) and (min-width: 601px){ 
    background: linear-gradient(to right, rgba(0, 0, 0, 0.3), 
    rgba(0, 0, 0, 0.1)), url(/bg-tablet.png);
    background-position: 0 35px;
    height: 65rem;
  }
`;

export const MainContainer = styled.div `
  max-width: 1000px;
  margin: 0 auto;
  padding:0 2rem;
  display: flex;
  flex-direction: start;
`;

export const MainText = styled.div `
  padding: 20rem 3rem;

  h1 {
    color: #fff;
    font-size: 4.5rem;
    font-weight: 500;
    text-align: start;
  }
  h2 {
    color: #fff;
    font-size: 4rem;
    font-weight: 500;
    text-align: start;
  }
  h4 {
    max-width: 350px;
    padding: 20px 0 20px;
    margin-bottom: 4rem;
    font-size: 1.8rem;
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

  @media(max-width: 810px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 3rem;
    }
    h4 {
      font-size: 1.6rem;
    }
  } 
  @media (max-width: 587px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.3rem;
    }
    h4 {
      font-size: 1.4rem;
      margin-bottom: 6rem;
    }
  }
  @media (max-width: 587px) {
    margin: 0 auto;
    padding: 28rem 1rem;
  }
`;

export const Btn1 = styled.a `
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
    opacity: 0.7;
  }

  @media (max-width: 580px) {
    display: block;
    width: 100%;
    font-size: 14px;
    margin: 0 auto;
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
    height: 5rem;
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
  @media(max-width: 678px) {
    img {
    height: 3.7rem;
    }
  }
`;


