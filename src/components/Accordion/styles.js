import styled from 'styled-components';

export const Wrapper = styled.div `
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const Question = styled.div `
  width: 500px;

`;

export const Item = styled.div `
  margin-bottom: 3rem;
  padding: 2.5rem 2.5rem;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  border-radius: 0.5rem; 
`;

export const Title = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #848585;
  cursor: pointer;
  h2 {
    font-size: 1.4rem;
    max-width: 30rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  span {
    font-size: 2.8rem;
  }
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