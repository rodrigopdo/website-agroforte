import styled from 'styled-components'

export const Ul = styled.ul `
  display: flex;
  align-items: center;
  transition: 0.5s ease;  
  
  li {
    color: #3dd969;
    font-size: 1.5rem;
    padding: 30px 25px;
    line-height: 0.6;
    transition: 0.3s ease;
      &:hover {
          box-shadow: 0 -5px 0 #3dd969 inset,
          500px 0 0 rgba(255,255,255,0.03) inset;
          padding: 25px 25px 35px 25px;
      }
  }
  a {
    color: #3dd969;
  }

  @media (max-width: 895px) {
    flex-flow: column nowrap;
    background: linear-gradient(180deg, #1DB954 0.49%, #00704A 99.46%);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
      &:hover {
        padding: 30px;
        font-size: 16px;
        box-shadow: none;
      }
    }
    a {
      color: #fff;
    }
  }
`;

export const NavBtn = styled.a `
  background: #3dd969;
  box-shadow: 0 6px 10px 8px rgb(13 151 255 / 20%);
  margin: 0 0 0 30px;
  text-align: center;
  padding: 10px 20px;
  color: #fffff;
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: 50px;
  transition: 0.3s ease;

  &:hover {
    box-shadow: -2px 1px 8px 2px rgba(0,0,0,0.27);
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    margin: 25px 0;
    width: 50%;
  }   
`;