import styled from 'styled-components';

const StyledBurger = styled.div`
  display: none;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 19px;
  right: 30px;
  z-index: 2;

  @media (max-width: 895px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.16rem;
    background-color: ${({ open }) => open ? '#145536' : '#3dd969'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.6s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default StyledBurger
