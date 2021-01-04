import React from 'react';
import Category from "../components/Category";
import {useSelector} from "react-redux";
import ReactPlaceholder from "react-placeholder";
import CategoriesPlaceHolder from "../placeholders/CategoriesPlaceHolder";


export default function HomePage() {
    const categories = useSelector(state => state.categories.list)
    return (
        <div>
            <ReactPlaceholder
                showLoadingAnimation={true}
                ready={categories.length !== 0}
                customPlaceholder={<CategoriesPlaceHolder count={3}/>}
            >
                {
                    categories.map(category => <Category key={category.id} category={category}/>)
                }
            </ReactPlaceholder>
        </div>
    )
}