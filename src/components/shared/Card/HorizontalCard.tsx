import { Link } from "react-router-dom"
import { styled } from "../../../styles"

interface ICardProps {
  type: 'FRIEND' | 'LOVE' | 'COLLEGE' | 'STRANGER' | 'FAMILY'
  content: string
  id: string
  isLoading?: boolean
}

export function HorizontalCard({ id, content, type, isLoading }: ICardProps) {
  const cardTypeBr = {
    FRIEND: {
      br: 'Amizade'
    }, 
    LOVE: {
      br: 'Amor'
    }, 
    COLLEGE: {
      br: 'Estudante'
    }, 
    STRANGER: {
      br: 'Desconhecido'
    }, 
    FAMILY: {
      br: 'Família'
    }
  }

  return (
    <>
      {isLoading ? (
        <Container as={Link} to={`/reply/${id}`}>
          <Border className="skeleton skeleton-border">
            <CardType>
              <div className="skeleton skeleton-text-full"></div>
            </CardType>
            <Image>
              <div className="skeleton skeleton-text-full"></div>
            </Image>
            <Content>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
            </Content>
            <Brand>
              <div className="skeleton skeleton-text-full"></div>
            </Brand>
          </Border>
        </Container>
      ) : (
        <Container as={Link} to={`/reply/${id}`}>
          <Border type={type}>
            <CardType type={type}>
              Card de {cardTypeBr[`${type}`].br}
            </CardType>
            <Image>
              <img src="https://www.kindpng.com/picc/m/326-3260968_monkey-emoji-3-speak-no-evil-monkey.png" alt="Memoji Monkey 3" />
            </Image>
            <Content>
              <p>{content}</p>
            </Content>
            <Brand>
              <span>QURIOS</span>
            </Brand>
          </Border>
        </Container>
      )}
    </>
  )
}

const Container = styled('div', {
  width: '100%',
  maxWidth: '768px',
  height: '256px',
  borderRadius: '16px',

  padding: '24px 16px',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',

  marginBottom: '16px',

  color: '$text'
})

const Border = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: '16px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  variants: {
    type: {
      'FRIEND': {
        border: '1px solid $blue-light',
      },
      'LOVE': {
        border: '1px solid $red-light',
      },
      'COLLEGE': {
        border: '1px solid $green-light',
      },
      'STRANGER': {
        border: '1px solid $gray-light',
      },
      'FAMILY': {
        border: '1px solid $purple-light',
      },
    }
  }
})

const Content = styled('div', {
  width: '11.25rem',
  marginTop: '1rem',
  fontFamily: '$segoeui',
  fontSize: '18px',
  lineHeight: '24px',
  textAlign: 'center'
})

const CardType = styled('div', {
  width: '9.0625rem',
  height: '1.375rem',

  position: 'absolute',
  top: '-13px',
  left: '50%',
  transform: 'translateX(-50%)',

  borderRadius: '4px',

  textAlign: 'center',
  fontSize: '0.75rem',
  lineHeight: '1.375rem',
  fontWeight: '400',
  fontFamily: '$segoeui',

  variants: {
    type: {
      'FRIEND': {
        backgroundColor: '$blue-light',
        color: '$blue-dark',
      },
      'LOVE': {
        backgroundColor: '$red-light',
        color: '$red-dark',
      },
      'COLLEGE': {
        backgroundColor: '$green-light',
        color: '$green-dark',
      },
      'STRANGER': {
        backgroundColor: '$gray-light',
        color: '$gray-dark',
      },
      'FAMILY': {
        backgroundColor: '$purple-light',
        color: '$purple-dark',
      },
    }
  }
})

const Image = styled('div', {
  width: '3.75rem',
  height: '3.75rem',

  img: {
    width: 'auto',
    height: '100%',
  }
})

const Brand = styled('div', {
  width: '4.625rem',
  height: '1.125rem',

  position: 'absolute',
  bottom: '-10px',
  left: '50%',
  transform: 'translateX(-50%)',

  fontSize: '0.75rem',
  fontWeight: 700,
  lineHeight: '18px',
  letterSpacing: '0.12em',
  textAlign: 'center',

  color: '$text',
  backgroundColor: '$white',
})