import React, { useEffect } from 'react';
import Typist from 'react-typist';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { MainSection, MainContainer, MainText, Img$, Btn1, IconWhats } from './styles';

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return ( 
    <MainSection>
      <MainContainer>
      {/*
        <Img$>
        <img src="/$$$.png"/>
        </Img$>
      */}
        <MainText>
          <p>Agroforte Digital</p>
          <h1>Parceiro de Crédito</h1>
          <h2>do Produtor Rural</h2>
          <Typist cursor={{show: false}}>
          <h4>Serviço de crédito 100% digital.</h4>
          </Typist>
          <div data-aos="fade-right" data-aos-delay="3000" data-aos-duration="2000">
            <Btn1 href="#about2">Quero conhecer</Btn1>
          </div>
        </MainText>
      </MainContainer> 
      <IconWhats>
        <a href="https://api.whatsapp.com/send?l=pt&amp;phone=5519999821179">        
        <img src="/icon-whats2.png"/>
        </a>
      </IconWhats>
    </MainSection>
  )
}

export default Main;
