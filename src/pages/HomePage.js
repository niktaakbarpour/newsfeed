import React from 'react';
import Category from "../components/Category";
import {useSelector} from "react-redux";

export default function HomePage() {
    const categories = useSelector(state => state.categories.list)
    return (
        <div>
            {
                categories.map(category => <Category key={category.id} category={category}/>)
            }
        </div>
    )
}