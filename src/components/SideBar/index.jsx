import { Ul, NavBtn } from './styles';

const SideBar = ({ open }) => {
  return (
    <Ul open={open}>
      <li>A Agroforte</li>
      <li>Produtos</li>
      <li>Contato</li>
      <NavBtn>Simular</NavBtn>
    </Ul>
  )
}

export default SideBar;
