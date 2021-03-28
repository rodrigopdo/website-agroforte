import React, { useEffect } from 'react';
import { CardProduct, CardProductDisabled } from './CardProduct';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { 
  ProductSection, 
  ProductContainer, 
  GridCards, 
} from './styles';

const Products = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ProductSection id="product">
      <ProductContainer>
        <h2 data-aos="fade-right">Conheça as nossas <span>Linhas de Crédito</span></h2>
        <GridCards >
          <CardProduct  
            title="Crédito para Adequação" 
            text="Lorem Ipsum is simply dummy text of the printing and  typesetting" 
            img="adequacao-icon-2.png" 
            alt="Crédito para Adequação"
          />
          <CardProductDisabled 
            title="Crédito para Custeio" 
            text="Lorem Ipsum is simply dummy text of the printing and  typesetting" 
            img="custeio-icon-3.png" 
            alt="Crédito para Custeio"
            able="disabled"
          />
          <CardProductDisabled 
            title="Antecipação de Recebíveis" 
            text="Lorem Ipsum is simply dummy text of the printing and  typesetting" 
            img="antecipacao-icon-2.png" 
            alt="Antecipação de Recebíveis"
          />
        </GridCards>
      </ProductContainer>
    </ProductSection>
  )
}

export default Products;
