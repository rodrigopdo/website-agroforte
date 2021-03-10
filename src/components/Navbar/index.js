import React from 'react'
import Nav from './styles'
import BurgerBtn from '../BurgerBtn'
import Image from 'next/image';

const Navbar = () => {
  return (
    <Nav>
     <Image
        src="/logo.png"
        alt="Picture of the author"
        width={100}
        height={40}
      />
      <BurgerBtn />    
    </Nav>
  )
}

export default Navbar
