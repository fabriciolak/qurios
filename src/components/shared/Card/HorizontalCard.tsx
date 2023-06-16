import { Link } from "react-router-dom"
import { styled } from "../../../styles"

interface ICardProps {
  type: 'friend' | 'love' | 'college' | 'stranger' | 'family'
  content: string
  slug: string
}

export function HorizontalCard({ slug, content }: ICardProps) {
  return (
    <Container as={Link} to={`/reply/${slug}`}>
      <Border>
        <CardType>
          Card de
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
  )
}

const Container = styled('div', {
  width: '100%',
  maxWidth: '768px',
  height: '256px',
  borderRadius: '16px',

  padding: '24px 16px',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',

  marginBottom: '16px'
})

const Border = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: '16px',
  border: '1px solid $blue-light',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
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

  backgroundColor: '$blue-light',
  color: '$blue-dark',
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