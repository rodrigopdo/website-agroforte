import styled from 'styled-components';

export const Wrapper = styled.div `
  background-color: rgba(199, 255, 177, 0.12);
  display: flex;
  height: auto;
  width: 100vw;
  justify-content: center;
`;

export const FaqContainer = styled.div `
  max-width: 900px;
  margin: 12rem auto 8rem;
  display: flex;
  flex-direction: space-between;
  @media (max-width: 950px) {
    flex-direction: column;
    img {
      display: none;
    }
  }
`;

export const Header = styled.div `
  display: flex;
  flex-direction: column;
  text-align: center;


  h2 {
    color: #3dd969;
    font-size: 2.8rem;
    font-weight: 500;
  }
  h4 {
    color: #6F6E6F;
    font-size: 1.6rem;
    font-weight: 600;
    margin: 1rem 0 6rem;
  }
`;

export const Question = styled.div `
  ${'' /* flex: 70%; */}
  width: 80%;
  margin: 0 auto;
`;

export const Item = styled.div `
  background-color: #fff;
  margin-bottom: 3rem;
  padding: 2.5rem 2.5rem;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  border-radius: 0.5rem; 
`;

export const Title = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6F6E6F;
  cursor: pointer;
  h2 {
    font-size: 1.4rem;
    max-width: 50rem;
    font-weight: 700;
    margin: 1rem 0;
    &:hover {
      opacity: 0.8;
    }
`;

export const ArrowIcon = styled.span `
    font-size: 2.5rem;
    color: #3DD969;
    font-weight: 700;
`;

export const Answer = styled.p `
  color: #333333;
  max-height: ${props=> props.show ? '40rem' : '0'};
  ${'' /* opacity: ${props=> props.show ? '1' :  '0'}; */}
  font-size: 1.4rem;
  font-weight: 400;
  overflow: hidden;
  transition: all 0.5s ease;
`;

// export const Dropped= styled.p ` 
//   height: auto;
//   max-height: 1000px;
//   opacity: 1;
//   transition: all 0.4s ease;
// `; 