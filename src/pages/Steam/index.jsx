import { Link } from 'react-router-dom'

import './index.css'

export default function Steam() {
  return (
    <div className="conteudo-steam">
      <p>Conteudo steam</p>
      <Link to='/'>Voltar para home</Link>
      <a target='blank' href='https://www.nike.com.br/tenis-air-jordan-1-mid-masculino-024331.html?cor=51&gclid=CjwKCAjwysipBhBXEiwApJOcu6pk6Lij6ye6WsoKMh1uyzW5oTd-1a4s7bKzKwJDj-9WzaDgdGz-6BoCaiUQAvD_BwE'  className='propaganda-jordan' >propaganda jordan</a>
      <a target='blank' href='https://www.nike.com.br/regata-nike-los-angeles-lakers-icon-edition-202223-masculina-023159.html?cor=0L&gclid=CjwKCAjwysipBhBXEiwApJOcu59TGFhYcaqGSGeMRjLHDVQ-E3CMEIahJTsCl5W3HN7fdKRb4skDrBoCNoMQAvD_BwE' className='propaganda-camisa' >propaganda camisa</a>
    </div>
  )
}