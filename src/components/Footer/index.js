import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { 
  FooterSection, 
  FooterTop, 
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
          <h2 data-aos="fade-right">O Parceiro Digital do Produtor Rural.</h2>
          <div data-aos="fade-up"> 
            <BtnFooter href="#about2" >Saber Mais</BtnFooter>
          </div>
        </FooterTop>
      </FooterSection>
        <FooterBottom>
          <div>
            <p>ENDEREÇO 1: Rua Álvaro Anes, 56 – conjunto 61, Pinheiros, São Paulo, SP – CEP 05421-010</p>
            <p>ENDEREÇO 2: Rua Bonfim, 1741, Centro, Toledo, PR – CEP 85901-000</p>
            <p>&copy; 2021 - AgroForte - Todos os direitos reservados</p>
          </div>
          <article>        
            <h5>Siga-nos em nossas redes sociais</h5>
            <a href="https://www.facebook.com/agrofortedigital">
            <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/agrofortedigital/">
            <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/43370107/">
            <i class="fab fa-linkedin"></i>
            </a>
          </article>
        </FooterBottom>
    </>
  )
}
export default Footer;
