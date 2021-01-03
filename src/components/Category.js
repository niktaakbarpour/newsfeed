import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import HorizontalCardList from "./HorizontalCardList";
import {useHistory} from "react-router-dom";

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
            marginBottom: "30px"
        },
        moreButton: {
            float: "right"
        },
        title: {
            fontFamily: "Staatliches",
            fontSize: "50px",
            marginBottom: "-20px",
            marginTop: "-20px",
            marginLeft: "20px"
        },
        titleAndMoreButtonContainer: {
            display: "flex",
            justifyContent: "space-between"
        }
    })
);

export default function Category({category}) {
    const classes = useStyles();
    const [news, setNews] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(news => setNews(news.slice(0, 3)));
    }, [])

    const handleClickMore = () => {
        history.push(`/${category.title.toLowerCase()}`)
    }

    const onItemClicked = (item) => {
        history.push(`/${category.title.toLowerCase()}/${item.id}`)
    }

    return (
        <div className={classes.categoryContainer}>
            <div className={classes.titleAndMoreButtonContainer}>
                <p className={classes.title}>{category.title}</p>
                <Button className={classes.moreButton} variant="contained" color="secondary" onClick={handleClickMore}>
                    More +
                </Button>
            </div>
            <hr className={classes.hr}/>
            <HorizontalCardList items={news} onClick={onItemClicked}/>
        </div>
    );
}