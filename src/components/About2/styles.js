import styled from 'styled-components'

export const AboutSection2 = styled.div `
  
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), 
  rgba(0, 0, 0, 0.1)), url(/countryside.jpg);
  background-repeat: no-repeat;
  height: 70rem;
  background-size: cover;
  background-position: 0 40px;
  background-attachment: fixed;
  svg {
    margin-top: -1.2rem
  }
`;

export const HeaderAbout2 = styled.div `
  background-image: url(/wave-linear2.svg);
  background-repeat: no-repeat;
  background-size: cover;
  div {
    max-width: 900px;
    margin: 0 auto;
    height: 350px;
  }
  h2 {
    padding: 4.5rem 1rem 0 0;
    text-align: end;
    color: #fff;
    font-size: 2.5rem;
    font-weight: 500;
    &::after {
      content: " ";
      display: inline-block;
      height: 3px;
      width: 35px;
      margin: 0.5rem 1rem 0.5rem 1rem;
      background: #3dd969;
      border-radius: 50px;
    }
  }
  span {
    color: #3dd969;
    font-size: 3rem;
  }
`;

export const AboutContainer2 = styled.div `
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
    img {
      display: none;
    }
  }
`;

/*
export const MainText = styled.div `
  max-width: 85rem;
  margin: 0 0 0 17rem;
  padding-top: 16rem;

  h1 {
    color: #fff;
    font-weight: 600;
    font-size: 4.5rem;
    line-height: 61px;
    letter-spacing: -0.01em;
  }
  h2 {
    font-size: 3.5rem;
    font-weight: 500;
    text-align: start;
    color: #fff;
  }
  h4 {
    max-width: 450px;
    padding: 20px 0 20px;
    font-size: 1.6rem;
    color: #fff;
    font-weight: 300;
    line-height: 2.2rem;
  }
`;
*/

export const MobileImg2 = styled.div `
  
  h2 {
    font-size: 2rem;
    color: #fff;
    padding: 2rem;
  }
  img {
    height: 50rem;
    margin: -14rem -2rem 0 10rem;
  }
  
`;
