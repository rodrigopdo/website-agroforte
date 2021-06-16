import React, { useState } from 'react';
import data from './data';
import { Wrapper, Question, Item, Title, Answer, Dropped } from './styles';

const Accordion = () => {
  const [open, setOpen] = useState(null)

  const toggle = (i) => {
    if (open == i) {
      return setOpen(null)  
    }
    setOpen(i)
  }
  return (
    <Wrapper>
      <Question>
        {data.map((item, i) => (
          <Item>
            <Title onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{open === i ? '-' : '+'}</span>
            </Title>
            
              {open === i ? (
                <Answer show={true}>
                  {item.answer}
                </Answer>
                ) : null
              }
          </Item>
        ))};
      </Question>
    </Wrapper>
  )
}

export default Accordion;
