import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {useSelector} from "react-redux";
import VerticalCardList from "../components/VerticalCardList";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import {BASE_URL} from "../constants/Constants";
import ReactPlaceholder from "react-placeholder";
import VerticalCardListPlaceHolder from "../placeholders/VerticalCardListPlaceHolder";

const useStyles = makeStyles((theme) => ({
        categoryTitle: {
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

export default function CategoryPage() {
    const classes = useStyles();
    const {category} = useParams()
    const categories = useSelector(state => state.categories.list)
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const onItemClicked = (item) => {
        //ROUTING
        window.open(item.link, '_blank')
    }

    useEffect(() => {
        const selectedCategory = categories.find((item) => {
            return item.name.toLowerCase() === category
        })
        setIsLoading(true)
        //API
        axios.get(`${BASE_URL}/api/categories/${selectedCategory.id}/news`)
            .then((response) => {
                setNews(response.data)
                setIsLoading(false)
            })
    }, [category])

    const selectedCategory = categories.find((item) => {
        return item.name.toLowerCase() === category
    })

    return (
        <div>
            <h1 className={classes.categoryTitle}>{selectedCategory.name.toUpperCase()}</h1>
            <hr className={classes.hr}/>
            <ReactPlaceholder ready={!isLoading}
                              showLoadingAnimation
                              customPlaceholder={<VerticalCardListPlaceHolder count={10}/>}>
                <VerticalCardList items={news} onClick={onItemClicked}/>
            </ReactPlaceholder>
        </div>
    )
}