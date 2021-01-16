import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import {useSelector} from "react-redux";
import VerticalCardList from "../components/VerticalCardList";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import {BASE_URL} from "../constants/Constants";

const useStyles = makeStyles((theme) => ({
        categoryTitle: {
            marginLeft: theme.spacing(2)
        }
    })
);

export default function CategoryPage() {
    const classes = useStyles();
    const {category} = useParams()
    const categories = useSelector(state => state.categories.list)
    const [news, setNews] = useState([])
    const history = useHistory()

    const onItemClicked = (item) => {
        //ROUTING
        window.open(item.link, '_blank')
    }

    useEffect(() => {
        const selectedCategory = categories.find((item) => {
            return item.name.toLowerCase() === category
        })
        //API
        axios.get(`${BASE_URL}/api/categories/${selectedCategory.id}/news`)
            .then((response) => {
                setNews(response.data)
            })
    }, [])

    const selectedCategory = categories.find((item) => {
        return item.name.toLowerCase() === category
    })

    return (
        <div>
            <h1 className={classes.categoryTitle}>{selectedCategory.name}</h1>
            <VerticalCardList items={news} onClick={onItemClicked}/>
        </div>
    )
}