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
            text="Crédito ideal para o produtor que precisa ampliar a sua estrutura e adequar-se a nova demanda" 
            img="adequacao-icon-2.png" 
            alt="Crédito para Adequação"
          />
          <CardProduct 
            title="Crédito para Custeio" 
            text="Crédito para o produtor que precisa cumprir com sua despesas regulares de toda a sua operação" 
            img="custeio-icon-3.png" 
            alt="Crédito para Custeio"
            able="disabled"
          />
          <CardProduct 
            title="Antecipação de Recebíveis" 
            text="Antecipe o seus recebimentos e tenha mais uma alternativa para aliviar o seu capital de giro." 
            img="antecipacao-icon-2.png" 
            alt="Antecipação de Recebíveis"
          />
        </GridCards>
      </ProductContainer>
    </ProductSection>
  )
}

export default Products;
