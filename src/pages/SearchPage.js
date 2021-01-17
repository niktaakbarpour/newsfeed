import React, {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../constants/Constants";
import {useParams} from "react-router-dom";
import VerticalCardList from "../components/VerticalCardList";
import {makeStyles} from "@material-ui/core/styles";
import ReactPlaceholder from "react-placeholder";
import VerticalCardListPlaceHolder from "../placeholders/VerticalCardListPlaceHolder";

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
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        //API
        setIsLoading(true)
        axios.get(`${BASE_URL}/api/news?query=${query}`)
            .then((response) => {
                setIsLoading(false)
                setNews(response.data)
            })
    }, [query])

    const onItemClicked = (item) => {
        //ROUTING
        window.open(item.link, '_blank')
    }

    return (
        <div>
            <h1 className={classes.title}>Search For "{query}"</h1>
            <hr className={classes.hr}/>
            <ReactPlaceholder ready={!isLoading}
                              showLoadingAnimation
                              customPlaceholder={<VerticalCardListPlaceHolder count={10}/>}>
                {
                    news.length === 0 ?
                        <h1>Nothing Found</h1> :
                        <VerticalCardList items={news} onClick={onItemClicked}/>
                }
            </ReactPlaceholder>
        </div>
    )
}