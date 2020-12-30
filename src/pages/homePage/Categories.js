import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import NewsList from "./newsList/NewsList";

const useStyles = makeStyles((theme) => ({
    hr: {
        color: theme.palette.secondary.main,
        height: "10px",
        backgroundColor: theme.palette.secondary.main,
        width: "100%",
        display: "inline-flex",
    },
    categoryContainer: {
        width: "70%",
    },
    moreButton: {
        float: "right"
    },
    title: {
        fontFamily: "Staatliches",
        fontSize: "50px",
        marginBottom: "-20px",
        marginTop: "-20px"
    },
    titleAndMoreButtonContainer: {
        display: "flex",
        justifyContent: "space-between"
    }
}));

function Categories(props) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.categoryContainer}>
                <div className={classes.titleAndMoreButtonContainer}>
                    <p className={classes.title}>{props.n.username}</p>
                    <Button className={classes.moreButton} variant="contained" color="secondary">
                        More +
                    </Button>
                </div>
                <hr className={classes.hr}/>
                <NewsList news={props.news} />
            </div>
        </div>
    );
}

export default Categories;
