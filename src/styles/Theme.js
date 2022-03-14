import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#387898',
        },
        secondary: {
          main: '#009af5',
        },
        info: {
          main: '#21dbf3',
        },
        backgroundColor: {
          main: '#21dbf3'
        }

      },
      overrides: {
        MuiAppBar: {
          colorInherit: {
            backgroundColor: '#6A995C',
            color: '#fff',
          },
        },
      },

})

export default theme; 

