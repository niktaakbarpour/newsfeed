import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useSelector} from "react-redux";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SendIcon from '@material-ui/icons/Send';
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({

        footer: {
            textAlign: "center",
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(3),
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.reverse,
            marginTop: theme.spacing(5)
        },

        footerTitle: {
            marginBottom: theme.spacing(0),
            fontSize: "1em"
        },

        newsLetter: {
            display: "table",
            whiteSpace: "nowrap",
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            margin: "auto",
            // border: "1px solid #555"
        },

        newsLetterInput: {
            border: "0",
            display: "inline-block",
            fontSize: ".9em",
            background: "transparent",
            color: theme.palette.text.reverse,
            // paddingTop: theme.spacing(1),
            // paddingRight: theme.spacing(2),
            // paddingBottom: theme.spacing(1),
            // paddingLeft: theme.spacing(2),
            // marginTop: theme.spacing(0),
            // marginRight: theme.spacing(-1),
            // marginBottom: theme.spacing(0),
            // marginLeft: theme.spacing(-1),
        },

        newsLetterBtn: {
            display: "inline-block",
            textDecoration: "none",
            color: theme.palette.text.reverse,
            // backgroundColor: "999",
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(-1),
            marginBottom: theme.spacing(0),
            marginLeft: theme.spacing(-1),
            paddingTop: theme.spacing(1),
            paddingRight: theme.spacing(2),
            paddingBottom: theme.spacing(1),
            paddingLeft: theme.spacing(2),
        },

        socialLinks: {
            padding: theme.spacing(0),
            margin: "auto",
            listStyle: "none",
            textAlign: "center",
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },

        socialLinkLi: {
            display: "inline-block",
            marginTop: theme.spacing(0),
            marginRight: theme.spacing(2),
            marginBottom: theme.spacing(0),
            marginLeft: theme.spacing(2),
        },

        socialLink: {
            display: "block",
            padding: theme.spacing(1.5),
            fontSize: "1.5em",
            textDecoration: "none",
            color: "#ccc",
            '&:hover': {
                color: "#fff"
            }
        },

        copyRight: {
            fontSize: ".9em"
        }

    })
);

const CssTextField = withStyles({
    root: {
        '& label': {
            color: '#ccc',
        },
        '& label.Mui-focused': {
            color: '#ccc',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#ccc',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#ccc',
            },
            '&:hover fieldset': {
                borderColor: '#ccc',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#ccc',
            },
        },
    },
})(TextField);

export default function Footer() {
    const classes = useStyles();
    const categories = useSelector(state => state.categories.list)

    return (
        <footer className={classes.footer}>

            <p className={classes.footerTitle}>Get Latest News</p>
            <div className={classes.newsLetter}>
                {/*<TextField className={classes.newsLetterInput} id="outlined-basic" label="Enter Your Email" variant="outlined" />*/}
                <CssTextField
                    className={classes.margin}
                    label="Enter Your Email"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    className={classes.newsLetterInput}
                />
                {/*<input className={classes.newsLetterInput} type="email" placeholder="Enter Your Email"/>*/}
                {/*<InputBase*/}
                {/*    className={classes.margin}*/}
                {/*    defaultValue="Naked input"*/}
                {/*    inputProps={{ 'aria-label': 'naked' }}*/}
                {/*/>*/}
                <a className={classes.newsLetterBtn} href=""><SendIcon/></a>
            </div>

            <ul className={classes.socialLinks}>
                <li className={classes.socialLinkLi}>
                    <a className={classes.socialLink} href="">
                        <InstagramIcon/>
                    </a>
                </li>
                <li className={classes.socialLinkLi}>
                    <a className={classes.socialLink} href="">
                        <TwitterIcon/>
                    </a>
                </li>
                <li className={classes.socialLinkLi}>
                    <a className={classes.socialLink} href="">
                        <FacebookIcon/>
                    </a>
                </li>
                <li className={classes.socialLinkLi}>
                    <a className={classes.socialLink} href="">
                        <YouTubeIcon/>
                    </a>
                </li>
            </ul>

            <p className={classes.copyRight}>copyright 2021</p>

        </footer>
    );
}
