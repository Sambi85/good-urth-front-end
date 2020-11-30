import { createMuiTheme }  from '@material-ui/core/styles'
// import Montserrat from 'fontsource-montserrat'
// import Lekton from 'fontsource-lekton'

const theme = createMuiTheme({
  palette: {
    primary: { 
        main: '#356859'
    },
    secondary: {
        main: '#FD5523'
    },
    background: {
        default: '#FFFBE6',
    },
    // Not sure if this works? 
    typography: {
        fontFamily: [
            // Montserrat,
            // Lekton
        ].join(','),
    },
  },
})
export default theme