import './App.css';
import HomePage from "./pages/homePage/HomePage";
import {createMuiTheme, ThemeProvider, responsiveFontSizes} from '@material-ui/core/styles';
import React from "react";
import {blue} from "@material-ui/core/colors";

let theme = createMuiTheme({
    spacing:8,
    palette: {
        primary: {
            light: "#a8dadc",
            main: "#1d3557"
        },
        secondary: {
            light: "#ff5a5f",
            main: "#c81d25"
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "#fefefe"
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
