import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import Products from '../components/Products';
import About2 from '../components/About2';
import Contact from '../components/Contact';
import Accordion from '../components/Accordion';
import CookieConsent from "react-cookie-consent";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

        <title>Agroforte</title>
      </Head>
      <Main />
      <About />
      <Products />
      <About2 />
      <Accordion />
      <Contact />
      <CookieConsent
        location="bottom"
        buttonText="Entendi"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >    
        <span style={{ fontSize: "12px" }}>Este site usa cookies e dados pessoais de acordo com os nossos Termos de Uso e Política de Privacidade e, ao continuar navegando neste site, você declara estar ciente dessas condições.</span>
      </CookieConsent>    
    </>
  )
}
