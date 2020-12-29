import React from 'react';
import SideBar from "../../components/sidebar/SideBar";
import LogoAndName from "../../components/logo/LogoAndName";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    hr: {
        color: "red",
        height: "10px",
        backgroundColor: "red",
        width: "100%",
        display: "inline-flex"
    },
    lineHolder: {
        width: "70%",
    },
    moreButton: {
        float: "right"
    }
}));

function HomePage() {
    const classes = useStyles();
    return (
        <div>
            <LogoAndName/>
            <SideBar/>
            <div className={classes.lineHolder}>
                <Button className={classes.moreButton} variant="contained" color="secondary">
                    More
                </Button>
                <hr className={classes.hr}/>
            </div>
        </div>
    );
}

export default HomePage;
