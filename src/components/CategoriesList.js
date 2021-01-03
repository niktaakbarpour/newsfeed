import React from 'react';
import Category from "./Category";
import {useSelector} from "react-redux";

export default function CategoriesList() {
    const categories = useSelector(state => state.categories.list)
    return (
        <div>
            {
                categories.map(category => <Category key={category.id} category={category}/>)
            }
        </div>
    )
}