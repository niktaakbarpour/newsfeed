import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

export default function NewsPage() {
    const {category, newsId} = useParams()
    const categories = useSelector(state => state.categories.list)
    const selectedCategory = categories.find((item) => {
        return item.name.toLowerCase() === category
    })
    return (
        <div>
            <h1>{selectedCategory.name}/{newsId}</h1>
        </div>)
}