import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
        item: {
            color: theme.palette.primary.main,
            '&:visited': {
                color: theme.palette.primary.main
            },
            '&:hover': {
                color: theme.palette.secondary.main
            },
            marginRight: theme.spacing(3),
            display: "inline",
            margin: theme.spacing(0)
        }
    })
);

export default function FollowUs() {
    const classes = useStyles();

    return (
        <div>
            <a className={classes.item} href="/book">
                <FacebookIcon fontSize="large"/>
            </a>
            <a className={classes.item} href="">
                <InstagramIcon fontSize="large"/>
            </a>
            <a className={classes.item} href="">
                <TwitterIcon fontSize="large"/>
            </a>
            <a className={classes.item} href="">
                <YouTubeIcon fontSize="large"/>
            </a>
        </div>
    );
}
