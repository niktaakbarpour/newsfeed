import React from 'react';
import {useParams} from 'react-router-dom'
import {useSelector} from "react-redux";

export default function CategoryPage() {
    const {category} = useParams()
    const categories = useSelector(state => state.categories.list)
    const selectedCategory = categories.find((item) => {
        return item.title.toLowerCase() === category
    })
    return (
        <div>
            <h1>{selectedCategory.title}</h1>
        </div>)
}