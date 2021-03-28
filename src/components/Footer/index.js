import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { 
  FooterSection, 
  FooterTop, 
  FooterCenter, 
  BtnFooter, 
  FooterBottom} 
  from './styles';

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <FooterSection>
        <FooterTop>
          <img src="/logo.png"/>
          <h2 data-aos="fade-right">Chegamos para ajudar o seu negócio.</h2>
          <div data-aos="fade-up"> 
            <BtnFooter >Saber Mais</BtnFooter>
          </div>
        </FooterTop>
        <FooterCenter >
          <h4>Siga-nos em nossas redes sociais!</h4>
          <div>        
          <a href="https:www.facebook.com">
          <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https:www.instagram.com">
          <i class="fab fa-instagram"></i>
          </a>
          </div>
        </FooterCenter>
      </FooterSection>
        <FooterBottom>
          <div>
            <p>&copy; 2020 - Agroforte - Todos os direitos reservados</p>
            <p><i class="fas fa-map-marker-alt"></i> Rua Álvaro Anes, 56 – conjunto 61, Pinheiros, São Paulo, SP – CEP 05421-010</p>
          </div>
        </FooterBottom>
    </>
  )
}
export default Footer;
