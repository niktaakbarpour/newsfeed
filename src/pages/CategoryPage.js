import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import {useSelector} from "react-redux";
import VerticalCardList from "../components/VerticalCardList";
import {makeStyles} from "@material-ui/core/styles";

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
        history.push(`/${category.toLowerCase()}/${item.id}`)
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(news => setNews(news));
    }, [])

    const selectedCategory = categories.find((item) => {
        return item.title.toLowerCase() === category
    })
    return (
        <div>
            <h1 className={classes.categoryTitle}>{selectedCategory.title}</h1>
            <VerticalCardList items={news} onClick={onItemClicked}/>
        </div>)
}