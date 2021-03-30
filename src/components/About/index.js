import React, { useEffect } from 'react';
import { AboutSection, AboutGrid, HeaderDna, MobileImg, Btn } from './styles';
import ArticleCards from './ArticleCard';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  return (
    <AboutSection id="about">
      <HeaderDna>
        <div>
          <h2 data-aos="fade-right">O <span>DNA</span> Agroforte</h2>
        </div>
      </HeaderDna>
      <MobileImg data-aos="fade-up">
        <img src="/mobile-wifi12.png"/>
      </MobileImg>
      <AboutGrid>
        <ArticleCards 
          img="/icon-inovacao.png"
          all="inovação"
          title="Inovação"
          text="Utilizamos TECNOLOGIA para dar ao produtor acesso a produtos financeiros de forma rápida e fácil."  
        />
        <ArticleCards 
          img="/icon-customizacao.png"
          all="Customização"
          title="Customização"
          text="Somos especializados em crédito para o pequeno e médio produtor."  
        />
        <ArticleCards 
          img="/icon-transparencia.png"
          all="Transparência"
          title="Transparência"
          text="Usamos a tecnologia para encurtar o tempo de burocracias que tanto afetam o processo de crédito."  
        />
        <ArticleCards 
          img="/icon-agilidade.png"
          all="Agilidade"
          title="Agilidade"
          text="Usamos a tecnologia para encurtar os prazos de aprovação no processo de crédito."  
        />
      </AboutGrid>
      {/* <Btn>Quero me Cadastrar</Btn>
      <h4>Esteja por dentro de tudo que a Agroforte pode te oferecer!</h4> */}
    </AboutSection>
  )
}

export default About;
