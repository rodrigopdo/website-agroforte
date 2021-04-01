import styled from 'styled-components';

export const ContactSection = styled.div `
 background: linear-gradient(360deg, #145536 0.49%, #00704A 99.46%);
  h2 {
    padding: 10rem 1.5rem 20px;
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
    color: #fff;
    @media(max-width: 680px) {
      font-size: 2.2rem;
    }
  }
  h4 {
    padding:0 1.5rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    color: #3dd969;
    @media(max-width: 680px) {
      font-size: 1.4rem;
    }
  }
`;

export const ContactContainer = styled.div `
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 1rem 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  grid-gap: 1rem;
  grid-template-areas: 
    "card1 card2 card3";

  div:nth-child(1) {
    grid-area: card1;
  }
  div:nth-child(2) {
    grid-area: card2;
  }
  div:nth-child(3) {
    grid-area: card3;
    @media(max-width: 680px) {
      padding-bottom: 10rem;
    }
  }
  @media(max-width: 680px) {
    margin: 4rem auto 0;
    padding: 0rem 1rem 0;
    grid-template-columns: 1fr;
    grid-gap: 6rem;
    grid-template-areas:
    "card1"
    "card2"
    "card3";    
  }
`;