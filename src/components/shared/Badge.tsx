import { ReactNode } from "react"
import { styled } from "../../styles"

interface IBadgeProps {
  children: ReactNode
  color: 'red-light' | 'blue-light' | 'purple-light'
}

export function Badge({ children, color }: IBadgeProps) {
  return (
    <Container color={color}>
      {children}
    </Container>
  )
}

const Container = styled('div', {
  display: 'inline-block',
  fontFamily: '$sora',
  fontWeight: '600',
  fontSize: '1rem',
  lineHeight: '1.375rem',

  padding: '8px 12px',
  borderRadius: '16px',

  variants: {
    color: {
      'red-light': {
        color: '$red-dark',
        backgroundColor: '$red-light',
      },
      'blue-light': {
        color: '$blue-dark',
        backgroundColor: '$blue-light',
      },
      'purple-light': {
        color: '$purple-dark',
        backgroundColor: '$purple-light',
      },
    }
  }
})