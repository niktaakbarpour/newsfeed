import React from 'react';
import logo from '../assets/logo.png';
import {makeStyles} from "@material-ui/core/styles";
import {DateAndTime} from "./DateAndTime";

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
            marginTop: theme.spacing(3),
            width: theme.spacing(30),
            marginLeft: theme.spacing(2),
            height:theme.spacing(10)
        },
        container: {
            display: "flex",
            justifyContent: "space-between"
        },
    dateAndTime: {
            marginTop: theme.spacing(5),
        marginRight: theme.spacing(2)
    }
    })
);

export default function Header() {
    const classes = useStyles();
    const {date, time} = DateAndTime();
    return (
        <div className={classes.container}>
            <img className={classes.image} height='100px' width='100px' src={logo} alt="Logo"/>
            <p className={classes.name}>Veritical news!</p>
            <div>
                <h3 className={classes.dateAndTime}>
                    {date}
                    <br />
                    {time}
                </h3>
            </div>
        </div>
    )
}