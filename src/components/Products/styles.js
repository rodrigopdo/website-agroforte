import styled from 'styled-components';

export const ProductSection = styled.section `
  background-color: rgba(199, 255, 177, 0.12);
`;

export const ProductContainer = styled.div `
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem 0 12rem;

  
  h2 {
    margin: 10rem auto 6rem;
    padding: 0 2rem;
    color: #333333;
    font-size: 2.5rem;
    font-weight: 500;
    &::before {
      content: " ";
      display: inline-block;
      height: 3px;
      width: 35px;
      margin: 0.1rem 1rem 0.5rem;
      background: #3dd969;
      border-radius: 50px;
    }
  }
  span {
    color: #3dd969;
    font-size: 3rem;
    font-weight: 600;
  }
`;

export const GridCards = styled.div `
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1100px) {
    margin: 60px 30px 0;
    flex-direction: column;
  }
`;
    

    