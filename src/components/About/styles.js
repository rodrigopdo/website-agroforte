import styled from 'styled-components'

export const AboutSection = styled.div `
  background-color: rgba(199, 255, 177, 0.12);
  h4 {
    padding: 3rem 0 10rem;
    text-align: center;
    color: #1DA042;
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

export const MobileImg = styled.div `
  display: flex;
  img {
    height: 40rem;
    margin: -20rem auto -50rem;
  }
  @media(max-width: 800px) {
    img {
    height: 30rem;
    margin: -12rem auto 0rem;
  }
`;

 export const AboutGrid = styled.div `
  max-width: 1000px;
  margin: 5rem auto 0;
  padding: 1rem 1rem 6rem;
  display: grid;
  grid-template-columns: 32rem 32rem;
  justify-content: space-between;
  grid-template-rows: 1fr 1fr;
  grid-gap: 9rem;
  grid-template-areas: 
    "card1 card3"
    "card2 card4";

  article:nth-child(1) {
    grid-area: card1;
  }
  article:nth-child(2) {
    grid-area: card2;
  }
  article:nth-child(3) {
    grid-area: card3;
  }
  article:nth-child(4) {
    grid-area: card4;
  }

  @media screen and (max-width: 800px) {
    margin: 4rem auto 0;
    padding: 0rem 1rem 0;
    grid-template-columns: 1fr;
    grid-template-areas:
    "card1"
    "card2"
    "card3"
    "card4";    
  }
`;


export const HeaderDna = styled.div `
  background-image: url(/wave6.svg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 30rem;  
  div {
    max-width: 900px;
    height: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: start;
    h2 {
      margin: 8rem auto 0 2rem;
      padding: 0 2rem;
      color: #fff;
      font-size: 2.5rem;
      font-weight: 500;
      &::before {
        content: " ";
        display: inline-block;
        height: 3px;
        width: 35px;
        margin: 0.5rem 1rem 1rem 0;
        background: #3dd969;
        border-radius: 50px;
      }
      @media(max-width: 800px) {
        margin: 8rem auto;
        padding: 0 1rem;
        font-size: 2.5rem;
      }
    }
  }
  span {
    color: #3dd969;
    font-size: 4rem;
    @media(max-width: 800px) {
      font-size: 3.5rem;
    }
  }
`;

export const Btn = styled.button `
display: block;
background: #3dd969;
border: 0.12rem solid #3dd969;
color: #fff;
margin: 0 auto;
padding: 1.6rem 2.8rem;
border-radius: 5rem;
text-align: center;
font-size: 1.4rem;
text-transform: uppercase;
font-weight: bold;
transition: 0.3s ease;

&:hover {
  transform: scale(1.04)
}

@media (max-width: 580px) {
  display: block;
  width: 90%;
  font-size: 1.4rem;
}
`;

export default Btn;

