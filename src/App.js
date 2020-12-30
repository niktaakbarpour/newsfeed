import './App.css';
import HomePage from "./pages/homePage/HomePage";
import {createMuiTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';
import React from "react";
import {blue} from "@material-ui/core/colors";

let theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500]
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
