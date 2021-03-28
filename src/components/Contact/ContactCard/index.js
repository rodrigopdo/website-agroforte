import { Card } from './styles';

const ContactCard = (props) => {
  return (
    <Card>
      <h3>{props.title}</h3>
      <a href={props.href}><i class={props.icon}></i></a>
      <p>{props.text}</p>
    </Card>
  )
}

export default ContactCard;
