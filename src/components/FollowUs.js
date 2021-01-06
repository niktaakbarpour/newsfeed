import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
        cardList: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
        },
        title: {
            marginLeft: theme.spacing(1)
        },
        facebook: {
            backgroundColor: "#ffffff",
            display: "flex"
        }
    })
);

export default function FollowUs() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.cardList}>
                <a className={classes.facebook} href="">
                    <FacebookIcon fontSize="large"/>
                </a>
                <a className={classes.facebook} href="">
                    <InstagramIcon fontSize="large"/>
                </a>
                <a className={classes.facebook} href="">
                    <TwitterIcon fontSize="large"/>
                </a>
                <a className={classes.facebook} href="">
                    <YouTubeIcon fontSize="large"/>
                </a>
            </div>
        </div>
    );
}
