import React, { useEffect } from 'react';
import { AboutSection2, HeaderAbout2, AboutContainer2, MobileImg2 } from './styles';
import Form from './Form';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About2 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <> 
    <AboutSection2 id="about2">
    <HeaderAbout2>
      <div>
        <h2 data-aos="fade-left">Faça parte da<br></br> <span>Comunidade</span> AgroForte</h2>
      </div>
    </HeaderAbout2>
      <AboutContainer2>
        <Form />
        <MobileImg2>
          <img src="mobile-hands.png"></img>
        </MobileImg2>
      </AboutContainer2> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1DA042" fill-opacity="1" d="M0,0L1440,32L1440,0L0,0Z"></path></svg>
    </AboutSection2>
    </>
  )
}

export default About2;
