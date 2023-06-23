import { Container } from './styles'

interface ICardProps {
  type: 'friend' | 'love' | 'college' | 'stranger' | 'family'
  content: string
}

export function Card({ type, content }: ICardProps) {
  const imageURL = new URL(`/src/assets/img/card-image-${type}.png`, import.meta.url).href
  
  const cardDescriptionIndex = {
    friend: 'Amizade',
    love: 'Amor',
    college: 'Estudante',
    stranger: 'Desconhecido',
    family: 'Família'
  }

  return (
    <Container type={type}>
      <div className="border">
        <div className="card-type-name">
          Card de {cardDescriptionIndex[type]}
        </div>
        <div className="card-type-image">
          <img src={imageURL} alt={`Memoji Monkey ${type}`} />
        </div>
        <div className="card-type-content">
          <p>{content}</p>
        </div>
        <div className="card-type-footer">
          <span className='footer'>QURIOS</span>
        </div>
      </div>
    </Container>
  )
}