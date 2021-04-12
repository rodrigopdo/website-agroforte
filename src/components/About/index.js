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
          <h2 data-aos="fade-right">O <span>DNA</span> AgroForte</h2>
        </div>
      </HeaderDna>
      <MobileImg data-aos="fade-up">
        <img src="/mobile-wifi12.png"/>
      </MobileImg>
      <AboutGrid>
        <ArticleCards 
          img="/icon-inovacao.png"
          all="inovação"
          title="INOVAÇÃO"
          text="Tecnologia de ponta para oferecer ao produtor crédito de forma rápida e fácil, sem aval ou garantia de terra."  
        />
        <ArticleCards 
          img="/icon-customizacao.png"
          all="Customização"
          title="CUSTOMIZAÇÃO"
          text="Taxas competitivas com parcelas retidas no lote. Crédito de acordo com a real necessidade do produtor."  
        />
        <ArticleCards 
          img="/icon-transparencia.png"
          all="Transparência"
          title="TRANSPARÊNCIA"
          text="Sem tarifas embutidas e serviços indesejados. Eliminamos custos desnecessários."  
        />
        <ArticleCards 
          img="/icon-agilidade.png"
          all="Agilidade"
          title="AGILIDADE"
          text="Prazos de aprovação curtos e sem burocracias que tanto afetam o processo de crédito."  
        />
      </AboutGrid>
      {/* <Btn>Quero me Cadastrar</Btn>
      <h4>Esteja por dentro de tudo que a Agroforte pode te oferecer!</h4> */}
    </AboutSection>
  )
}

export default About;
