import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import MostReadVerticalCardList from "./MostReadVerticalCardList";

const useStyles = makeStyles((theme) => ({
title: {
    marginLeft: theme.spacing(1)
}
    })
);

export default function MostRead() {
    const classes = useStyles();

    const [news, setNews] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(news => setNews(news));
    }, [])

    return (
        <div>
            <h3 className={classes.title}>Most Read</h3>
            <MostReadVerticalCardList items={news}/>
        </div>)
}