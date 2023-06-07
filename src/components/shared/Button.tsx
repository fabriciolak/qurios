import { CSSProperties } from '@stitches/react'
import { ButtonHTMLAttributes, ReactNode } from "react"
import { styled } from "../../styles"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  css?: CSSProperties
  children: ReactNode
  href: string
  target?: string
}

export function Button ({ variant = 'primary', children, css, href, target = "_blank"}: IButtonProps) {
  return (
    <Container variant={variant} css={css as Record<string, never>}>
      <a href={href} target={target}>
        {children}
      </a>
    </Container>
  )
}

const Container = styled('button', {
  width: 'auto',
  height: '2.5rem',
  padding: '8px 16px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  border: '1px solid transparent',
  outline: 'none',
  cursor: 'pointer',

  fontFamily: '$roboto',
  fontWeight: '500',
  fontSize: '1rem',
  lineHeight: '1.5rem',

  
  'a': {
    textDecoration: 'none',
  },

  variants: {
    variant: {
      primary: {
        a: {
          color: '$white',
        },
        borderRadius: '8px',
        backgroundColor: '$blue-dark'
      },
      secondary: {
        a: {
          color: '$black',
        },
        border: '1px solid rgba(0, 0, 0, 0.18)',
        borderRadius: '8px',
        backgroundColor: 'transparent'
      },
      tertiary: {
        a: {
          color: '$blue-dark',
        },
        border: '1px solid rgba(0, 0, 0, 0)',
        borderRadius: '8px',
        backgroundColor: 'transparent'
      },
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
})