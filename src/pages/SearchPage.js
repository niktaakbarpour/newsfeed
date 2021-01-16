import React, {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../constants/Constants";
import {useParams} from "react-router-dom";
import VerticalCardList from "../components/VerticalCardList";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
        title: {
            marginLeft: theme.spacing(2)
        }
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
            <h1 className={classes.title}>{query}</h1>
            <VerticalCardList items={news} onClick={onItemClicked}/>
        </div>
    )
}