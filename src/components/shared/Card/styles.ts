import { styled } from "../../../styles";

export const Container = styled('div', {
  position: 'relative',
  width: '15.25rem',
  height: '23rem',
  
  padding: '1.5rem 1rem',

  borderRadius: '1rem',
  backgroundColor: '$white',

  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',

  '.border': {
    height: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    borderRadius: '0.75rem',
  },

  '.card-type-name': {
    position: 'absolute',
    top: '13px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '9.0625rem',
    height: '1.375rem',
    borderRadius: '4px',

    fontSize: '0.75rem',
    lineHeight: '22px',

    textAlign: 'center',
  },

  '.card-type-image': {
    width: '3.75rem',
    height: '3.75rem',

    img: {
      width: 'auto',
      height: '100%'
    }
  },

  '.card-type-content': {
    width: '11.25rem',
    marginTop: '1rem',
    fontFamily: '$segoeui',
    fontSize: '18px',
    lineHeight: '24px',
    textAlign: 'center'
  },

  '.card-type-footer': {
    width: '4.625rem',
    height: '1.125rem',
    position: 'absolute',
    bottom: '15px',
    left: '50%',
    transform: 'translateX(-50%)',

    fontSize: '0.75rem',
    fontWeight: 700,
    lineHeight: '18px',
    letterSpacing: '0.12em',
    textAlign: 'center',
  
    color: '$text',
    backgroundColor: '$white',
  },

  variants: {
    type: {
      friend: {
        '.border': {
          border: '1px solid $blue-light',
        },
        '.card-type-name': {
          color: '$blue-dark',
          backgroundColor: '$blue-light'
        }
      },
      love: {
        '.border': {
          border: '1px solid $red-light',
        },
        '.card-type-name': {
          color: '$red-dark',
          backgroundColor: '$red-light'
        }
      },
      college: {
        '.border': {
          border: '1px solid $green-light',
        },
        '.card-type-name': {
          color: '$green-dark',
          backgroundColor: '$green-light'
        }
      },
      stranger: {
        '.border': {
          border: '1px solid $gray-light',
        },
        '.card-type-name': {
          color: '$gray-dark',
          backgroundColor: '$gray-light'
        }
      },
      family: {
        '.border': {
          border: '1px solid $purple-light',
        },
        '.card-type-name': {
          color: '$purple-dark',
          backgroundColor: '$purple-light'
        }
      },
    }
  }
})