import React, { useState } from 'react';
import StyledBurger from './styles';
import SideBar from '../SideBar';

const BurgerBtn = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <SideBar open={open}/>
    </>
  )
}

export default BurgerBtn