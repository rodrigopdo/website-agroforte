import { ContactSection, ContactContainer} from './styles'
import ContactCard from './ContactCard'

const Contact = () => {
  return (
    <ContactSection id="contact">
      <h2>Gostaria de entrar em contato conosco?</h2>      
      <h4>Atendimento em dias úteis das 09h às 18h (horário de Brasília)</h4>      
      <ContactContainer>
        <ContactCard 
          title= "E-mail"
          icon="far fa-envelope"
          text= "contato@meuagroforte.com.br"
        />
        <ContactCard 
          title= "WhatsApp"
          icon="fab fa-whatsapp"
          href="https://api.whatsapp.com/send?l=pt&amp;phone=5541992176821"
          text= "( 41 ) 99217-6821 "
        />
        <ContactCard 
          title= "Telefone"
          icon="fas fa-phone-volume"
          text= "( 41 ) 99217-6821"
        />
      </ContactContainer>
    </ContactSection>
      
  )
}

export default Contact;
