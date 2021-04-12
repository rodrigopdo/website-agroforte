import styled from 'styled-components';

export const Card = styled.article `
  padding: 1rem;
  margin: 0px;
  text-align: center;

  h3 {
      color: #3dd969;
      font-size: 3rem;
      font-weight: 700;
      margin: 10px 0;
  }
  p {
      max-width: 300px;
      margin: 0 auto;
      color: #333333;
      font-size: 2rem;
      font-weight: 600;
  }
  img{
    height: 10rem;
    margin: 0 auto 0 0;
  }

  @media(max-width: 800px) {
    padding: 2.5rem 1rem;
  }
`;

