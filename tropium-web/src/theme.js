import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#98ee99',
            main: '#66bb6a',
            dark: '#338a3e',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff8a50',
            main: '#ff5722',
            dark: '#c41c00',
            contrastText: '#000',
        },
    },
});
export default theme;
