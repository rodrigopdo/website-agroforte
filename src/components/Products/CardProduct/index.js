import { Card, BtnCard } from './styles';

export const CardProduct = (props) => {
  return (
    <Card>
      <img src={props.img} alt={props.alt}/>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <BtnCard href="#about2">Saber Mais</BtnCard>     
    </Card>
  )
}
export const CardProductDisabled = (props) => {
  return (
    <Card>
      <img src={props.img} alt={props.alt}/>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <BtnCardDisabled>Em Breve</BtnCardDisabled>     
    </Card>
  )
}



