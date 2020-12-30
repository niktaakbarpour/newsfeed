import React from 'react';
import Categories from "./Categories";

const CategoriesList = props => {

    return (
        <div >
            {
                props.news.map(n =>
                    <Categories key={n.id} n={n}/>
                )
            }
        </div>
    )
}

export default CategoriesList;