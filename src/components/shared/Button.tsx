import { HTMLProps, ReactNode,  } from "react"
import { styled } from "../../styles"
import { To } from "react-router-dom"

interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  width?: 'full' | 'auto'
  to?: To
  as?: string | any
  children: ReactNode
}

export function Button ({ to, as = 'button', variant = 'primary', width = 'auto', children, ...props }: IButtonProps) {
  return (
    <Container as={as} to={to} variant={variant} width={width} {...props}>
      {children}
    </Container>
  )
}

const Container = styled('div', {
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
  color: '$white',

  
  '&:disabled': {
    opacity: 0.5
  },

  variants: {
    variant: {
      primary: {
        a: {
          color: '$white',
        },
        borderRadius: '8px',
        backgroundColor: '$blue-dark',
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
    },
    width: {
      full: {
        width: '100%',
      },
      auto: {
        width: 'auto',
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    width: 'auto'
  },
})