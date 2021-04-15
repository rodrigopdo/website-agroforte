import React, { useEffect } from 'react';
import { CardProduct } from './CardProduct';
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
            text="Invista na sua estrutura e no ganho de produtividade do seu negócio" 
            img="adequacao-icon-2.png" 
            alt="Crédito para Adequação"
          />
          <CardProduct 
            title="Crédito para Custeio" 
            text="Crédito rápido para os custos do dia a dia de sua produção" 
            img="custeio-icon-3.png" 
            alt="Crédito para Custeio"
            able="disabled"
          />
          <CardProduct 
            title="Antecipação de Recebíveis" 
            text="Antecipe seu recebimento de forma ágil e alivie seu capital de giro" 
            img="antecipacao-icon-2.png" 
            alt="Antecipação de Recebíveis"
          />
        </GridCards>
      </ProductContainer>
    </ProductSection>
  )
}

export default Products;
