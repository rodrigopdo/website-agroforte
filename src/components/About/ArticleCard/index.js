import { Card } from './styles';

const ArticleCards = (props) => {
  return (
    <Card>
      <img src={props.img} alt={props.alt}/>
      <h3>{props.title}</h3>
      <p >{props.text}</p>
    </Card>
  )
}

export default ArticleCards;
