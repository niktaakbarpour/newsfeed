import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import HorizontalCardList from "./HorizontalCardList";
import {useHistory} from "react-router-dom";
import ReactPlaceholder from "react-placeholder";
import HorizontalCardListPlaceHolder from "../placeholders/HorizontalCardListPlaceHolder";

const useStyles = makeStyles((theme) => ({
        hr: {
            color: theme.palette.secondary.main,
            height: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
            width: "100%",
            display: "inline-flex",
        },
        categoryContainer: {
            marginBottom: theme.spacing(4)
        },
        moreButton: {
            float: "right"
        },
        title: {
            fontFamily: "Staatliches",
            fontSize: "50px",
            marginBottom: theme.spacing(-2),
            marginTop: theme.spacing(-2),
            marginLeft: theme.spacing(3)
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
            .then(news => setNews(news.slice(0, 4)));
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
            <ReactPlaceholder ready={news.length !== 0} customPlaceholder={<HorizontalCardListPlaceHolder count={4}/>}>
                <HorizontalCardList items={news} onClick={onItemClicked}/>
            </ReactPlaceholder>
        </div>
    );
}