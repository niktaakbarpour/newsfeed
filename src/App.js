import './App.css';
import HomePage from "./pages/homePage/HomePage";
import {createMuiTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';
import React from "react";
import {cyan, grey, indigo, red} from "@material-ui/core/colors";

let theme = createMuiTheme({
    spacing: 8,
    palette: {
        primary: {
            light: cyan[100],
            main: indigo[900]
        },
        secondary: {
            light: red.A200,
            main: red[800]
        },
        text: {
            reverse: grey[50]
        }
    }
});
theme = responsiveFontSizes(theme);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <HomePage/>
        </ThemeProvider>
    );
}

export default App;
