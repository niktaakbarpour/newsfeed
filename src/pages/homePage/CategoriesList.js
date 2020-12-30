import React from 'react';
import Category from "./Category";

export default function CategoriesList({categories}) {
    return (
        <div>
            {
                categories.map(category => <Category key={category.id} category={category}/>)
            }
        </div>
    )
}