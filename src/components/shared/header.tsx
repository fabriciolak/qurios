import { styled } from '../../styles/index'

export function Header() {
  return (
    <Container size="full">
      <div className='center'>
        <Logo>QURIOS</Logo>
        <Nav>
          <ul>
            <li>
              <a href="/">Produto</a>
            </li>
            <li>
              <a href="/">Preços</a>
            </li>
            <li>
              <a href="/">Sobre</a>
            </li>
          </ul>
        </Nav>
        
        <button>Registrar-se</button>
      </div>
    </Container>
  )
}

const Container = styled('div', {
  width: '100%',
  padding: '0 2rem',

  backgroundColor: '$blue-light',

  variants: {
    size: {
      full: {
        maxWidth: '100%',
      }
    }
  },

  '.center': {
    maxWidth: '1280px',
    height: '7.5rem',
    margin: '0 auto',
    
    display: 'flex',
    alignItems: 'center',
  
    button: {
      marginLeft: 'auto',
      backgroundColor: 'transparent',

      width: '140px',
      height: '48px',

      // boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
      borderRadius: '2rem',
      border: '1px solid #008BFE',

      color: '#008BFE',

      fontFamily: '$segoe',
    },
  }
})

const Logo = styled('h2', {
  fontFamily: '$roboto',
  fontSize: '1rem',
  fontWeight: '700',
  lineHeight: '1.5rem',
  letterSpacing: '0.12rem',
  color: '$title',

  marginRight: '4.375rem'
})

const Nav = styled('nav', {
  ul: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    listStyle: 'none'
  },

  'li > a': {
    textDecoration: 'none',
    fontFamily: '$roboto',
    fontWeight: 500,

    color: '$text'
  },

  'li + li': {
    marginLeft: '4.375rem'
  }
})