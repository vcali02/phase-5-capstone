import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/';
// A custom theme for this app
const theme = createTheme({
  spacing: 10,
  palette: {
    type: 'light',
    primary: {
      main: '#E7CAAC', //backPeach
      light: '#D76E53', //headerBackPink
      dark: '#7E6936', //headerBackGreen
    },
    secondary: {
      main: '#9D8853', //formBackGreen
      light: '#FFAE99', //cardBackPink
      dark: '#967C3D', //pageBackGreen
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#D9B590',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#fff', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});
export default theme;