import styled from 'styled-components'

export const AboutSection2 = styled.div `
  
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), 
  rgba(0, 0, 0, 0.1)), url(/countryside1.jpg);
  background-repeat: no-repeat;
  height: 70rem;
  background-size: cover;
  background-position: 0 40px;
  background-attachment: fixed;
  svg {
    margin-top: -1.2rem;
    @media(max-width: 940px) {
      margin-top: 4rem;
    }
  }
`;

export const HeaderAbout2 = styled.div `
  background-image: url(/wave-linear2.svg);
  background-repeat: no-repeat;
  background-size: cover;
  div {
    max-width: 900px;
    margin: 0 auto;
    height: 42rem;
  }
  h2 {
    padding: 9rem 4rem;
    text-align: end;
    color: #fff;
    font-size: 2.5rem;
    font-weight: 500;
    &::after {
      content: " ";
      display: inline-block;
      height: 3px;
      width: 3.5rem;
      margin: 0.5rem 1rem 0.5rem 1rem;
      background: #3dd969;
      border-radius: 50px;
    }
    @media(max-width: 800px) {
      margin: 0 auto 0;
      font-size: 2rem;
    }
  }
  span {
    color: #3dd969;
    font-size: 3rem;
    @media(max-width: 940px) {
      margin: 0 auto;
      font-size: 2.2rem;
    }
  }
`;

export const AboutContainer2 = styled.div `
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: space-between;
  @media (max-width: 950px) {
    flex-direction: column;
    img {
      display: none;
    }
  }
`;

export const MobileImg2 = styled.div `
  
  img {
    height: 50rem;
    margin: -21rem -2rem 0 10rem;
  }
  
`;
