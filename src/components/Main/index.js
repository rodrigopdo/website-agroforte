import Typist from 'react-typist';
import { MainSection, MainContent, Btn1, IconWhats } from './styles';

const Main = () => {

  return ( 
       
    <MainSection>
      <MainContent>
        <h1>O Parceiro de Crédito</h1>
        <h2>do Produtor Rural</h2>
        <Typist>
        <h4>Serviço de crédito ágil e 100%  digital que chegou ao campo para ajudar o produtor   rural, sem burocracias.</h4>
        </Typist>
        <Btn1 type="submit">Simulação</Btn1>
      </MainContent>
      <IconWhats>
      <a href="https://api.whatsapp.com/send?l=pt&amp;phone=5519999821179">        
      <img src="/icon-whats2.png"/>
      </a>
      </IconWhats>
    </MainSection>
  )
}

export default Main;
