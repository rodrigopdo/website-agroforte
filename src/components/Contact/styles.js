import styled from 'styled-components';

export const ContactSection = styled.div `
 background: linear-gradient(360deg, #145536 0.49%, #00704A 99.46%);
  h2 {
    padding: 110px 0 20px;
    text-align: center;
    font-size: 2rem;
    color: #fff;
  }
  h4 {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    color: #3dd969;
  }
`;

export const ContactContainer = styled.div `
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 0 10rem;
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
  }
`;