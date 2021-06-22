import { Ul, NavBtn } from './styles';
import Link from 'next/link';

const SideBar = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="#about">Quem Somos</a>
      </li>
      <li>
        <a href="#product">Linhas de Crédito</a>
      </li>
      <li>
        <a href="#faq">Perguntas Frequentes</a>
      </li>
      <li>
        <a href="#contact">Fale com a Gente</a>
      </li>
      {/*<NavBtn type="button" href="#about2">Saber Mais</NavBtn>*/}
    </Ul>
  )
}

export default SideBar;
