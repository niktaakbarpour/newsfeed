import React, {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../constants/Constants";
import {useParams} from "react-router-dom";
import VerticalCardList from "../components/VerticalCardList";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
        title: {
            marginLeft: theme.spacing(2),
            marginBottom: theme.spacing(-1)
        },
        hr: {
            color: theme.palette.secondary.main,
            height: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
            width: "100%",
            display: "inline-flex",
        },
    })
);

export default function SearchPage() {
    const classes = useStyles();
    const {query} = useParams()
    const [news, setNews] = useState([])

    useEffect(() => {
        //API
        axios.get(`${BASE_URL}/api/news?query=${query}`)
            .then((response) => {
                setNews(response.data)
            })
    }, [])

    const onItemClicked = () => {
    }

    return (
        <div>
            <h1 className={classes.title}>Search For "{query}"</h1>
            <hr className={classes.hr}/>
            <VerticalCardList items={news} onClick={onItemClicked}/>
        </div>
    )
}