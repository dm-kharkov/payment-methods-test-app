import { createTheme } from '@mui/material/styles'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  variable: '--font-poppins',
  subsets: ['latin']
})

const palette = {
  white: {
    pale: '#B9B9B9',
    main: '#FDFDFD',
    text: '#E0E0E0',
    subtitle: '#DDDDDD'
  },

  gray: {
    light: '#F1F1F1',
    main: '#E7E7E7',
    dark: '#262626',
    extraDark: '#121212',
    caption: '#606060',
    text: '#888888'
  }
}

const theme = createTheme({
  palette: {
    background: {
      default: palette.gray.dark
    }
  },

  typography: {
    fontFamily: poppins.style.fontFamily,
    
    h1: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: '104%',
      letterSpacing: '-1%',
      color: palette.gray.light
    },

    h2: {
      fontSize: 48,
      fontWeight: 700,
      lineHeight: '120%',
      letterSpacing: '-1%',
      color: palette.white.main
    },

    h3: {
      fontSize: 60,
      fontWeight: 700,
      lineHeight: '120%',
      letterSpacing: '-1%',
      color: palette.white.main
    },

    h4: {
      fontSize: 28,
      fontWeight: 500,
      lineHeight: '120%',
      letterSpacing: '-2%',
      color: palette.gray.main
    },

    subtitle1: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: '120%',
      letterSpacing: '-1%',
      color: palette.white.subtitle
    },

    subtitle2: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '130%',
      letterSpacing: '-1%',
      color: palette.white.subtitle
    },

    body1: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: '135%',
      letterSpacing: '-1%',
      color: palette.gray.text
    },

    body2: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '120%',
      letterSpacing: '-1%',
      color: palette.gray.light
    },

    caption: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '120%',
      letterSpacing: '26%',
      color: palette.gray.caption
    }
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
      
        }
      }
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.gray.extraDark,
          boxShadow: 'none'
        }
      }
    },

    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up('sm')]: {
            padding: '27px 80px 27px 32px',
            minHeight: 'auto'
          }
        })
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        },

        contained: {
          color: palette.gray.extraDark,
          backgroundColor: palette.white.text,
          borderRadius: 100
        },

        text: {
          color: palette.white.pale
        }
      }
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: palette.gray.dark
        }
      }
    },

    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor: '#000'
        }
      }
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          lineHeight: '120%',
          letterSpacing: '-1%',
          color: '##8F8F8F'
        }
      }
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          color: palette.white.main,
          backgroundColor: palette.gray.extraDark
        }
      }
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%'
        }
      }
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: 16,
          fontWeight: 400,
          lineHeight: '130%',
          letterSpacing: '-2%',
          borderRadius: 10,
          padding: '12px 20px',
          color: palette.white.subtitle,
          backgroundColor: '#191919',

          // override autocomlete styles
          '&:-webkit-autofill': {
            backgroundColor: '#191919 !important',
            WebkitBoxShadow: '0 0 0px 1000px #191919 inset !important',
            WebkitTextFillColor: `${palette.white.subtitle} !important`, 
            fontSize: '16px !important',
            fontWeight: 400,
            lineHeight: '130%',
            letterSpacing: '-2%'
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: palette.white.subtitle
          }
        }
      }
    },
    
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.white.subtitle
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.white.subtitle
        }
        }
      }
    }
  }
})

export default theme