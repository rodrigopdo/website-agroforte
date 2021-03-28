import React from 'react'
import Nav from './styles'
import BurgerBtn from './BurgerBtn'
import Image from 'next/image';

const Navbar = () => {
  return (
    <Nav>
      <a href="#">
        <img src="/logo.png"/>
      </a>
      <BurgerBtn />    
    </Nav>
  )
}

export default Navbar
