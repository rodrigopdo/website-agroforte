import FooterSection from './styles';
import Image from 'next/image';


const Footer = () => {
  return (
      <FooterSection>
        <div>
        <p>&copy; 2020 - Agroforte - Todos os direitos reservados</p>
        </div>

        <div>        
        <a href="https:www.facebook.com">
          <img src="/facebook-icon.png"/>
        </a>
        <a href="https:www.instagram.com">
          <img src="/instagram-icon.png"/>
        </a>
        </div>
          
      </FooterSection>
  )
}
export default Footer;
