import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF', // cyan color
        },
        secondary: {
            main: '#3AA14F' // Green
        },
        third: {
            main: '#FFFFFF' // Light white
        },
        bg: {
            main: '#282828' //Dark grey
        },
        bg_secondary: {
            main: '#dcdcdc' //lighter grey
        },
        menu_grey: {
            main: '#585858' //grey white
        }
    },
    typography: {
        fontFamily: 'sans-serif',
        color: 'black',
    },
    components: {
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: 'sans-serif',
                    fontSize: '30px',
                    margin: 10
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                list: {
                    backgroundColor: '#585858',
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#FFFFFF',
                }
            }
        },
      },
});