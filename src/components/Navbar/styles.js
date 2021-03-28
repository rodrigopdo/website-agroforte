import styled from 'styled-components';

const Nav = styled.nav `
  Position: fixed;
  background-color: #145536;
  border-bottom: 0.1rem solid #3dd969;
  width: 100%;
  height: 70px;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  img {
    height: 4rem;
  }
`;

export default Nav;
