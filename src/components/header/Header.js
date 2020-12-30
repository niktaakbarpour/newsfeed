import React from 'react';
import logo from '../../assets/logo.png';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    name: {
        fontFamily: "Staatliches",
        fontSize: "100px",
        // marginTop: "-120px",
        margin: "auto",
        alignSelf: "center",
        // marginLeft: "200px"
    },
    image: {
        marginTop: "20px",
        marginLeft: "20px"
    },
    container: {
        display: "flex"
    }
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img className={classes.image} height='100px' width='100px' src={logo} alt="Logo"/>
            <p className={classes.name}>Fake news!</p>
        </div>
    )
}