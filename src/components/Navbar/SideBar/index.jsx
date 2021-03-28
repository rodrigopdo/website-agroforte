import { Ul, NavBtn } from './styles';

const SideBar = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="#about">A Agroforte</a>
      </li>
      <li>
        <a href="#product">Linhas de Crédito</a>
      </li>
      <li>
        <a href="#contact">Fale com a Gente</a>
      </li>
      <NavBtn>Saber Mais</NavBtn>
    </Ul>
  )
}

export default SideBar;
