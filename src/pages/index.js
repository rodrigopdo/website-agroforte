import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import Products from '../components/Products';
import About2 from '../components/About2';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <title>Agroforte</title>
      </Head>
      <Main />
      <About />
      <Products />
      <About2 />
      <Contact />
    </>
  )
}
